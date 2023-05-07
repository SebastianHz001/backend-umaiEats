"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validacionLoginAdmin = void 0;
const administrador_schema_1 = require("../models/administrador.schema");
const validacionLoginAdmin = (req, res) => {
    administrador_schema_1.AdministradoresSchema.find({ email: req.body.email }).
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
exports.validacionLoginAdmin = validacionLoginAdmin;
