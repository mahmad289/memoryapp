import express from "express";
const router = express.Router();

import {
  createMemory,
  createMemoryComment,
  deleteMemory,
  getMemories,
  getUserMemories,
  likeMemory,
  shareMemory,
} from "../controllers/memoryController.js";
import { isAuthenticated } from "../middleware/authMiddleware.js";
import { newMemoryValidation } from "../validators/memoryValidator.js";

router.route("/").get(getMemories);
router.route("/").post(isAuthenticated, newMemoryValidation, createMemory);
router.route("/me").get(isAuthenticated, getUserMemories);
router.route("/:id").delete(isAuthenticated, deleteMemory);
router.route("/:id/comment").post(isAuthenticated, createMemoryComment);
router.route("/:id/share").post(isAuthenticated, shareMemory);
router.route("/:id/like").post(isAuthenticated, likeMemory);

export default router;
