import { Request, Response } from "express";
import { OrdenesSchema } from "../models/ordenes.schema";
import { ClienteSchema } from "../models/clientes.schema";
import mongoose from "mongoose";

// Obtener ordenes
export const getOrdenes = (req:Request, res:Response) => {
    OrdenesSchema.find({}).
    then(result => {
        res.send(result);
        res.end();
    })
    .catch(error => {
        res.send(error);
        res.end();
    })
}

// Obtener orden
export const getOrden = (req:Request, res:Response) => {
    OrdenesSchema.find({_id:req.params.id}).
    then(result => {
        res.send(result[0]);
        res.end();
    })
    .catch(error => {
        res.send(error);
        res.end();
    })
}

// Nueva orden
export const newOrden = (req:Request, res:Response) => {
    let order = new OrdenesSchema({
        nombre:req.body.nombre,
        imagen:req.body.imagen,
        precio:req.body.precio,
        idCliente:req.body.idCliente,
        idMotorista:req.body.idMotorista,
        logoEmpresa:req.body.logoEmpresa,
        cantidad:req.body.cantidad,
        estado:req.body.estado,
        ubicacion:req.body.ubicacion
    });

    order.save().then(result => {
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    })
}

export const getOrdenesDeCliente = (req:Request, res:Response) => {
    OrdenesSchema.find({idCliente:req.params.idCliente}).
    then(result => {
        res.send(result);
        res.end();
    })
    .catch(error => {
        res.send(error);
        res.end();
    })
}

export const cancelarOrden = (req: Request, res: Response) => {
    OrdenesSchema.deleteOne({_id: req.params.id})
    .then(result => {
        res.send({message: 'Orden cancelada', result});
        res.end();
    })
    .catch(error => {
        res.send({message: 'Hubo un error cancelar', error});
        res.end();
    })
}

// cambiar estado de la orden
export const updateOrden = (req: Request, res: Response) => {
    OrdenesSchema.updateOne({_id:req.params.id},
    {
        $set:{
            estado: req.body.estado,
            idMotorista:req.body.idMotorista
        }
    }).then(result => {
        res.send({message: "estado actualizado", result});
        res.end()
    }).catch(error => {
        res.send({message: 'Ocurrio un error', error});
        res.end();
    });
}

//obtener ordenes por el estado
export const getOrdenPorEstado = (req: Request, res: Response) => {
    OrdenesSchema.find({estado:req.params.estado})
    .then(result => {
        res.send(result);
        res.end();
      })
      .catch(error => {
          res.send(error);
          res.end();
      })
}