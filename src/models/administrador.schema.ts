import mongoose from "mongoose";
import { Administrador } from "./administrador.model";

const schema = new mongoose.Schema<Administrador>({
    nombre: String,
    apellido: String,
    nombreUsuario: String,
    password: String
})

export const AdministradoresSchema = mongoose.model('administradores', schema);