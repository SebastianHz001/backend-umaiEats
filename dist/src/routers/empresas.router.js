"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const empresas_controller_1 = require("../controllers/empresas.controller");
const router = express_1.default.Router();
router.get("/cat/:categoria", empresas_controller_1.getEmpresasPorCategoria);
router.get("/:id", empresas_controller_1.getEmpresa);
router.get("/", empresas_controller_1.getEmpresas);
router.get("/:id/productos", empresas_controller_1.getProductosPorEmpresa);
router.post("/", empresas_controller_1.newEmpresa);
exports.default = router;
