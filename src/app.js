const express = require("express");
const cors = require("cors");
const app = express();

const cardRoutes = require("./Routes/Card/CardRoutes");

app.use(express.json());
app.use(cors());

app.use("/card", cardRoutes);
// Not found handling
app.use((req, res, next) => {
  res.status(404);
  const error = new Error("not found");
  next(error);
});
// Errors handling
app.use((error, req, res, next) => {
  res.status(res.statusCode || 500);
  res.json({
    message: error.message,
  });
});

module.exports = app;
