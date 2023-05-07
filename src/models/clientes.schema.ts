import mongoose from "mongoose";
import { Cliente, Orden } from "./clientes.model";

const schema = new mongoose.Schema<Cliente>({
    nombre : String,
    apellido: String,
    email : String,
    password : String,
    fechaNacimiento : String,
    genero: String,
    direccion: String,
    telefono: String,
    ordenes: Array<Orden>
})

export const ClienteSchema = mongoose.model('clientes', schema);