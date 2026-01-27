import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/person", (req, res) => {
  res.json({ name: "Rizki", age: 19 });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
