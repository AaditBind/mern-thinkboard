import Note from "../models/Note.js";
export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in getAllNotes Controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function createANote(req, res) {
  try {
    const { title, content } = req.body;
    const newNote = new Note({ title, content });
    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (error) {
    console.error("Error in createANote Controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function updateNote(req, res) {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      {
        title,
        content,
      },
      {
        new: true,
      },
    );
    if (!updatedNote)
      return res.status(404).json({ message: "Note not found" });
    res.status(200).json(updatedNote);
  } catch (error) {
    console.error("Error in updateANote Controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function deleteNote(req, res) {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote)
      return res.status(404).json({ message: "Note not found" });
    res.status(200).json({ message: "note deleted succesfully" });
  } catch (error) {
    console.error("Error in deleteNote Controller", error);
    res.status(500).json({ message: "Internal server issue" });
  }
}

export async function getNotebyid(req, res) {
  try {
    const findById = await Note.findById(req.params.id);
    if (!findById) return res.status(404).json({ message: "Note not found" });
    res.json(findById);
  } catch (error) {
    console.error("error in findById Controller", error);
    res.status(500).json({ message: "Internal server issue" });
  }
}
