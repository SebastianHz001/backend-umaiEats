"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productos_controller_1 = require("../controllers/productos.controller");
const router = express_1.default.Router();
router.get("/", productos_controller_1.getProductos);
router.get("/:id", productos_controller_1.getProducto);
router.post("/", productos_controller_1.newProducto);
exports.default = router;
