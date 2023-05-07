"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    nombre: String,
    apellido: String,
    email: String,
    password: String,
    fechaNacimiento: String,
    genero: String,
    direccion: String,
    telefono: String,
    ordenes: (Array)
});
exports.ClienteSchema = mongoose_1.default.model('clientes', schema);
