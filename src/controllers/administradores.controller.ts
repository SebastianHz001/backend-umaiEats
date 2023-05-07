import { Request, Response } from "express";
import { AdministradoresSchema } from "../models/administrador.schema";

export const validacionLoginAdmin = (req: Request, res: Response) => {
    AdministradoresSchema.find({email:req.body.email}).
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

