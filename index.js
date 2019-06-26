const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log('yooo');
  res.send('<h1>Whats Gucci</h1>');
});
app.get("/test", (req, res) => {
  res.send('<h1>This is the test</h1>');
});

const PORT = process.env.PORT || 5000
app.listen(PORT);