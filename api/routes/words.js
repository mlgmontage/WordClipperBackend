const { Router } = require("express");
const router = Router();

// List of words
router.get("/", async (req, res) => {
  res.json([{ word: "abundant", description: "plentyfull" }]);
});

router.post("/create", (req, res) => {
  res.json({
    message: "created",
  });
});

module.exports = router;
