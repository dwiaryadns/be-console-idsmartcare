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
exports.FasyankesController = void 0;
const common_1 = require("@nestjs/common");
const fasyankes_service_1 = require("./fasyankes.service");
const jwt_auth_guard_1 = require("../access-console/guards/jwt-auth.guard");
let FasyankesController = class FasyankesController {
    constructor(fasyankesService) {
        this.fasyankesService = fasyankesService;
    }
    async getAllFasyankes(page = 1, limit = 10, search = '', is_active) {
        return this.fasyankesService.findAll(Number(page), Number(limit), search, is_active);
    }
};
exports.FasyankesController = FasyankesController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('search')),
    __param(3, (0, common_1.Query)('is_active')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String, Boolean]),
    __metadata("design:returntype", Promise)
], FasyankesController.prototype, "getAllFasyankes", null);
exports.FasyankesController = FasyankesController = __decorate([
    (0, common_1.Controller)('fasyankes'),
    __metadata("design:paramtypes", [fasyankes_service_1.FasyankesService])
], FasyankesController);
//# sourceMappingURL=fasyankes.controller.js.map