"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdenesSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    nombre: String,
    imagen: String,
    precio: Number,
    idCliente: mongoose_1.default.Types.ObjectId,
    idMotorista: String,
    logoEmpresa: String,
    cantidad: Number,
    estado: String,
    ubicacion: String
});
exports.OrdenesSchema = mongoose_1.default.model('ordenes', schema);
