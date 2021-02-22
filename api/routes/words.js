const { Router } = require("express");
const router = Router();
const db = require("monk")("localhost/WordClipper");
const words = db.get("words");
words.createIndex("word");

// List of words
router.get("/", async (req, res) => {
  const wordsList = await words.find({});

  res.json(wordsList);
});

router.post("/create", async (req, res) => {
  const body = req.body;
  if (body.word != undefined && body.description != undefined) {
    const created = await words.insert(body);
    res.json(created);
  } else {
    res.status(502).json({ message: "Bad request" });
  }
});

module.exports = router;
