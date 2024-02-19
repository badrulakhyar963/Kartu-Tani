import express from "express";
import {
  getUsers,
  getUsersById,
  createUsers,
  updateUsers,
  deleteUsers,
} from "../controllers/Users.js";
import { verifyUser } from "../middleware/AuthUser.js";
import { adminOnly } from "../middleware/AuthUser.js";
const router = express.Router();

router.get("/users",  verifyUser, adminOnly,getUsers);
router.get("/users/:id", verifyUser, adminOnly, getUsersById);
router.post("/users", createUsers);
router.patch("/users/:id", verifyUser, adminOnly,updateUsers);
router.delete("/users/:id", verifyUser, adminOnly, deleteUsers);

export default router;