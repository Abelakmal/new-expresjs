import request from "supertest";
import app from "../src";
import sequelize from "../src/utils/database";
import Test from "../src/models/test";
import { describe, it, expect } from "@jest/globals";

beforeAll(async () => {
  await sequelize.authenticate();
  await sequelize.sync({ force: true });
});

beforeEach(async () => {
  await Test.destroy({ where: {} });
});

afterAll(async () => {
  await sequelize.close();
});

describe("API test success", () => {
  it("should get message 'Welcome to API'", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Welcome to API");
  });

  it("should add test success with status code 200", async () => {
    const response = await request(app).post("/").send({ name: "Budi" });
    expect(response.statusCode).toBe(201);
    expect(response.body.data).toBe("ok");
  });
});

describe("API test failed", () => {
  it("should will error if not input name", async () => {
    const response = await request(app).post("/");
    expect(response.statusCode).toBe(400);
  });
});
