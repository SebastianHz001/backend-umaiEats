import express, { Express, Request, Response } from 'express';
import { Database } from './src/utils/database';
import dotenv from 'dotenv';
import cors from 'cors';

import clientesRouter from './src/routers/clientes.router';
import empresasRouter from './src/routers/empresas.router';
import productosRouter from './src/routers/productos.router';
import ordenesRouter from './src/routers/ordenes.router';
import motoristaRouter from './src/routers/motoristas.router';
import administradorRouter from './src/routers/administradores.router';

dotenv.config();
const database:Database = new Database();
const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Routers
app.use('/clientes', clientesRouter);
app.use('/empresas', empresasRouter);
app.use('/productos', productosRouter);
app.use('/ordenes', ordenesRouter);
app.use('/motoristas', motoristaRouter);
app.use('/admin', administradorRouter);


app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});