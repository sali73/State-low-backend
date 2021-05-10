//Destructure Schema and model from mongoose
const { Schema, model } = require("mongoose");

const employeeSchema = Schema({
  id: { type: String, required: false },
  state: { type: String, required: false },
  name: { type: String, required: false },
  status: { type: String, default: false },
  legislative_process: { type: String, default: false },
  members: [
    {
      newid: String,
      newstate: String,
      newname: String,
      newstatus: String,
      newlegislative_process: String,
    },
  ],
});

const Employee = model("employee", employeeSchema);
module.exports = Employee;
