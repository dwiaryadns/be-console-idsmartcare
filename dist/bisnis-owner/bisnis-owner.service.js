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
exports.BisnisOwnerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bisnis_owner_entity_1 = require("./bisnis-owner.entity");
const class_transformer_1 = require("class-transformer");
let BisnisOwnerService = class BisnisOwnerService {
    constructor(bisnisOwnerRepository) {
        this.bisnisOwnerRepository = bisnisOwnerRepository;
    }
    async findAll(page = 1, limit = 10, search = '') {
        const queryBuilder = this.bisnisOwnerRepository.createQueryBuilder('bisnisOwner');
        if (search) {
            queryBuilder.where('LOWER(bisnisOwner.name) LIKE LOWER(:search) OR LOWER(bisnisOwner.email) LIKE LOWER(:search)', {
                search: `%${search.toLowerCase()}%`,
            });
        }
        queryBuilder.skip((page - 1) * limit).take(limit);
        queryBuilder.leftJoinAndSelect('bisnisOwner.boInfos', 'boInfos');
        queryBuilder.leftJoinAndSelect('bisnisOwner.legalDokumen', 'legalDokumen');
        const [items, total] = await queryBuilder.getManyAndCount();
        const results = {
            data: (0, class_transformer_1.classToPlain)(items),
            totalItems: total,
            currentPage: page,
            totalPages: Math.ceil(total / limit),
        };
        return results;
    }
    async create(createDto) {
        const newOwner = this.bisnisOwnerRepository.create(createDto);
        return this.bisnisOwnerRepository.save(newOwner);
    }
    async delete(id) {
        const result = await this.bisnisOwnerRepository.delete(id);
        return result.affected > 0;
    }
    async update(id, updateDto) {
        const bisnisOwner = await this.bisnisOwnerRepository.findOne({
            where: { id },
        });
        if (!bisnisOwner) {
            return null;
        }
        Object.assign(bisnisOwner, updateDto);
        return this.bisnisOwnerRepository.save(bisnisOwner);
    }
};
exports.BisnisOwnerService = BisnisOwnerService;
exports.BisnisOwnerService = BisnisOwnerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(bisnis_owner_entity_1.BisnisOwner)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BisnisOwnerService);
//# sourceMappingURL=bisnis-owner.service.js.map