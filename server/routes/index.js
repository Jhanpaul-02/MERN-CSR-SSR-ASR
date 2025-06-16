const express = require("express");
const dataRouter = express.Router();

const {
  fetchOfListData,
  createData,
  updateData,
  deleteData,
} = require("../controllers/index");

dataRouter.get("/", fetchOfListData);
dataRouter.post("/", createData);
dataRouter.put("/update/:id", updateData);
dataRouter.delete("/delete/:id", deleteData);

module.exports = dataRouter;
