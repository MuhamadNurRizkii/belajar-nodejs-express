import express from "express";
import request from "supertest";

const logger = (req, res, next) => {
  console.info(`Received request ${req.method} ${req.originalUrl}`);

  next();
};

const apiKeyMiddleware = (req, res, next) => {
  if (req.query.apiKey) {
    next();
  } else {
    res.status(401).end();
  }
};

const requestTimeMiddleware = (req, res, next) => {
  req.requestTime = Date.now();

  next();
};

const app = express();

app.use(logger);
app.use(apiKeyMiddleware);
app.use(express.json());
app.use(requestTimeMiddleware);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/time", (req, res) => {
  res.send(req.requestTime);
});

test("Test Response Middleware", async () => {
  const res = await request(app).get("/");
  expect(res.status).toBe(401);
});

test("Test Response Middleware request time", async () => {
  const res = await request(app).get("/time");
  expect(res.text).toBe("");
});
