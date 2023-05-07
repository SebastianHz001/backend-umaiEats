import mongoose from "mongoose";
import { Motorista } from "./motorista.model";
import { Orden } from "./ordenes.model";

const schema = new mongoose.Schema<Motorista>({
    nombre: String,
    apellido: String,
    email: String,
    password: String,
    edad: Number,
    fechaNacimiento: String,
    ciudad: String,
    motocicleta:String,
    placa: String,
    ordenes: Array<Orden>
})

export const MotoristaSchema = mongoose.model("motoristas", schema);