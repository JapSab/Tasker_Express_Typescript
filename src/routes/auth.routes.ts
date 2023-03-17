import  { Router }  from "express";
import { signUp } from "../controllers/auth.signup";
import { logIn } from "../controllers/auth.login";

const router = Router();

// login/signup
router.post('/signup', signUp);
router.post('/login', logIn);

export {router as authRouter};