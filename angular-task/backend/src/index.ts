import express from "express";
import { login, signup } from "./controllers/auth.controllers.js";
import './db/db.js'
import { authverify } from "./middlewares/authverify.js";
import { addTask, deleteTask, getTasks, updateTask } from "./controllers/task.conrollers.js";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", authverify, getTasks);
app.post("/", authverify, addTask);
app.delete("/:taskId", authverify, deleteTask);
app.patch("/", authverify, updateTask);

app.post("/login", login);
app.post("/signup", signup);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
