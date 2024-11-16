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
exports.CartaoController = void 0;
const common_1 = require("@nestjs/common");
const cartao_service_1 = require("./cartao.service");
const criar_cartao_dto_1 = require("./DTO/criar-cartao.dto");
const atualizar_cartao_dto_1 = require("./DTO/atualizar-cartao.dto");
let CartaoController = class CartaoController {
    constructor(cartaoService) {
        this.cartaoService = cartaoService;
    }
    create(criarCartaoDto) {
        return this.cartaoService.create(criarCartaoDto);
    }
    findAll() {
        return this.cartaoService.findAll();
    }
    findOne(id) {
        return this.cartaoService.findOne(id);
    }
    update(id, atualizarCartaoDto) {
        return this.cartaoService.update(id, atualizarCartaoDto);
    }
    async atualizarStatus(id, status) {
        return this.cartaoService.atualizarStatus(id, status);
    }
    remove(id) {
        return this.cartaoService.remove(id);
    }
};
exports.CartaoController = CartaoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [criar_cartao_dto_1.CriarCartaoDto]),
    __metadata("design:returntype", Promise)
], CartaoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CartaoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CartaoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, atualizar_cartao_dto_1.AtualizarCartaoDto]),
    __metadata("design:returntype", Promise)
], CartaoController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)(':id/status'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], CartaoController.prototype, "atualizarStatus", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CartaoController.prototype, "remove", null);
exports.CartaoController = CartaoController = __decorate([
    (0, common_1.Controller)('cartoes'),
    __metadata("design:paramtypes", [cartao_service_1.CartaoService])
], CartaoController);
//# sourceMappingURL=cartao.controller.js.map