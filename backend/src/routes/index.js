import { Router } from "express";
import healthController from "../controllers/healthController.js";

const router = Router();

/**
 * @swagger
 * /api/health:
 *   get:
 *     summary: Verificar status da API
 *     tags: [Health]
 *     responses:
 *       200:
 *         description: API funcionando
 */
router.get("/health", healthController.check);

export default router;