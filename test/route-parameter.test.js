import express from "express";
import request from "supertest";

const app = express();

app.use(express.json());

app.get("/products/:id", (req, res) => {
  const products = [
    {
      id: 1,
      name: "mangga",
      price: 10000,
    },
    {
      id: 2,
      name: "apel",
      price: 15000,
    },
    {
      id: 3,
      name: "jeruk",
      price: 12000,
    },
  ];
  const id = req.params.id;
  console.log(id);

  if (!id) {
    return res
      .status(400)
      .json({ success: false, message: "Id tidak ditemukan" });
  }

  const product = products.find((p) => p.id === Number(id));
  console.log(product);

  if (!product) {
    return res
      .status(400)
      .json({ success: false, message: "Product tidak ditemukan" });
  }

  res.json({ success: true, message: "Product berhasil ditemukan", product });
});

test("Test route parameter success", async () => {
  const response = await request(app).get("/products/3");

  expect(response.status).toBe(200);
  expect(response.body).toMatchObject({
    success: true,
    message: "Product berhasil ditemukan",
    product: { id: 3, name: "jeruk", price: 12000 },
  });
});

test("Test route parameter error", async () => {
  const response = await request(app).get("/products/5");

  expect(response.status).toBe(400);
  expect(response.body).toMatchObject({
    success: false,
    message: "Product tidak ditemukan",
  });
});
