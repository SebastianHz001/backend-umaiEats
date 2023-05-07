"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const clientes_controller_1 = require("../controllers/clientes.controller");
const router = express_1.default.Router();
router.get("/:id", clientes_controller_1.getCliente);
router.get("/:id/ordenes", clientes_controller_1.getOrdenesCliente);
router.post("/login", clientes_controller_1.validacionCliente);
router.post("/new", clientes_controller_1.newCliente);
exports.default = router;
