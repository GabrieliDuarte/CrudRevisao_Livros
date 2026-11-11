import {Router} from "express";
import { livrosController } from "../controllers/livros.controller.js";

export const LivrosRouter = Router()

LivrosRouter.get("/",livrosController.getAll);
LivrosRouter.get("/:id",livrosController.getById);
LivrosRouter.post("/",livrosController.create);
LivrosRouter.patch("/:id",livrosController.update);
LivrosRouter.delete("/:id",livrosController.delete);