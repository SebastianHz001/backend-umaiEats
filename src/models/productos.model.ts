import mongoose from "mongoose"

export interface Producto{
    "_id"?: mongoose.Types.ObjectId,
    "nombre": string,
    "descripcion"?: string,
    "imagen": string,
    "precio": number
}