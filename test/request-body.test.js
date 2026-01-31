import express from "express";
import request from "supertest";
import expressFileUpload from "express-fileupload";

const app = express();

app.use(express.json());
app.use(expressFileUpload());

app.post("/products/add", (req, res) => {
  const { name, price } = req.body;

  res.json({ name, price });
});

test("Test Request Body", async () => {
  const res = await request(app)
    .post("/products/add")
    .send({ name: "Mangga", price: 10000 })
    .set("Accept", /json/);

  expect(res.body).toMatchObject({ name: "Mangga", price: 10000 });
  expect(res.body.name).toBe("Mangga");
  expect(res.body.price).toBe(10000);
});
