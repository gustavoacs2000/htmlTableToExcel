import { Router } from "express";

const resultRouter = Router();

resultRouter.get(`/`, (req, res)=>{
    res.render(`result`);
})

export {resultRouter}