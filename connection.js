const datastore = require("nedb-promise");

const words = datastore({
  filename: "./storage/words.json",
  autoload: true,
});

module.exports = words;
