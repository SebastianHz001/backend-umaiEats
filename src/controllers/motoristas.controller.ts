import { Request, Response } from "express";
import { MotoristaSchema } from "../models/motorista.schema";

export const getMotoristas = (req:Request, res:Response) => {
    MotoristaSchema.find({})
    .then(result => {
        res.send(result);
        res.end();
    })
    .catch(error => {
        res.send(error);
        res.end();
    })
}

export const getMotorista = (req:Request, res:Response) => {
    MotoristaSchema.find({_id:req.params.id})
    .then(result => {
        res.send(result[0]);
        res.end();
    })
    .catch(error => {
        res.send(error);
        res.end();
    })
}

// validar el login motorista
export const validacionMotorista = (req: Request, res: Response) => {
    MotoristaSchema.find({email:req.body.email}).
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

