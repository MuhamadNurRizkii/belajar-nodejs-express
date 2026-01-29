import express from "express";
import request from "supertest";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.redirect("/products");
});

test("Test Response Redirect", async () => {
  const res = await request(app).get("/");
  expect(res.status).toBe(302);
  expect(res.get("location")).toBe("/products");
});
