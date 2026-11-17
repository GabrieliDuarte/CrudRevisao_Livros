import type { CriarLivros } from "../types/livros.types.js";
import { knex } from "../database/knex.js";

class LivrosRepositorie {
  async getAll() {
    const livros = await knex("livros").select("*").returning("*");
    return livros;
  }
   async getById(id:string) {
    const [livros] = await knex("livros").where({id}).select("*").returning("*");
    return livros;
  }
  async create(dados:CriarLivros) {
    const [livrocriado] = await knex("livros").insert("dados").returning("*");
    return livrocriado;

  }
  async update(dados:CriarLivros,id:string){
    const [livronovo] = await knex("livros").where({id}).update("dados").returning("*")
    return livronovo
  }
}

export const livrosRepositorie = new LivrosRepositorie();
