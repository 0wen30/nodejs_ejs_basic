import { Router } from "express";
import { about, contact, home } from "../controllers/controller.js";

const router = Router();

router.get('/',home);

router.get('/about',(req,res)=>{
    res.render("about",{title:"about"});
});

router.get('/contact',(req,res)=>{
    res.render("contact",{title:"contact"});
});

export default router;