import knex from "knex";

export const db = knex({
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
});

export const raw = async (sql: string, bindings?: any) => {
  const result = await db.raw(sql, bindings);
  const data = result[0];
  const parsed = JSON.parse(JSON.stringify(data));
  return parsed.length === 1 ? parsed[0] : parsed;
};
