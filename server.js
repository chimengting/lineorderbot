const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bot is running");
});

app.post("/webhook", (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});

app.listen(3000);
