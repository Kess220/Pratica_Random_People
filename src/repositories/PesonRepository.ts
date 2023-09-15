import { QueryResult } from "pg";
import pool from "../database/database";

export const getRandomPerson = async (): Promise<QueryResult> => {
  const query = {
    text: "SELECT * FROM people ORDER BY RANDOM() LIMIT 1",
  };

  return await pool.query(query);
};
