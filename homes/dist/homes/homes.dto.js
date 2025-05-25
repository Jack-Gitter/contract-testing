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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReserveHomeDTO = exports.FindHomeDTO = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class FindHomeDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { street: { required: true, type: () => String }, city: { required: true, type: () => String }, zip: { required: true, type: () => String } };
    }
}
exports.FindHomeDTO = FindHomeDTO;
FindHomeDTO.additionalProperties = false;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindHomeDTO.prototype, "street", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindHomeDTO.prototype, "city", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindHomeDTO.prototype, "zip", void 0);
class ReserveHomeDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { street: { required: true, type: () => String }, city: { required: true, type: () => String }, zip: { required: true, type: () => String } };
    }
}
exports.ReserveHomeDTO = ReserveHomeDTO;
ReserveHomeDTO.additionalProperties = false;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReserveHomeDTO.prototype, "street", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReserveHomeDTO.prototype, "city", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReserveHomeDTO.prototype, "zip", void 0);
//# sourceMappingURL=homes.dto.js.map