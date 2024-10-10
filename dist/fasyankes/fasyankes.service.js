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
exports.FasyankesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const fasyankes_entity_1 = require("./fasyankes.entity");
const class_transformer_1 = require("class-transformer");
let FasyankesService = class FasyankesService {
    constructor(fasyankesRepository) {
        this.fasyankesRepository = fasyankesRepository;
    }
    async findAll(page = 1, limit = 10, search = '', is_active) {
        const queryBuilder = this.fasyankesRepository.createQueryBuilder('fasyankes');
        if (search) {
            queryBuilder.where('LOWER(fasyankes.name) LIKE LOWER(:search)  OR LOWER(fasyankes.email) LIKE LOWER(:search) ', {
                search: `%${search.toLocaleLowerCase()}%`,
            });
        }
        if (is_active) {
            queryBuilder.andWhere('fasyankes.is_active = :is_active', { is_active });
        }
        queryBuilder.skip((page - 1) * limit).take(limit);
        queryBuilder.leftJoinAndSelect('fasyankes.accessFasyankes', 'accessFasyankes');
        const [items, total] = await queryBuilder.getManyAndCount();
        const results = {
            data: (0, class_transformer_1.classToPlain)(items),
            totalItems: total,
            currentPage: page,
            totalPages: Math.ceil(total / limit),
        };
        return results;
    }
};
exports.FasyankesService = FasyankesService;
exports.FasyankesService = FasyankesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(fasyankes_entity_1.Fasyankes)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], FasyankesService);
//# sourceMappingURL=fasyankes.service.js.map