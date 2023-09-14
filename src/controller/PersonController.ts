import { Request, Response } from "express";
import { QueryResult } from "pg";
import { getPersonById } from "../repositories/PesonRepository";

export const getPersonController = async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id, 10);
    const result: QueryResult = await getPersonById(id);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Pessoa não encontrada" });
    }

    const person: any = result.rows[0];

    return res.status(200).json(person);
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
};
