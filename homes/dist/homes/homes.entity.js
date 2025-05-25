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
exports.Home = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let Home = class Home {
    constructor(street, city, zip, pricePerNight) {
        this.street = street;
        this.city = city;
        this.zip = zip;
        this.pricePerNight = pricePerNight;
    }
    toJson() {
        return {
            id: this.id,
            street: this.street,
            city: this.city,
            zip: this.zip,
            pricePerNight: this.pricePerNight,
        };
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, street: { required: true, type: () => String }, city: { required: true, type: () => String }, zip: { required: true, type: () => String }, pricePerNight: { required: true, type: () => Number } };
    }
};
exports.Home = Home;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Home.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', name: 'street', nullable: false }),
    __metadata("design:type", String)
], Home.prototype, "street", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', name: 'city', nullable: false }),
    __metadata("design:type", String)
], Home.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', name: 'zip', nullable: false }),
    __metadata("design:type", String)
], Home.prototype, "zip", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', name: 'price_per_night', nullable: false }),
    __metadata("design:type", Number)
], Home.prototype, "pricePerNight", void 0);
exports.Home = Home = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [String, String, String, Number])
], Home);
//# sourceMappingURL=homes.entity.js.map