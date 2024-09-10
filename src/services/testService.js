import Test from "../models/test.js";
import { ApiError } from "../utils/ApiError.js";

export async function getMessage() {
  try {
    return `Welcome to API`;
  } catch (error) {
    throw error;
  }
}

export async function createTest({ name }) {
  try {
    if (!name) {
      throw new ApiError("name is required", 400);
    }
    await Test.create({ name });
  } catch (error) {
    throw error;
  }
}