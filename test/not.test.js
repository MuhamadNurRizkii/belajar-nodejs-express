import { totalPrice } from "../src/math.js";

test("string.not", () => {
  const name = "Muhamad Nur Rizki";

  expect(name).not.toBe("muhamad nur rizki");
  expect(name).not.toEqual("Andi budi");
});

test("number.not", () => {
  const value = 2 + 3;

  expect(value).not.toBeGreaterThan(6);
  expect(value).not.toBeLessThan(2);
  expect(value).not.toBe(10);
});

test("object tidak sama", () => {
  const name = {
    name: "Andi",
    age: 19,
    address: "Bandung",
  };

  expect(name).not.toEqual({ name: "Jaka", age: 20, address: "Jakarta" });
});

test("data harus ada", () => {
  const data = "kursi";

  expect(data).not.toBeNull();
  expect(data).not.toBeUndefined();
  expect(data).not.toBe("Meja");
});

test("total price !== 0 dan !== null", () => {
  const result = totalPrice(5000, 5);

  expect(result).not.toBe(0);
  expect(result).not.toBeNull();
});
