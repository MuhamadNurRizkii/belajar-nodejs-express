import express from "express";
import request from "supertest";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    name: "Mangga",
    price: 10000,
    qty: 30,
    total: 10000 * 30,
  });
});

test("Test Response", async () => {
  const res = await request(app).get("/");
  expect(res.body).toMatchObject({
    name: "Mangga",
    price: 10000,
    qty: 30,
    total: 300000,
  });

  expect(res.status).toBe(200);
  expect(res.body.total).toBe(300000);
});
