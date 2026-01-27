import type { Response } from "express";
import type { authRequest } from "../middlewares/authverify.js";
import { db } from "../db/db.js";

export const getTasks = async (req: authRequest, res: Response) => {
  const user = req.user;
  const userId = user.userId;
  console.log(user, userId);
  const [rows] = await db.execute<any[]>(
    "SELECT * FROM TASKS WHERE user_id=?",
    [userId],
  );
  if (rows.length === 0) {
    return res.json({ message: "No tasks for this user" });
  }
  return res.json({ rows });
};

export const addTask = async (req: authRequest, res: Response) => {
  const { userId } = req.user;
  const { task_name,status} = req.body;

  if (!task_name || task_name.trim() === "") {
    return res.status(400).json({ message: "Task name is required" });
  }

  try {
    await db.execute("INSERT INTO tasks (task_name,status, user_id) VALUES (?, ?,?)", [
      task_name.trim(),
      status,
      userId,
    ]);

    return res.status(201).json({ message: "New task added" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error while adding task" });
  }
};

export const deleteTask = async (req: authRequest, res: Response) => {
  const { taskId } = req.params;
  const { userId } = req.user;

  if (!taskId) {
    return res.status(400).json({ message: "TaskId missing" });
  }

  try {
    const [result]: any = await db.execute(
      "DELETE FROM tasks WHERE task_id = ? AND user_id = ?",
      [taskId, userId],
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Task not found or not authorized",
      });
    }

    return res.status(200).json({ message: "Task deleted" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error while deleting task" });
  }
};

export const updateTask = async (req: authRequest, res: Response) => {
  const { userId } = req.user;
  const { task_id, task_name, status } = req.body;
  
  if (!task_id) {
    return res.status(400).json({ message: "task_id is required" });
  }

  if (!task_name && !status) {
    return res.status(400).json({ message: "Nothing to update" });
  }

  try {
    const [result]: any = await db.execute(
      `UPDATE TASKS 
                     SET task_name=?,status=?
                     WHERE task_id=? AND user_id=?`,
      [task_name, status, task_id, userId],
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Task not found or not authorized",
      });
    }
    return res.status(200).json({ message: "Task updated" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error while updating task" });
  }
};
