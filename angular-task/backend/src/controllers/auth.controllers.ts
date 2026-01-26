import type { Request, Response } from "express";
import { db } from "../db/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const [rows] = await db.execute<any[]>(
    "SELECT user_id,password FROM users WHERE email = ?",
    [email],
  );

  if (rows.length === 0) {
    return res.status(409).json({ message: "Account with this email do not exist." });
  }
  console.log(rows);
  const matched=await bcrypt.compare(password,rows[0].password);

  if(!matched){
    return res.status(409).json({ message: "Password invalid" });
  }

  const token=jwt.sign( { userId: rows[0].user_id },"mysecret",{expiresIn:"1d"});

  return res.status(200).json({message:'Login Successful',userId:rows[0].user_id,token:token});
};

export const signup = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "Please provide all fields" });
  }

  const [existing] = await db.execute(
    "SELECT user_id FROM users WHERE email = ?",
    [email],
  );
  if ((existing as any[]).length > 0) {
    return res.status(409).json({ message: "Email already registered" });
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  await db.execute(
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
    [name, email, hash],
  );

  return res.status(201).json({ message: "Signup successful" });
};
