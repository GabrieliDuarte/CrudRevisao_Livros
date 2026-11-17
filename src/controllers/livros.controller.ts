import { type Request, type Response } from "express";
import { livrosService } from "../services/livros.service.js";

class LivrosController {
 async getAll(req:Request,res:Response){
    try {
        const livros = await livrosService.getAll();
        return res.json(livros)
        
    } catch (error) {
        console.error(error)
        return res.status(500).json({erro:"erro inesperado"})
        
    }
 }

}
export const livrosController = new LivrosController();

 
  