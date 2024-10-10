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
exports.BisnisOwner = void 0;
const class_transformer_1 = require("class-transformer");
const bo_infos_entity_1 = require("../bo-infos/bo-infos.entity");
const history_bo_info_entity_1 = require("../history-bo-info/history-bo-info.entity");
const history_legal_doc_entity_1 = require("../history-legal-doc/history-legal-doc.entity");
const legal_dokumen_entity_1 = require("../legal-dokumen/legal-dokumen.entity");
const typeorm_1 = require("typeorm");
let BisnisOwner = class BisnisOwner {
};
exports.BisnisOwner = BisnisOwner;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], BisnisOwner.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], BisnisOwner.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], BisnisOwner.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, unique: true }),
    __metadata("design:type", String)
], BisnisOwner.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], BisnisOwner.prototype, "email_verified_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], BisnisOwner.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], BisnisOwner.prototype, "is_send_email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], BisnisOwner.prototype, "is_resend", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], BisnisOwner.prototype, "is_first_login", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], BisnisOwner.prototype, "img_profile", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], BisnisOwner.prototype, "is_2fa", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], BisnisOwner.prototype, "remember_token", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", Date)
], BisnisOwner.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", Date)
], BisnisOwner.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => bo_infos_entity_1.BoInfos, (boInfos) => boInfos.bisnisOwner),
    __metadata("design:type", bo_infos_entity_1.BoInfos)
], BisnisOwner.prototype, "boInfos", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => legal_dokumen_entity_1.LegalDokumen, (legalDokumen) => legalDokumen.bisnisOwner),
    __metadata("design:type", legal_dokumen_entity_1.LegalDokumen)
], BisnisOwner.prototype, "legalDokumen", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => history_bo_info_entity_1.HistoryBoInfo, (historyBoInfo) => historyBoInfo.bisnisOwner),
    __metadata("design:type", Array)
], BisnisOwner.prototype, "historyBoInfos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => history_legal_doc_entity_1.HistoryLegalDoc, (historyLegalDoc) => historyLegalDoc.bisnisOwner),
    __metadata("design:type", Array)
], BisnisOwner.prototype, "historyLegalDocs", void 0);
exports.BisnisOwner = BisnisOwner = __decorate([
    (0, typeorm_1.Entity)('bisnis_owners')
], BisnisOwner);
//# sourceMappingURL=bisnis-owner.entity.js.map