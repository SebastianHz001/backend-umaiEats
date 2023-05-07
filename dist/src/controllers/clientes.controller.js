"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newCliente = exports.getOrdenesCliente = exports.getCliente = exports.validacionCliente = void 0;
const clientes_schema_1 = require("../models/clientes.schema");
// Validar usuario
const validacionCliente = (req, res) => {
    clientes_schema_1.ClienteSchema.find({ email: req.body.email }).
        then(result => {
        if (result[0].password.localeCompare(req.body.password) == 0) {
            res.send(result[0].id);
        }
        else {
            res.status(500).send("Error al autenticar");
        }
    }).catch(error => {
        res.status(500).send(error);
    });
};
exports.validacionCliente = validacionCliente;
// Obtener un cliente
const getCliente = (req, res) => {
    clientes_schema_1.ClienteSchema.find({ _id: req.params.id })
        .then(result => {
        res.send(result[0]);
        res.end();
    })
        .catch(error => {
        res.send(error);
        res.end();
    });
};
exports.getCliente = getCliente;
// Obtener ordenes de un cliente
const getOrdenesCliente = (req, res) => {
    clientes_schema_1.ClienteSchema.findOne({ _id: req.body.id })
        .then(result => {
        res.send(result === null || result === void 0 ? void 0 : result.ordenes);
        res.end();
    })
        .catch(error => {
        res.send(error);
        res.end();
    });
};
exports.getOrdenesCliente = getOrdenesCliente;
// Crear un cliente
const newCliente = (req, res) => {
    let user = new clientes_schema_1.ClienteSchema({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        password: req.body.password,
        fechaNacimiento: req.body.fechaNacimiento,
        genero: req.body.genero,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        ordenes: req.body.ordenes
    });
    user.save().then(result => {
        res.send(result);
        res.end();
    }).catch(error => {
        res.send(error);
        res.end();
    });
};
exports.newCliente = newCliente;
