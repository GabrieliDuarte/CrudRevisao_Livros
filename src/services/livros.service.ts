import { livrosRepositorie } from "../repositories/livros.repositorie.js";
import type { CriarLivros } from "../types/livros.types.js";

class LivrosService {
 async getALL(){
    const livros = await livrosRepositorie.getALL();
    return livros;
 }

}

export const livrosService = new LivrosService();
