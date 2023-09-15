import { Request, Response } from "express";
import { QueryResult } from "pg";
import { getRandomPerson } from "../repositories/PesonRepository";

export const getPersonController = async (req: Request, res: Response) => {
  try {
    // Consulte o banco de dados para buscar uma pessoa aleatória
    const result: QueryResult = await getRandomPerson();

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Pessoa não encontrada" });
    }

    // Retorne os dados da pessoa aleatória encontrada
    const person: any = result.rows[0];

    return res.status(200).json(person);
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
};
