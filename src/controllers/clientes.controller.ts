import { Request, Response } from "express";
import { ClienteSchema } from "../models/clientes.schema";


// Validar usuario
export const validacionCliente = (req: Request, res: Response) => {
    ClienteSchema.find({email:req.body.email}).
    then(result => {
        if (result[0].password.localeCompare(req.body.password) == 0) {
            res.send(result[0].id)
          } else {
            res.status(500).send("Error al autenticar")
        }
    }).catch(error => {
        res.status(500).send(error);
    })
}


// Obtener un cliente
export const getCliente = (req: Request, res: Response) => {
    ClienteSchema.find({_id:req.params.id})
    .then(result => {
        res.send(result[0]);
        res.end();
    })
    .catch(error => {
        res.send(error);
        res.end();
    })
}

// Obtener ordenes de un cliente
export const getOrdenesCliente = (req: Request, res: Response) => {
    ClienteSchema.findOne({_id:req.body.id})
    .then(result => {
        res.send(result?.ordenes);
        res.end();
    })
    .catch(error => {
        res.send(error);
        res.end();
    })
}

// Crear un cliente
export const newCliente = (req: Request, res: Response) => {
    let user = new ClienteSchema({
        nombre : req.body.nombre,
        apellido: req.body.apellido,
        email : req.body.email,
        password : req.body.password,
        fechaNacimiento : req.body.fechaNacimiento,
        genero: req.body.genero,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        ordenes: req.body.ordenes
    });

    user.save().then(result => {
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    })
}

