import express from 'express';
import { newOrden, getOrdenesDeCliente, getOrdenes, getOrden, cancelarOrden, updateOrden, getOrdenPorEstado} from '../controllers/ordenes.controller';

const router = express.Router();

router.post("/", newOrden);
router.get("/cliente/:idCliente", getOrdenesDeCliente);
router.get("/", getOrdenes);
router.get("/:id", getOrden);
router.get("/estad/:estado", getOrdenPorEstado);
router.delete("/:id", cancelarOrden);
router.put("/:id", updateOrden);

export default router;