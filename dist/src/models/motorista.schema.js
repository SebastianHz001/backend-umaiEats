"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MotoristaSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    nombre: String,
    apellido: String,
    email: String,
    password: String,
    edad: Number,
    fechaNacimiento: String,
    ciudad: String,
    motocicleta: String,
    placa: String,
    ordenes: (Array)
});
exports.MotoristaSchema = mongoose_1.default.model("motoristas", schema);
