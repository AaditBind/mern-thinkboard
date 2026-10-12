import express from "express";
import {
  createANote,
  deleteNote,
  getAllNotes,
  getNotebyid,
  updateNote,
} from "../controllers/notesControllers.js";

const router = express.Router();

router.get("/", getAllNotes);

router.get("/:id", getNotebyid);

router.post("/", createANote);

router.put("/:id", updateNote);

router.delete("/:id", deleteNote);

export default router;
