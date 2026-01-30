import express, { response } from "express";
import request from "supertest";
import mustacheExpress from "mustache-express";

const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "html");
app.engine("html", mustacheExpress());

app.use(express.json());

app.get("/", (req, res) => {
  res.render("index", {
    title: "Hello World",
    say: "Hello Rizki",
  });
});

test("Test Response", async () => {
  const res = await request(app).get("/");
  console.log(res.text);

  expect(res.text).toContain("Hello World");
  expect(res.text).toContain("Hello Rizki");
});
