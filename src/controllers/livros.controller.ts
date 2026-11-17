import { type Request, type Response } from "express";
import { livrosService } from "../services/livros.service.js";
import type { CriarLivros } from "../types/livros.types.js";

class LivrosController {
  async getAll(req: Request, res: Response) {
    try {
      const livros = await livrosService.getAll();
      return res.json(livros);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ erro: "erro inesperado" });
    }
  }

  async getById(req: Request<{ id: string }>, res: Response) {
    try {
      const livros = await livrosService.getById(req.params.id);
      return res.json(livros);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ erro: "erro inesperado" });
    }
  }

  async create(req: Request<CriarLivros>, res: Response) {
    try {
      const livros = await livrosService.create(req.body);
      return res.json(livros);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ erro: "erro inesperado" });
    }
  }
  async update(req: Request<{ id: string }, CriarLivros>, res: Response) {
    try {
      const livronovo = await livrosService.update(req.params.id, req.body);
      return res.json(livronovo);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ erro: "erro inesperado" });
    }
  }
  async delete(req:Request<{id:string},CriarLivros>,res:Response){
    try{
const livrodeletado = await livrosService
    }catch{

    }
  }
}
export const livrosController = new LivrosController();
