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
exports.QuadrosController = void 0;
const common_1 = require("@nestjs/common");
const quadros_service_1 = require("./quadros.service");
const criar_quadro_dto_1 = require("./dto/criar-quadro.dto");
const atualizar_quadro_dto_1 = require("./dto/atualizar-quadro.dto");
let QuadrosController = class QuadrosController {
    constructor(quadrosService) {
        this.quadrosService = quadrosService;
    }
    async criar(criarQuadroDto) {
        return this.quadrosService.criar(criarQuadroDto);
    }
    async buscarTodos() {
        return this.quadrosService.buscarTodos();
    }
    async buscarUm(id) {
        return this.quadrosService.buscarUm(id);
    }
    async atualizar(id, atualizarQuadroDto) {
        return this.quadrosService.atualizar(id, atualizarQuadroDto);
    }
    async remover(id) {
        return this.quadrosService.remover(id);
    }
};
exports.QuadrosController = QuadrosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [criar_quadro_dto_1.CriarQuadroDto]),
    __metadata("design:returntype", Promise)
], QuadrosController.prototype, "criar", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], QuadrosController.prototype, "buscarTodos", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], QuadrosController.prototype, "buscarUm", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, atualizar_quadro_dto_1.AtualizarQuadroDto]),
    __metadata("design:returntype", Promise)
], QuadrosController.prototype, "atualizar", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], QuadrosController.prototype, "remover", null);
exports.QuadrosController = QuadrosController = __decorate([
    (0, common_1.Controller)('quadros'),
    __metadata("design:paramtypes", [quadros_service_1.QuadrosService])
], QuadrosController);
//# sourceMappingURL=quadros.controller.js.map