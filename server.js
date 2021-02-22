const express = require("express");
const volleyball = require("volleyball");
const port = process.env.PORT || 8000;
const app = express();

app.use(volleyball);

app.get("/", (req, res) => {
  res.json({
    hello: "world",
  });
});

app.listen(port, () => {
  console.log(`App listenning on localhost:${port}/`);
});
