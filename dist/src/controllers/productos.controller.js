"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newProducto = exports.getProductos = exports.getProducto = void 0;
const productos_schema_1 = require("../models/productos.schema");
//Obtener un producto
const getProducto = (req, res) => {
    productos_schema_1.ProductoSchema.find({ _id: req.params.id })
        .then(result => {
        res.send(result[0]);
        res.end();
    })
        .catch(error => {
        res.send(error);
        res.end();
    });
};
exports.getProducto = getProducto;
// Obtener todos los productos
const getProductos = (req, res) => {
    productos_schema_1.ProductoSchema.find({})
        .then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => {
        res.send(error);
        res.end();
    });
};
exports.getProductos = getProductos;
// Crear un producto
const newProducto = (req, res) => {
    let p = new productos_schema_1.ProductoSchema({
        nombre: String,
        descripcion: String,
        imagen: String,
        precio: String
    });
    p.save().then(result => {
        res.send(result);
        res.end();
    }).catch(error => {
        res.send(error);
        res.end();
    });
};
exports.newProducto = newProducto;
