import express from "express";
import request from "supertest";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.set({
    "X-Powered-By": "Muhamad Nur Rizki",
    "X-Author": "Rizki",
  });

  res.send("Hello World");
});

test("Test Response", async () => {
  const res = await request(app).get("/");

  expect(res.text).toBe("Hello World");
  expect(res.get("X-Powered-By")).toBe("Muhamad Nur Rizki");
  expect(res.get("X-Author")).toBe("Rizki");
});
