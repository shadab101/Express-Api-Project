import express from "express";
const router = express.Router();
import { createUser, getUser, deleteUser, updateUser, getAllUsers } from "../controllers/users.js";

router.get("/", getAllUsers);
router.post("/", createUser);
router.get("/:id", getUser);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);
export default router;
