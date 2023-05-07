"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrdenPorEstado = exports.updateOrden = exports.cancelarOrden = exports.getOrdenesDeCliente = exports.newOrden = exports.getOrden = exports.getOrdenes = void 0;
const ordenes_schema_1 = require("../models/ordenes.schema");
// Obtener ordenes
const getOrdenes = (req, res) => {
    ordenes_schema_1.OrdenesSchema.find({}).
        then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => {
        res.send(error);
        res.end();
    });
};
exports.getOrdenes = getOrdenes;
// Obtener orden
const getOrden = (req, res) => {
    ordenes_schema_1.OrdenesSchema.find({ _id: req.params.id }).
        then(result => {
        res.send(result[0]);
        res.end();
    })
        .catch(error => {
        res.send(error);
        res.end();
    });
};
exports.getOrden = getOrden;
// Nueva orden
const newOrden = (req, res) => {
    let order = new ordenes_schema_1.OrdenesSchema({
        nombre: req.body.nombre,
        imagen: req.body.imagen,
        precio: req.body.precio,
        idCliente: req.body.idCliente,
        idMotorista: req.body.idMotorista,
        logoEmpresa: req.body.logoEmpresa,
        cantidad: req.body.cantidad,
        estado: req.body.estado,
        ubicacion: req.body.ubicacion
    });
    order.save().then(result => {
        res.send(result);
        res.end();
    }).catch(error => {
        res.send(error);
        res.end();
    });
};
exports.newOrden = newOrden;
const getOrdenesDeCliente = (req, res) => {
    ordenes_schema_1.OrdenesSchema.find({ idCliente: req.params.idCliente }).
        then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => {
        res.send(error);
        res.end();
    });
};
exports.getOrdenesDeCliente = getOrdenesDeCliente;
const cancelarOrden = (req, res) => {
    ordenes_schema_1.OrdenesSchema.deleteOne({ _id: req.params.id })
        .then(result => {
        res.send({ message: 'Orden cancelada', result });
        res.end();
    })
        .catch(error => {
        res.send({ message: 'Hubo un error cancelar', error });
        res.end();
    });
};
exports.cancelarOrden = cancelarOrden;
// cambiar estado de la orden
const updateOrden = (req, res) => {
    ordenes_schema_1.OrdenesSchema.updateOne({ _id: req.params.id }, {
        $set: {
            estado: req.body.estado,
            idMotorista: req.body.idMotorista
        }
    }).then(result => {
        res.send({ message: "estado actualizado", result });
        res.end();
    }).catch(error => {
        res.send({ message: 'Ocurrio un error', error });
        res.end();
    });
};
exports.updateOrden = updateOrden;
//obtener ordenes por el estado
const getOrdenPorEstado = (req, res) => {
    ordenes_schema_1.OrdenesSchema.find({ estado: req.params.estado })
        .then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => {
        res.send(error);
        res.end();
    });
};
exports.getOrdenPorEstado = getOrdenPorEstado;
