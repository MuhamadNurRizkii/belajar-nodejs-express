import express from "express";
import request from "supertest";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use((req, res, next) => {
  res.status(404).send("404 Not Found");
});

test("Test Response", async () => {
  const res = await request(app).get("/");
  expect(res.text).toBe("Hello World");
});

test("Test Response", async () => {
  const res = await request(app).get("/not-found");

  expect(res.status).toBe(404);
  expect(res.text).toBe("404 Not Found");
});
