"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuadrosModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const quadros_controller_1 = require("./quadros.controller");
const quadros_service_1 = require("./quadros.service");
const quadros_entity_1 = require("./quadros.entity");
let QuadrosModule = class QuadrosModule {
};
exports.QuadrosModule = QuadrosModule;
exports.QuadrosModule = QuadrosModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([quadros_entity_1.Quadro])],
        controllers: [quadros_controller_1.QuadrosController],
        providers: [quadros_service_1.QuadrosService],
        exports: [quadros_service_1.QuadrosService],
    })
], QuadrosModule);
//# sourceMappingURL=quadros.module.js.map