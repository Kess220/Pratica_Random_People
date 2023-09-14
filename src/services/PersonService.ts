import { QueryResult } from "pg";
import { getPersonById } from "../repositories/PesonRepository";

export const getPerson = async (id: number): Promise<QueryResult> => {
  try {
    const result = await getPersonById(id);
    return result;
  } catch (error) {
    throw new Error(`Erro ao buscar a pessoa: ${error.message}`);
  }
};
