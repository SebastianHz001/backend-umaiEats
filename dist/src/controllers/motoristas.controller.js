"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validacionMotorista = exports.getMotorista = exports.getMotoristas = void 0;
const motorista_schema_1 = require("../models/motorista.schema");
const getMotoristas = (req, res) => {
    motorista_schema_1.MotoristaSchema.find({})
        .then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => {
        res.send(error);
        res.end();
    });
};
exports.getMotoristas = getMotoristas;
const getMotorista = (req, res) => {
    motorista_schema_1.MotoristaSchema.find({ _id: req.params.id })
        .then(result => {
        res.send(result[0]);
        res.end();
    })
        .catch(error => {
        res.send(error);
        res.end();
    });
};
exports.getMotorista = getMotorista;
// validar el login motorista
const validacionMotorista = (req, res) => {
    motorista_schema_1.MotoristaSchema.find({ email: req.body.email }).
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
exports.validacionMotorista = validacionMotorista;
