import mongoose, { Types, mongo } from "mongoose";
import {Producto} from './productos.model'


export interface Orden extends Producto{
    "idCliente": mongoose.Types.ObjectId,
    "idMotorista": string,
    "logoEmpresa": string,
    "cantidad": number,
    "estado": string,
    "ubicacion": string
}