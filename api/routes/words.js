const { Router } = require("express");
const router = Router();
const words = require("../../connection");

// List of words
router.get("/", async (req, res) => {
  const wordsList = await words.find({ isCompleted: false });
  res.json(wordsList);
});

// List of completed words
router.get("/archive", async (req, res) => {
  const wordsList = await words.find({ isCompleted: true });
  res.json(wordsList);
});

router.post("/create", async (req, res) => {
  const body = req.body;
  if (
    body.word != undefined &&
    body.description != undefined &&
    body.isCompleted != undefined
  ) {
    const created = await words.insert(body);
    res.json(created);
  } else {
    res.status(502).json({ message: "Bad request" });
  }
});

// Complete/restore route
router.post("/:id", async (req, res) => {
  const id = req.params.id;
  const isCompleted = req.body.isCompleted;
  const updated = await words.update({ _id: id }, { $set: { isCompleted } });
  res.json(updated);
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const deleted = await words.remove({ _id: id });
  res.json(deleted.deletedCount);
});

module.exports = router;
