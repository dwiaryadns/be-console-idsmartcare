"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const orm_config_1 = require("./orm.config");
const bisnis_owner_module_1 = require("./bisnis-owner/bisnis-owner.module");
const fasyankes_module_1 = require("./fasyankes/fasyankes.module");
const bo_infos_module_1 = require("./bo-infos/bo-infos.module");
const legal_dokumen_module_1 = require("./legal-dokumen/legal-dokumen.module");
const auth_module_1 = require("./access-console/auth/auth.module");
const access_fasyankes_module_1 = require("./access_fasyankes/access_fasyankes.module");
const history_bo_info_module_1 = require("./history-bo-info/history-bo-info.module");
const history_legal_doc_service_1 = require("./history-legal-doc/history-legal-doc.service");
const history_legal_doc_module_1 = require("./history-legal-doc/history-legal-doc.module");
const history_legal_doc_controller_1 = require("./history-legal-doc/history-legal-doc.controller");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(orm_config_1.config),
            bisnis_owner_module_1.BisnisOwnerModule,
            fasyankes_module_1.FasyankesModule,
            bo_infos_module_1.BoInfosModule,
            legal_dokumen_module_1.LegalDokumenModule,
            auth_module_1.AuthModule,
            access_fasyankes_module_1.AccessFasyankesModule,
            history_bo_info_module_1.HistoryBoInfoModule,
            history_legal_doc_module_1.HistoryLegalDocModule,
        ],
        controllers: [app_controller_1.AppController, history_legal_doc_controller_1.HistoryLegalDocController],
        providers: [app_service_1.AppService, history_legal_doc_service_1.HistoryLegalDocService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map