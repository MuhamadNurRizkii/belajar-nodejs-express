import express from "express";
import request from "supertest";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  const type = req.get("Accept");
  res.json({ type: type });
});

test("Test get query params", async () => {
  const res = await request(app)
    .get("/")
    .set("Accept", "application/json")
    .expect(200);

  expect(res.body).toMatchObject({ type: "application/json" });
});
