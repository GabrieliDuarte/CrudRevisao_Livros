import { livrosRepositorie } from "../repositories/livros.repositorie.js";
import type { CriarLivros } from "../types/livros.types.js";

class LivrosService {
 async getAll(){
    const livros = await livrosRepositorie.getAll();
    return livros;
 }

}

export const livrosService = new LivrosService();
