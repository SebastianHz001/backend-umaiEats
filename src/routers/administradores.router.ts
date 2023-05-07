import express from 'express';
import { validacionLoginAdmin } from '../controllers/administradores.controller';

const router = express.Router();

router.post("/login", validacionLoginAdmin);

export default router;