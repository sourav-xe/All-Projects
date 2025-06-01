import { createReservation } from '../controller/reservation.js';
import express from "express";

const router = express.Router();

router.post("/send", createReservation);

export default router;
