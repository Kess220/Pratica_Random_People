import { Pool, QueryResult } from "pg";
import pool from "../database/database";

export const getPersonById = async (id: number): Promise<QueryResult> => {
  const query = {
    text: "SELECT * FROM people WHERE id = $1",
    values: [id],
  };

  return await pool.query(query);
};
