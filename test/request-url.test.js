import express from "express";
import request from "supertest";

const app = express();

app.use(express.json());

app.get("/hello/world", (req, res) => {
  res.json({
    path: req.path,
    url: req.originalUrl,
    hostname: req.hostname,
    protocol: req.protocol,
    secure: req.secure,
    queryParams: {
      name: req.query.name,
      address: req.query.address,
    },
  });
});

test("Test request url", async () => {
  const res = await request(app)
    .get("/hello/world")
    .query({ name: "Rizki", address: "Tangerang" })
    .expect(200);

  expect(res.body).toMatchObject({
    path: "/hello/world",
    url: "/hello/world?name=Rizki&address=Tangerang",
    hostname: "127.0.0.1",
    protocol: "http",
    secure: false,
    queryParams: {
      name: "Rizki",
      address: "Tangerang",
    },
  });
});
