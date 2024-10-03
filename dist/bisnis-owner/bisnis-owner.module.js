"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BisnisOwnerModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const bisnis_owner_entity_1 = require("./bisnis-owner.entity");
const bisnis_owner_service_1 = require("./bisnis-owner.service");
const bisnis_owner_controller_1 = require("./bisnis-owner.controller");
let BisnisOwnerModule = class BisnisOwnerModule {
};
exports.BisnisOwnerModule = BisnisOwnerModule;
exports.BisnisOwnerModule = BisnisOwnerModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([bisnis_owner_entity_1.BisnisOwner])],
        providers: [bisnis_owner_service_1.BisnisOwnerService],
        controllers: [bisnis_owner_controller_1.BisnisOwnerController],
    })
], BisnisOwnerModule);
//# sourceMappingURL=bisnis-owner.module.js.map