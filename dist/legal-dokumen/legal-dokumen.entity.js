"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LegalDokumen = void 0;
const bisnis_owner_entity_1 = require("../bisnis-owner/bisnis-owner.entity");
const typeorm_1 = require("typeorm");
let LegalDokumen = class LegalDokumen {
};
exports.LegalDokumen = LegalDokumen;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], LegalDokumen.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], LegalDokumen.prototype, "bisnis_owner_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], LegalDokumen.prototype, "ktp", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], LegalDokumen.prototype, "akta", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], LegalDokumen.prototype, "sk_kemenkumham", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], LegalDokumen.prototype, "npwp", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], LegalDokumen.prototype, "nib", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], LegalDokumen.prototype, "iso", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], LegalDokumen.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LegalDokumen.prototype, "reason", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], LegalDokumen.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", Date)
], LegalDokumen.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => bisnis_owner_entity_1.BisnisOwner, (bisnisOwner) => bisnisOwner.legalDokumen),
    (0, typeorm_1.JoinColumn)({ name: 'bisnis_owner_id' }),
    __metadata("design:type", bisnis_owner_entity_1.BisnisOwner)
], LegalDokumen.prototype, "bisnisOwner", void 0);
exports.LegalDokumen = LegalDokumen = __decorate([
    (0, typeorm_1.Entity)('legal_doc_bo')
], LegalDokumen);
//# sourceMappingURL=legal-dokumen.entity.js.map