import express from "express";
import { getUser, login, signup } from "./controllers/auth.controllers.js";
import './db/db.js'
import { authverify } from "./middlewares/authverify.js";
import { addTask, deleteTask, getTasks, updateTask } from "./controllers/task.conrollers.js";
import cors from 'cors';
const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/tasks", authverify, getTasks);
app.post("/tasks", authverify, addTask);
app.delete("/tasks/:taskId", authverify, deleteTask);
app.patch("/tasks", authverify, updateTask);


app.get("/user",authverify,getUser);
app.post("/login", login);
app.post("/signup", signup);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
