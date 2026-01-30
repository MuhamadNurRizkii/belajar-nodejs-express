import express from "express";
import request from "supertest";

const errorMiddleware = (err, req, res, next) => {
  res.status(500).json({ success: false, message: err.message });
};

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  throw new Error("Upss ada yang salah nih!");
});

app.use(errorMiddleware);

test("Test Response", async () => {
  const res = await request(app).get("/");

  expect(res.status).toBe(500);
  expect(res.body).toMatchObject({
    success: false,
    message: "Upss ada yang salah nih!",
  });
});
