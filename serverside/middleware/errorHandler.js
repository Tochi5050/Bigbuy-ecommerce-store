export const notFound = (req, res, next) => {
  const error = new Error(`404 Not found ${req.url}`);
  res.status(404);
  next(error);
};

export const errorHandler = (error, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  let message = error.message;

  if (error.name == "CastError" && error.kind == "ObjectId") {
    message = "Result not found";
    statusCode = 404;
  }

  res.status(statusCode).json({
    message,
  });
};
