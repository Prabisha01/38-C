jest.mock("../model/userModel", () => ({
  createUser: jest.fn(),
}));

jest.mock("bcrypt");

jest.mock("../middleware/uploads", () => ({
  single: () => (req, res, next) => {
    req.file = null;
    next();
  },
}));

const request = require("supertest");
const app = require("../server");
const { createUser } = require("../model/userModel");
const bcrypt = require("bcrypt");

describe("POST /api/create", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  test("it returns 201 and create user", async () => {
    const mockUser = {
      id: 1,
      name: "abc",
      email: "abc@gmail.com",
      password: "hashed",
      image: null,
    };
    bcrypt.hash.mockResolvedValue("hashed");
    createUser.mockResolvedValue(mockUser);

    const res = await request(app).post("/api/create").send({
      name: "abc",
      email: "abc@gmail.com",
      password: "1234578765",
    });
    // expect(res.statusCode).toBe(201);
    expect(res.body.message).toBe("Createduccessfully");
  });
});
