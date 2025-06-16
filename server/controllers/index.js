const dataModel = require("../model/data");

const fetchOfListData = async (req, res) => {
  let listOfData;
  try {
    listOfData = await dataModel.find();
  } catch (e) {
    console.log(e);
    return res.json({ message: "Internal Server Error" });
  }
  if (!listOfData) {
    return res.json({ message: "No Data Found!" });
  }
  return res.json({ listOfData });
};
const createData = async (req, res) => {
  const { title, description } = req.body;
  const newData = new dataModel({ title, description });
  await newData.save();
  return res.json(newData);
};
const updateData = async (req, res) => {};
const deleteData = async (req, res) => {};

module.exports = { fetchOfListData, createData, updateData, deleteData };
