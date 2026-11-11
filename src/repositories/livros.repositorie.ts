import { Knex } from "knex";
import type { CriarLivros } from "../types/livros.types.js";
import { knex } from "../database/knex.js";

class LivrosRepositorie{
 async getALL(): Promise<livros>{
const livros =await knex("livros").select("*").from("CrudLivros");
console.log(livros);
return livros;

 }
}

export const livrosRepositorie = new LivrosRepositorie();