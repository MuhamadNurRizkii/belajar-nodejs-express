import express from "express";
import request from "supertest";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  console.log(req.query);
  const name = req.query.name;
  const address = req.query.address;
  res.json({ name, address });
});

test("Test get query params", async () => {
  const res = await request(app)
    .get("/")
    .query({ name: "Rizki", address: "Tangerang" })
    .expect(200);

  expect(res.body).toMatchObject({ name: "Rizki", address: "Tangerang" });
});
