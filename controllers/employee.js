const express = require("express");
const router = express.Router();
const Employee = require("../models/employee.js");

///////////////////
//Index Route
//////////////////
router.post("/", async (req, res) => {
  try {
    const createdEmployee = await Employee.create(req.body);
    res.status(200).json(createdEmployee);
  } catch (error) {
    res.status(400).json(error);
  }
});
router.get("/", async (req, res) => {
  try {
    const gitEmployees = await Employee.find({});
    res.status(200).json(gitEmployees);
  } catch (error) {
    res.status(400).json(error);
  }
});

///////////////////
//Delete Route
///////////////////
router.delete("/:id", async (req, res) => {
  try {
    const deletedEmployee = await Employee.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedEmployee);
  } catch (error) {
    res.status(400).json(error);
  }
});

///////////////////
//Edit Route
///////////////////
router.put("/:id", async (req, res) => {
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedEmployee);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
