import express from "express";
import request from "supertest";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  if (req.query.name) {
    res.status(200).send(`Hello ${req.query.name}`);
  } else {
    res.status(400).end();
  }
});

test("Test Response Success", async () => {
  const res = await request(app).get("/").query({ name: "Rizki" });
  expect(res.text).toBe("Hello Rizki");
});

test("Test Response Error", async () => {
  const res = await request(app).get("/");

  expect(res.status).toBe(400);
});
