import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BoInfos } from './bo-infos.entity';
import { HistoryBoInfo } from 'src/history-bo-info/history-bo-info.entity';
import { Notifications } from 'src/notification/notifications.entity';

@Injectable()
export class BoInfosService {
  constructor(
    @InjectRepository(BoInfos)
    private readonly boInfosRepository: Repository<BoInfos>,

    @InjectRepository(HistoryBoInfo)
    private readonly historyBoInfoRepository: Repository<HistoryBoInfo>,

    @InjectRepository(Notifications)
    private readonly notificationsRepository: Repository<Notifications>,
  ) {}

  // get id dari tabel bo-infos
  async findOne(id: number): Promise<BoInfos> {
    return await this.boInfosRepository.findOne({ where: { id } });
  }

  // update status
  async updateStatus(
    id: number,
    newStatus: string,
    reason?: string,
    petugas?: string, // Tambahkan parameter petugas
  ): Promise<{ boInfo: BoInfos }> {
    // Ambil data boInfo berdasarkan ID
    const boInfo = await this.boInfosRepository.findOne({
      where: { id },
    });

    if (!boInfo) {
      throw new NotFoundException(`BoInfos dengan ID ${id} tidak ditemukan`);
    }

    // Update status dan alasan
    boInfo.status = newStatus;
    boInfo.reason =
      (['pending', 'rejected'].includes(newStatus) ? reason : null) || null;

    await this.boInfosRepository.save(boInfo);

    // Tambahkan entri baru ke dalam tabel riwayat
    const historyEntry = new HistoryBoInfo();
    historyEntry.boInfoId = boInfo.id; // ID boInfo yang baru diperbarui
    historyEntry.status = newStatus; // Status yang baru
    historyEntry.petugas = petugas; // Gunakan nama petugas dari body permintaan

    // Set waktu saat ini untuk created_at dan updated_at
    const currentDateTime = new Date(); // Atur waktu saat ini
    historyEntry.created_at = currentDateTime; // Atur created_at dengan waktu saat ini
    historyEntry.updated_at = currentDateTime; // Atur updated_at dengan waktu saat ini

    await this.historyBoInfoRepository.save(historyEntry); // Simpan entri riwayat

    const notificationsEntry = new Notifications();
    notificationsEntry.bisnisOwnerId = boInfo.bisnis_owner_id;
    notificationsEntry.title = `Status Bisnis Owners Info ${boInfo.id} Diperbarui`;
    notificationsEntry.message = `Status baru: ${newStatus}${['pending', 'rejected'].includes(newStatus) ? `. Alasan: ${reason || 'Tidak ada'}` : ''}`;
    notificationsEntry.is_read = false;
    switch (newStatus) {
      case 'approved':
        notificationsEntry.type = 'passed';
        break;
      case 'rejected':
        notificationsEntry.type = 'failed';
        break;
      case 'pending':
        notificationsEntry.type = 'info';
        break;
      case 'on review':
        notificationsEntry.type = 'info';
        break;
      default:
        notificationsEntry.type = 'update'; // Jika status tidak dikenali, gunakan default
    }
    notificationsEntry.path = `/bo-infos/${boInfo.id}`;
    notificationsEntry.created_at = new Date(); // Atur created_at dengan waktu saat ini
    notificationsEntry.updated_at = new Date(); //

    await this.notificationsRepository.save(notificationsEntry); // Simpan notifikasi

    // Ambil history boInfo tanpa kolom bisnisOwnerId
    const history = await this.historyBoInfoRepository
      .createQueryBuilder('history')
      .select([
        'history.id',
        'history.boInfoId',
        'history.status',
        'history.petugas',
        'history.created_at',
        'history.updated_at',
      ])
      .where('history.boInfoId = :id', { id: boInfo.id })
      .getMany();

    // Tambahkan history ke dalam boInfo
    (boInfo as any).history = history;

    return { boInfo };
  }

  // relation
  async findAll(): Promise<BoInfos[]> {
    return this.boInfosRepository.find({ relations: ['bisnisOwner'] });
  }
}
