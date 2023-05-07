"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newEmpresa = exports.getProductosPorEmpresa = exports.getEmpresa = exports.getEmpresas = exports.getEmpresasPorCategoria = void 0;
const empresas_schema_1 = require("../models/empresas.schema");
const productos_schema_1 = require("../models/productos.schema");
// Obtener empresas por categoria
const getEmpresasPorCategoria = (req, res) => {
    empresas_schema_1.EmpresaSchema.find({ categoria: req.params.categoria })
        .then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => {
        res.send(error);
        res.end();
    });
};
exports.getEmpresasPorCategoria = getEmpresasPorCategoria;
// Obtener todas las empresas
const getEmpresas = (req, res) => {
    empresas_schema_1.EmpresaSchema.find({}, { nombre: true, categoria: true, logo: true })
        .then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => {
        res.send(error);
        res.end();
    });
};
exports.getEmpresas = getEmpresas;
// Obtener una empresa
const getEmpresa = (req, res) => {
    empresas_schema_1.EmpresaSchema.findOne({ _id: req.params.id }, { nombre: true, categoria: true, logo: true, productos: true })
        .then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => {
        res.send(error);
        res.end();
    });
};
exports.getEmpresa = getEmpresa;
// Obtener productos de empresa
const getProductosPorEmpresa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const empresa = yield empresas_schema_1.EmpresaSchema.findById({ _id: req.params.id });
        if (!empresa) {
            return res.status(404).json({ error: 'Empresa no encontrada.' });
        }
        const productos = yield productos_schema_1.ProductoSchema.find({ _id: { $in: empresa.productos } });
        res.status(200).json(productos);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al buscar productos por empresa.' });
    }
});
exports.getProductosPorEmpresa = getProductosPorEmpresa;
// Crear una empresa
const newEmpresa = (req, res) => {
    let empre = new empresas_schema_1.EmpresaSchema({
        nombre: req.body.nombre,
        categoria: req.body.categoria,
        logo: req.body.logo,
        ubicacion: req.body.ubicacion,
        productos: req.body.productos
    });
    empre.save().then(result => {
        res.send(result);
        res.end();
    }).catch(error => {
        res.send(error);
        res.end();
    });
};
exports.newEmpresa = newEmpresa;
