import { Router } from "express";
import { trackEvent, getStats, exportData } from "../controllers/tracking";
import { authMiddleware } from "../middleware/auth.middleware";

const router = Router();

router.post("/track", trackEvent);
router.get("/stats", getStats);
router.get("/export", authMiddleware, exportData);

export default router;
