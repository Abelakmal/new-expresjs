function handleNotFound(req, res, next) {
  if (req.path.includes("/api/")) {
    res.status(404).json({ error: "Not found" });
  } else {
    next();
  }
}

export default handleNotFound;
