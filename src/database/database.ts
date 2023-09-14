import { Pool, PoolConfig } from "pg";
import dotenv from "dotenv";

dotenv.config();

// Interface para as configurações do banco de dados
interface DatabaseConfig extends PoolConfig {
  user: string;
  password: string;
  host: string;
  port: number;
  database: string;
}

const dbConfig: DatabaseConfig = {
  user: process.env.DB_USER || "",
  password: process.env.DB_PASSWORD || "",
  host: process.env.DB_HOST || "",
  port: parseInt(process.env.DB_PORT || "5432", 10),
  database: process.env.DB_NAME || "",
};

const pool = new Pool(dbConfig);

pool.on("error", (err: Error) => {
  console.error("Erro na conexão com o banco de dados:", err);
});

export default pool;
