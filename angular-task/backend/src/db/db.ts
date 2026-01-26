import mysql from "mysql2/promise";
export const db = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root@123",
  database: "taskDb",
});
console.log("DB Connected Successfully");

