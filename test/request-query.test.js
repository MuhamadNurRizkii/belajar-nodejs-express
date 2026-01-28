import express from "express";
import request from "supertest";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`Hello ${req.query.firstName} ${req.query.lastName}`);
});

test("Test get query params", async () => {
  const res = await request(app)
    .get("/")
    .query({ firstName: "Muhamad", lastName: "Nur Rizki" })
    .expect(200);

  expect(res.text).toBe("Hello Muhamad Nur Rizki");
});
