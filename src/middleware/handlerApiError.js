import { ApiError } from "../utils/ApiError.js";

const handlerApiError = (err, req, res, next) => {
  if (err instanceof ApiError) {
    res.status(err.statusCode).json({
      error: err.message,
    });
  } else {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

export default handlerApiError;
