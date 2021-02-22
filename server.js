const express = require("express");
const volleyball = require("volleyball");
const port = process.env.PORT || 8000;
const app = express();
require("dotenv").config();

const wordsRouter = require("./api/routes/words");

app.use(volleyball);
app.use(express.json());
app.use("/api/words", wordsRouter);

app.listen(port, () => {
  console.log(`App listenning on localhost:${port}/`);
});
