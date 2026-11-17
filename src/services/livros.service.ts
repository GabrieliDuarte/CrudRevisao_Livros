import { livrosRepositorie } from "../repositories/livros.repositorie.js";
import type { CriarLivros } from "../types/livros.types.js";

class LivrosService {
  async getAll() {
    const livros = await livrosRepositorie.getAll();
    return livros;
  }
  async getById(id: string) {
    const livros = await livrosRepositorie.getById(id);
    return livros;
  }
  async create(livro: CriarLivros) {
    const livros = await livrosRepositorie.create(livro);
    return livros;
  }
  async update(id: string, dados: CriarLivros) {
    const livronovo = await livrosRepositorie.update(dados, id);
    return livronovo;
  }
}

export const livrosService = new LivrosService();
