import mongoose from "mongoose";
import { Empresa } from "./empresas.model";

const schema = new mongoose.Schema<Empresa>({
    nombre: String,
    categoria: String,
    logo: String,
    ubicacion: String,
    productos: Array<mongoose.ObjectId>
})

export const EmpresaSchema = mongoose.model('empresas', schema);