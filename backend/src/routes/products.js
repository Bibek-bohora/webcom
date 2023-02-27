import { Router } from "express";
const router =Router();
import data from "../data.js";
import ProductController from "../controller/products.js";


const pcontroller=new ProductController();

router.get("/",(req,res)=>{ res.send("productroutes");})

//fecth get products
router.get("/get",pcontroller.fetchProduct);

//getbyid
router.get("/get/:id",pcontroller.getProductById);






export default router;