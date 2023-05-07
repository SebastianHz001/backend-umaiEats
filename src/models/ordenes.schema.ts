import mongoose from "mongoose";
import { Orden } from "./ordenes.model";

const schema = new mongoose.Schema<Orden>({
    nombre: String,
    imagen: String,
    precio: Number,
    idCliente: mongoose.Types.ObjectId,
    idMotorista: String,
    logoEmpresa: String,
    cantidad: Number,
    estado: String,
    ubicacion: String
})

export const OrdenesSchema = mongoose.model('ordenes', schema);