"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LegalDokumenModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const legal_dokumen_service_1 = require("./legal-dokumen.service");
const legal_dokumen_controller_1 = require("./legal-dokumen.controller");
const legal_dokumen_entity_1 = require("./legal-dokumen.entity");
let LegalDokumenModule = class LegalDokumenModule {
};
exports.LegalDokumenModule = LegalDokumenModule;
exports.LegalDokumenModule = LegalDokumenModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([legal_dokumen_entity_1.LegalDokumen])],
        exports: [typeorm_1.TypeOrmModule],
        controllers: [legal_dokumen_controller_1.LegalDokumenController],
        providers: [legal_dokumen_service_1.LegalDokumenService],
    })
], LegalDokumenModule);
//# sourceMappingURL=legal-dokumen.module.js.map