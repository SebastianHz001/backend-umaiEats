import express from 'express';
import { getCliente, getOrdenesCliente,validacionCliente, newCliente } from '../controllers/clientes.controller';

const router = express.Router();

router.get("/:id", getCliente);
router.get("/:id/ordenes", getOrdenesCliente);
router.post("/login", validacionCliente);
router.post("/new", newCliente);

export default router;