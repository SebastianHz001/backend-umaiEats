import express from 'express';
import { getEmpresa,getEmpresas,getProductosPorEmpresa,getEmpresasPorCategoria,newEmpresa } from '../controllers/empresas.controller';

const router = express.Router();

router.get("/cat/:categoria", getEmpresasPorCategoria);
router.get("/:id", getEmpresa);
router.get("/", getEmpresas);
router.get("/:id/productos", getProductosPorEmpresa);
router.post("/", newEmpresa);

export default router;