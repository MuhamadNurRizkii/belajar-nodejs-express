import cookieParser from "cookie-parser";
import express from "express";
import request from "supertest";

const app = express();

app.use(express.json());
app.use(cookieParser("RAHASIA"));

app.get("/", (req, res) => {
  const name = req.cookies.name;
  const token = req.cookies.token;

  res.json({
    name: name,
    token: token,
  });
});

app.post("/login", (req, res) => {
  const { name } = req.body;

  res.cookie("login", name, { path: "/", signed: true });

  res.send(`Hello ${name}`);
});

test("Test Cookie read", async () => {
  const res = await request(app)
    .get("/")
    .set("Cookie", "name=rizki;token=rahasia");
  expect(res.body).toMatchObject({ name: "rizki", token: "rahasia" });
});

test("Test Cookie Write", async () => {
  const response = await request(app).post("/login").send({ name: "rizki" });

  expect(response.get("Set-Cookie").toString()).toBe(
    "login=s%3Arizki.YJ%2BE8USgNOZR2MzpPoAF1GY%2BKTwnSsRtm5OIVPmgFwo; Path=/",
  );
  expect(response.text).toBe("Hello rizki");
});
