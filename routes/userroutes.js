import { Router }from "express";
import  {name,students} from "../database/usersArray.js";
const router =new Router();
router.get("/student", (req,res)=>{
    res.render("students",{name,students:students});
});
router.get("/create", (req,res)=>{
});
router.get("/update", (req,res)=>{
});
router.get("delete", (req,res)=>{
});
router.get("/:id", (req,res)=>{
});
export default router ;