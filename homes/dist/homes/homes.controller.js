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
exports.HomesController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const homes_service_1 = require("./homes.service");
const homes_dto_1 = require("./homes.dto");
let HomesController = class HomesController {
    constructor(homesService) {
        this.homesService = homesService;
    }
    async getHomes() {
        return await this.homesService.getHomes();
    }
    async findHome(findHomeDto) {
        return await this.homesService.findHome(findHomeDto.city, findHomeDto.street, findHomeDto.zip);
    }
    async reserveHome(reserveHomeDto) {
        return await this.homesService.reserveHome(reserveHomeDto.city, reserveHomeDto.street, reserveHomeDto.zip);
    }
};
exports.HomesController = HomesController;
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("./homes.entity").Home] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HomesController.prototype, "getHomes", null);
__decorate([
    (0, common_1.Get)('/:city/:street/:zip'),
    openapi.ApiResponse({ status: 200, type: require("./homes.entity").Home }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [homes_dto_1.FindHomeDTO]),
    __metadata("design:returntype", Promise)
], HomesController.prototype, "findHome", null);
__decorate([
    (0, common_1.Post)('/reservation/:city/:street/:zip'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [homes_dto_1.ReserveHomeDTO]),
    __metadata("design:returntype", Promise)
], HomesController.prototype, "reserveHome", null);
exports.HomesController = HomesController = __decorate([
    (0, common_1.Controller)('homes'),
    __metadata("design:paramtypes", [homes_service_1.HomesService])
], HomesController);
//# sourceMappingURL=homes.controller.js.map