import express from "express";
import request from "supertest";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

test("Test Response", async () => {
  const res = await request(app).get("/");
  expect(res.text).toBe("Hello World");
});
