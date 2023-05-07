import mongoose from "mongoose"
import { Orden } from "./ordenes.model"

export interface Motorista {
    "_id"?: mongoose.Types.ObjectId,
    "nombre": string,
    "apellido": string,
    "email": string,
    "password": string,
    "edad": number,
    "fechaNacimiento": string,
    "ciudad": string,
    "motocicleta":string,
    "placa": string,
    "ordenes": Array<Orden>
}