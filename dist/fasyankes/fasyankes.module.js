"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FasyankesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const fasyankes_controller_1 = require("./fasyankes.controller");
const fasyankes_service_1 = require("./fasyankes.service");
const fasyankes_entity_1 = require("./fasyankes.entity");
let FasyankesModule = class FasyankesModule {
};
exports.FasyankesModule = FasyankesModule;
exports.FasyankesModule = FasyankesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([fasyankes_entity_1.Fasyankes])],
        exports: [typeorm_1.TypeOrmModule],
        controllers: [fasyankes_controller_1.FasyankesController],
        providers: [fasyankes_service_1.FasyankesService],
    })
], FasyankesModule);
//# sourceMappingURL=fasyankes.module.js.map