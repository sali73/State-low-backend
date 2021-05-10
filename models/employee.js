//Destructure Schema and model from mongoose
const { Schema, model } = require("mongoose");

const employeeSchema = Schema({
  id: { type: String, required: false },
  state: { type: String, required: false },
  name: { type: String, required: false },
  status: { type: String, default: false },
  legislative_process: { type: String, default: false },
  members: [{ firstName: String, lastName: String }],
});

const Employee = model("employee", employeeSchema);
module.exports = Employee;
