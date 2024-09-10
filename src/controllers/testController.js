import * as testService from "../services/testService.js";

export async function getTest(req, res, next) {
  try {
    const data = await testService.getMessage();
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
}

export async function createTest(req, res, next) {
    try {
        await testService.createTest(req.body)
        res.status(201).json({
            data: "ok"
        });
    } catch (error) {
        next(error)
    }
}
