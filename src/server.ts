import express from "express";
import { LivrosRouter } from "./routes/livros.route.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use("/livros", LivrosRouter);
app.listen(port, () => console.log(`Api rodando em http://localhost${port}`));
