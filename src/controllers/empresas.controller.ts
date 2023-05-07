import { Request, Response } from "express";
import { EmpresaSchema } from "../models/empresas.schema";
import { ProductoSchema } from "../models/productos.schema";

// Obtener empresas por categoria
export const getEmpresasPorCategoria = (req: Request, res: Response) => {
  EmpresaSchema.find({categoria:req.params.categoria})
  .then(result => {
    res.send(result);
    res.end();
  })
  .catch(error => {
      res.send(error);
      res.end();
  })
}

// Obtener todas las empresas
export const getEmpresas = (req: Request, res: Response) => {
  EmpresaSchema.find({}, {nombre:true, categoria:true, logo:true})
  .then(result => {
      res.send(result);
      res.end();
  })
  .catch(error => {
      res.send(error);
      res.end();
  })
}

// Obtener una empresa
export const getEmpresa = (req: Request, res: Response) => {
  EmpresaSchema.findOne({_id:req.params.id}, {nombre:true, categoria:true, logo:true, productos:true})
  .then(result => {
      res.send(result);
      res.end();
  })
  .catch(error => {
      res.send(error);
      res.end();
  })
}

// Obtener productos de empresa
export const getProductosPorEmpresa = async (req: Request, res: Response) => {
  try {
    const empresa = await EmpresaSchema.findById({_id:req.params.id});
    if (!empresa) {
      return res.status(404).json({ error: 'Empresa no encontrada.' });
    }
    const productos = await ProductoSchema.find({ _id: { $in: empresa.productos } });
    res.status(200).json(productos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar productos por empresa.' });
  }
}

// Crear una empresa
export const newEmpresa = (req: Request, res: Response) => {
  let empre = new EmpresaSchema({
    nombre:req.body.nombre,
    categoria:req.body.categoria,
    logo:req.body.logo,
    ubicacion:req.body.ubicacion,
    productos:req.body.productos
  })

  empre.save().then(result => {
    res.send(result);
    res.end();
  }).catch(error=>{
      res.send(error);
      res.end();
  })
}


