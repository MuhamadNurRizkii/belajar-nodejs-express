import express from "express";
import request from "supertest";

const app = express();

const router = express.Router();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

router.get("/user/:name", (req, res) => {
  res.send(`Hello ${req.params.name}`);
});

test("Test Response", async () => {
  const res = await request(app).get("/");
  expect(res.text).toBe("Hello World");
});

test("Test response router /name", async () => {
  app.use(router);
  const response = await request(app).get("/user/rizki");

  expect(response.status).toBe(200);
  expect(response.text).toBe("Hello rizki");
});
