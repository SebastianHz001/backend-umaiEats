import { ObjectId } from "mongoose";
import { Producto } from "./productos.model";

export interface Empresa{
    "_id"?: ObjectId,
    "nombre": string,
    "categoria": string,
    "logo": string,
    "ubicacion": string,
    "productos": Array<Producto>
}

