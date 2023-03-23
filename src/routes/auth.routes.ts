import  { Router }  from "express";
import { signUp } from "../controllers/auth.signup";
import { logIn } from "../controllers/auth.login";
import { logOut } from "../controllers/auth.logout";

const router = Router();

// login/signup
router.post('/signup', signUp);
router.post('/login', logIn);

// logout 

router.post("/logout", logOut);

export {router as authRouter};