// src/app.ts

import express from "express";
import bodyParser from "body-parser";
import personRouter from "./routes/Person.Routes";
import { errorMiddleware } from "./middleware/errorMiddleware";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Bem-vindo ao seu aplicativo!");
});

app.use("/", personRouter);

app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
