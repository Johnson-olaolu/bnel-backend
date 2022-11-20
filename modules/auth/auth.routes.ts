import { Router } from "express";
import { getGoogleLink, googleLogin, login, register } from "./auth.controller";

const router = Router();
router.post("/register", register);
router.post("/login", login);
router.get("/oauth", getGoogleLink);
router.post("/oauth", googleLogin);

export default router;
