beforeAll(() => console.log("Before All Outer"));
afterAll(() => console.log("After All Outer"));

beforeEach(() => console.log("Before Each Outer"));
afterEach(() => console.log("After Each Outer"));

test("test outer", () => console.log("test outer"));

describe("Inner", () => {
  beforeEach(() => console.log("Before Each Inner"));
  afterEach(() => console.log("After Each Inner"));

  test("test inner", () => console.log("test inner"));
});
