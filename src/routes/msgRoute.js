import { Router } from "express";
import msgWebhook from "../controllers/msgController.js";

const router = new Router();

router.post('/', msgWebhook);

export default router;