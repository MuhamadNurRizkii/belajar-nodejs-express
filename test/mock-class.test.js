import { UserRepository } from "../src/user-repository.js";
import { UserService } from "../src/user-service.js";

jest.mock("../src/user-repository.js");

const repository = new UserRepository();
const service = new UserService();

test("test mock user save", () => {
  const user = {
    id: 1,
    name: "Muhamad Nur Rizki",
  };

  service.save(user);

  expect(repository.save).toHaveBeenCalled();
  expect(repository.save).toHaveBeenCalledWith(user);
});
