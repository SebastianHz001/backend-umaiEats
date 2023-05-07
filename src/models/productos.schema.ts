import mongoose, { mongo } from "mongoose";
import { Producto } from "./productos.model";

const schema = new mongoose.Schema<Producto>({
    nombre: String,
    descripcion: String,
    imagen: String,
    precio: Number
})

export const ProductoSchema = mongoose.model('productos', schema);

