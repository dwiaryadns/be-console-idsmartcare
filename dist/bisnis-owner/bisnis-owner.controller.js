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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BisnisOwnerController = void 0;
const common_1 = require("@nestjs/common");
const bisnis_owner_service_1 = require("./bisnis-owner.service");
const create_bisnis_owner_dto_1 = require("./create-bisnis-owner.dto");
const update_bisnis_owner_dto_1 = require("./update-bisnis-owner.dto");
const jwt_auth_guard_1 = require("../access-console/guards/jwt-auth.guard");
let BisnisOwnerController = class BisnisOwnerController {
    constructor(bisnisOwnerService) {
        this.bisnisOwnerService = bisnisOwnerService;
    }
    async getAllBisnisOwners(page = 1, limit = 10, search = '') {
        return this.bisnisOwnerService.findAll(Number(page), Number(limit));
    }
    async create(createDto) {
        return this.bisnisOwnerService.create(createDto);
    }
    async delete(id) {
        const result = await this.bisnisOwnerService.delete(Number(id));
        if (!result) {
            throw new common_1.HttpException('Bisnis owner not found', common_1.HttpStatus.NOT_FOUND);
        }
        return { massage: 'Bisnis owner deleted successfully' };
    }
    async update(id, updateDto) {
        const updatedOwner = await this.bisnisOwnerService.update(id, updateDto);
        if (!updatedOwner) {
            throw new common_1.HttpException('Bisnis owner not found', common_1.HttpStatus.NOT_FOUND);
        }
        return updatedOwner;
    }
};
exports.BisnisOwnerController = BisnisOwnerController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String]),
    __metadata("design:returntype", Promise)
], BisnisOwnerController.prototype, "getAllBisnisOwners", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_bisnis_owner_dto_1.CreateBisnisOwnerDto]),
    __metadata("design:returntype", Promise)
], BisnisOwnerController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BisnisOwnerController.prototype, "delete", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_bisnis_owner_dto_1.UpdateBisnisOwnerDto]),
    __metadata("design:returntype", Promise)
], BisnisOwnerController.prototype, "update", null);
exports.BisnisOwnerController = BisnisOwnerController = __decorate([
    (0, common_1.Controller)('bisnis-owners'),
    __metadata("design:paramtypes", [bisnis_owner_service_1.BisnisOwnerService])
], BisnisOwnerController);
//# sourceMappingURL=bisnis-owner.controller.js.map