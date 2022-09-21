"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KamarKos = exports.RumahKos = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const UsersModel_1 = require("./UsersModel");
let RumahKos = class RumahKos extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
        unique: true
    })
], RumahKos.prototype, "namakos", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
    })
], RumahKos.prototype, "alamatkos", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
    })
], RumahKos.prototype, "deskripsikos", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
    })
], RumahKos.prototype, "image", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => KamarKos)
], RumahKos.prototype, "kamarkos", void 0);
RumahKos = __decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: false,
        tableName: "rumahkos",
    })
], RumahKos);
exports.RumahKos = RumahKos;
let KamarKos = class KamarKos extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    })
], KamarKos.prototype, "namakamar", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
    })
], KamarKos.prototype, "deskripsikamar", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
    })
], KamarKos.prototype, "harga", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
    })
], KamarKos.prototype, "image", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
    })
], KamarKos.prototype, "status", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => RumahKos),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: true,
    })
], KamarKos.prototype, "kosanId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => RumahKos)
], KamarKos.prototype, "rumah", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => UsersModel_1.Users),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: true,
        unique: true
    })
], KamarKos.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    })
], KamarKos.prototype, "namauser", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    })
], KamarKos.prototype, "namakosan", void 0);
KamarKos = __decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: false,
        tableName: "kamarkos",
    })
], KamarKos);
exports.KamarKos = KamarKos;
