"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ordenes_controller_1 = require("../controllers/ordenes.controller");
const router = express_1.default.Router();
router.post("/", ordenes_controller_1.newOrden);
router.get("/cliente/:idCliente", ordenes_controller_1.getOrdenesDeCliente);
router.get("/", ordenes_controller_1.getOrdenes);
router.get("/:id", ordenes_controller_1.getOrden);
router.get("/estad/:estado", ordenes_controller_1.getOrdenPorEstado);
router.delete("/:id", ordenes_controller_1.cancelarOrden);
router.put("/:id", ordenes_controller_1.updateOrden);
exports.default = router;
