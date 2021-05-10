//Destructure Schema and model from mongoose
const { Schema, model } = require("mongoose");

const employeeSchema = Schema({
  id: { type: String, required: false },
  state: { type: String, required: false },
  name: { type: String, required: false },
  status: { type: String, default: false },
  legislative_process: { type: String, default: false },
  newData: {
    newid: { type: String, required: false },
    newstate: { type: String, required: false },
    newname: { type: String, required: false },
    newstatus: { type: String, default: false },
  },
});

const Employee = model("employee", employeeSchema);
module.exports = Employee;
