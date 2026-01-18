test("test toBe", () => {
  const name = "Rizki";
  const hello = (name) => {
    return `Hello ${name}`;
  };

  expect(hello(name)).toBe(`Hello Rizki`);
});

test("test toEqual object", () => {
  const person = {
    name: "Rizki",
    age: 19,
  };
  Object.assign(person, { id: 1 });

  expect(person).toEqual({ id: 1, name: "Rizki", age: 19 });
});

test("test toEqual array", () => {
  const buah = ["nanas", "mangga", "apel"];
  buah.push("semangka");

  expect(buah).toEqual(["nanas", "mangga", "apel", "semangka"]);
});
