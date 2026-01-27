import express from "express";
import request from "supertest";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/person", (req, res) => {
  res.status(201).json({ name: "Rizki", age: 19 });
});

app.get("/person/:id", (req, res) => {
  const id = req.params.id;
  const datas = [
    {
      id: 1,
      name: "Rizki",
      age: 19,
    },
    {
      id: 2,
      name: "Andi",
      age: 20,
    },
  ];

  if (!id) {
    return res
      .status(400)
      .json({ success: false, message: "Id tidak ditemukan" });
  }

  const data = datas.find((data) => data.id === Number(id));

  if (!data) {
    return res
      .status(404)
      .json({ success: false, message: "Data tidak ditemukan" });
  }

  res.json({ success: true, message: "Data berhasil ditemukan", data: data });
});

app.post("/person/add", (req, res) => {
  const { name, age } = req.body;

  if (!name || !age) {
    return res
      .status(400)
      .json({ success: false, message: "Field wajib diisi" });
  }

  res.status(201).json({
    success: true,
    message: "Data berhasil ditambahkan",
    data: { name, age },
  });
});

test("Test expressJS", async () => {
  const response = await request(app).get("/");

  expect(response.text).toBe("Hello World");
  expect(response.status).toBe(200);
});

test("Test response json", async () => {
  const res = await request(app).get("/person").expect("Content-Type", /json/);

  expect(res.status).toBe(201);
  expect(res.body).toEqual({ name: "Rizki", age: 19 });
});

test("Test post add person", async () => {
  const res = await request(app)
    .post("/person/add")
    .send({ name: "Andi", age: 20 })
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(201);

  expect(res.body).toEqual({
    success: true,
    message: "Data berhasil ditambahkan",
    data: { name: "Andi", age: 20 },
  });
});

test("Test post add person jika tidak mengirim data", async () => {
  const res = await request(app)
    .post("/person/add")
    .send({ name: undefined, age: undefined })
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(400);

  expect(res.body).toMatchObject({
    success: false,
    message: "Field wajib diisi",
  });
});

test("test get data person by id", async () => {
  const res = await request(app)
    .get("/person/2")
    .expect(200)
    .expect("Content-Type", /json/);

  expect(res.body).toMatchObject({
    success: true,
    message: "Data berhasil ditemukan",
    data: {
      id: 2,
      name: "Andi",
      age: 20,
    },
  });
});

test("Test get data person by id when the id not found", async () => {
  const res = await request(app)
    .get("/person/5")
    .expect("Content-Type", /json/)
    .expect(404);

  expect(res.body).toMatchObject({
    success: false,
    message: "Data tidak ditemukan",
  });
});
