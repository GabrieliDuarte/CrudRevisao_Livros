import type { CriarLivros } from "../types/livros.types.js";
import { knex } from "../database/knex.js";

class LivrosRepositorie {
  async getAll() {
    const livros = await knex("livros").select("*").returning("*");
    return livros;
  }
}

export const livrosRepositorie = new LivrosRepositorie();
