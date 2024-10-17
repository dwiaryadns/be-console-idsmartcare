import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LegalDokumen } from './legal-dokumen.entity';
import { HistoryLegalDoc } from 'src/history-legal-doc/history-legal-doc.entity';
import { Notifications } from 'src/notification/notifications.entity';

@Injectable()
export class LegalDokumenService {
  constructor(
    @InjectRepository(LegalDokumen)
    private readonly legalDokumenRepository: Repository<LegalDokumen>,
    @InjectRepository(HistoryLegalDoc)
    private readonly historyLegalDocRepository: Repository<HistoryLegalDoc>, // Tambahkan repository history
    @InjectRepository(Notifications)
    private readonly notificationsRepository: Repository<Notifications>, // Tambahkan repository notification
  ) {}

  // update status
  async updateStatus(
    id: number,
    newStatus: string,
    reason?: string,
    petugas?: string, // Tambahkan parameter petugas
  ): Promise<{ legalDokumen: LegalDokumen }> {
    // Ambil data legal dokumen berdasarkan ID
    const legalDokumen = await this.legalDokumenRepository.findOne({
      where: { id },
    });

    if (!legalDokumen) {
      throw new NotFoundException(
        `Legal Dokumen dengan ID ${id} tidak ditemukan`,
      );
    }

    // Update status dan alasan
    legalDokumen.status = newStatus;
    legalDokumen.reason =
      (['pending', 'rejected'].includes(newStatus) ? reason : null) || null;

    await this.legalDokumenRepository.save(legalDokumen);

    // Tambahkan entri baru ke dalam tabel riwayat
    const historyEntry = new HistoryLegalDoc();
    historyEntry.legalDocBoId = legalDokumen.id; // ID legalDokumen yang baru diperbarui
    historyEntry.status = newStatus; // Status yang baru
    historyEntry.petugas = petugas; // Gunakan nama petugas dari body

    // Set waktu saat ini untuk created_at dan updated_at
    historyEntry.created_at = new Date(); // Atur created_at dengan waktu saat ini
    historyEntry.updated_at = new Date(); // Atur updated_at dengan waktu saat ini

    await this.historyLegalDocRepository.save(historyEntry); // Simpan entri riwayat

    // Buat entri notifikasi
    const notificationEntry = new Notifications();
    notificationEntry.bisnisOwnerId = legalDokumen.bisnis_owner_id; // Ganti dengan ID bisnis owner yang sesuai
    notificationEntry.title = `Status Legal Dokumen ${legalDokumen.id} Diperbarui`;
    notificationEntry.message = `Status baru: ${newStatus}${['pending', 'rejected'].includes(newStatus) ? `. Alasan: ${reason || 'Tidak ada'}` : ''}`;
    notificationEntry.is_read = false; // Set notifikasi sebagai belum dibaca
    // Deteksi tipe notifikasi berdasarkan status
    switch (newStatus) {
      case 'approved':
        notificationEntry.type = 'passed';
        break;
      case 'rejected':
        notificationEntry.type = 'failed';
        break;
      case 'pending':
        notificationEntry.type = 'info';
        break;
      case 'on review':
        notificationEntry.type = 'info';
        break;
      default:
        notificationEntry.type = 'update'; // Jika status tidak dikenali, gunakan default
    }
    notificationEntry.path = `/legal-documents/${legalDokumen.id}`; // Sesuaikan path sesuai kebutuhan Anda

    await this.notificationsRepository.save(notificationEntry); // Simpan entri notifikasi

    // Ambil history legal dokumen tanpa kolom bisnisOwnerId
    const history = await this.historyLegalDocRepository
      .createQueryBuilder('history')
      .select([
        'history.id',
        'history.legal_doc_bo_id',
        'history.status',
        'history.petugas',
        'history.created_at',
        'history.updated_at',
      ])
      .where('history.legal_doc_bo_id = :id', { id })
      .getMany();

    // Tambahkan history ke dalam legalDokumen
    (legalDokumen as any).history = history;

    return { legalDokumen };
  }

  // get id dari tabel legal_doc_bo
  async findOne(id: number): Promise<LegalDokumen> {
    return await this.legalDokumenRepository.findOne({ where: { id } });
  }
  // get
  async findAll(): Promise<LegalDokumen[]> {
    return this.legalDokumenRepository.find({ relations: ['bisnisOwner'] });
  }
}
