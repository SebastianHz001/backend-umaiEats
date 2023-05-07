import { Request, Response } from "express";
import { ProductoSchema } from "../models/productos.schema";

//Obtener un producto
export const getProducto = (req: Request, res: Response) => {
    ProductoSchema.find({_id:req.params.id})
    .then(result => {
        res.send(result[0]);
        res.end();
    })
    .catch(error => {
        res.send(error);
        res.end();
    })
}

// Obtener todos los productos
export const getProductos = (req: Request, res: Response) => {
    ProductoSchema.find({})
    .then(result => {
        res.send(result);
        res.end();
    })
    .catch(error => {
        res.send(error);
        res.end();
    })
}

// Crear un producto
export const newProducto = (req: Request, res: Response) => {
    let p = new ProductoSchema({
        nombre: String,
        descripcion: String,
        imagen: String,
        precio: String
    })

    p.save().then(result => {
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    })
}
