import express from 'express';
import { validacionMotorista, getMotorista, getMotoristas } from '../controllers/motoristas.controller';

const router = express.Router();

router.get("/:id", getMotorista);
router.get("/", getMotoristas);
router.post("/login", validacionMotorista);

export default router;