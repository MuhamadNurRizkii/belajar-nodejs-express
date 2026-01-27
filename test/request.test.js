import express from "express";
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/person", (req, res) => {
  res.status(201).json({ name: "Rizki", age: 19 });
});

test("Test expressJS", async () => {
  const response = await request(app).get("/");

  expect(response.text).toBe("Hello World");
  expect(response.status).toBe(200);
});

test("Test response json", async () => {
  const res = await request(app).get("/person").expect("Content-Type", /json/);

  expect(res.status).toBe(201);
  expect(res.body).toEqual({ name: "Rizki", age: 19 });
});
