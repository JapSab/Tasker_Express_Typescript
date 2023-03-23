import  { Router }  from "express";
import { signUp } from "../controllers/authControllers/auth.signup";
import { logIn } from "../controllers/authControllers/auth.login";
import { logOut } from "../controllers/authControllers/auth.logout";

const router = Router();

// login/signup
router.post('/signup', signUp);
router.post('/login', logIn);

// logout 

router.post("/logout", logOut);

export {router as authRouter};