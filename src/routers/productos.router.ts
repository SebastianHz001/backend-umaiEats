import express from 'express';
import { getProducto, getProductos, newProducto } from '../controllers/productos.controller';

const router = express.Router();

router.get("/", getProductos);
router.get("/:id", getProducto);
router.post("/", newProducto);

export default router;