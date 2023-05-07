"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = require("./src/utils/database");
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const clientes_router_1 = __importDefault(require("./src/routers/clientes.router"));
const empresas_router_1 = __importDefault(require("./src/routers/empresas.router"));
const productos_router_1 = __importDefault(require("./src/routers/productos.router"));
const ordenes_router_1 = __importDefault(require("./src/routers/ordenes.router"));
const motoristas_router_1 = __importDefault(require("./src/routers/motoristas.router"));
const administradores_router_1 = __importDefault(require("./src/routers/administradores.router"));
dotenv_1.default.config();
const database = new database_1.Database();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
//Routers
app.use('/clientes', clientes_router_1.default);
app.use('/empresas', empresas_router_1.default);
app.use('/productos', productos_router_1.default);
app.use('/ordenes', ordenes_router_1.default);
app.use('/motoristas', motoristas_router_1.default);
app.use('/admin', administradores_router_1.default);
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
