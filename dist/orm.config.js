"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const bisnis_owner_entity_1 = require("./bisnis-owner/bisnis-owner.entity");
const fasyankes_entity_1 = require("./fasyankes/fasyankes.entity");
const bo_infos_entity_1 = require("./bo-infos/bo-infos.entity");
const legal_dokumen_entity_1 = require("./legal-dokumen/legal-dokumen.entity");
const access_console_entity_1 = require("./access-console/entities/access-console.entity");
const access_fasyankes_entity_1 = require("./access_fasyankes/access_fasyankes.entity");
const history_legal_doc_entity_1 = require("./history-legal-doc/history-legal-doc.entity");
const history_bo_info_entity_1 = require("./history-bo-info/history-bo-info.entity");
exports.config = {
    type: 'postgres',
    host: '127.0.0.1',
    port: 5432,
    username: 'postgres',
    password: '',
    database: 'bisnis-owner',
    entities: [
        bisnis_owner_entity_1.BisnisOwner,
        fasyankes_entity_1.Fasyankes,
        bo_infos_entity_1.BoInfos,
        legal_dokumen_entity_1.LegalDokumen,
        access_console_entity_1.AccessConsole,
        access_fasyankes_entity_1.AccessFasyankes,
        history_legal_doc_entity_1.HistoryLegalDoc,
        history_bo_info_entity_1.HistoryBoInfo,
    ],
    synchronize: false,
    logging: true,
    logger: 'advanced-console',
};
//# sourceMappingURL=orm.config.js.map