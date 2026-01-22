import { getBalance } from "../src/async";

test("Mock async function", async () => {
  const from = jest.fn();
  from.mockResolvedValueOnce(1000);
  from.mockResolvedValueOnce(5000);

  await expect(getBalance("Rizki", from)).resolves.toEqual({
    name: "Rizki",
    balance: 1000,
  });

  await expect(getBalance("Andi", from)).resolves.toEqual({
    name: "Andi",
    balance: 5000,
  });

  expect(from.mock.calls.length).toBe(2);
  await expect(from.mock.results[0].value).resolves.toBe(1000);
  await expect(from.mock.results[1].value).resolves.toBe(5000);
});

test.failing("mock async function rejected", async () => {
  const from = jest.fn();
  from.mockRejectedValueOnce(new Error("Upss"));

  await getBalance("rizki", from);
});
