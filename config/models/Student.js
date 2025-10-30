import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rollNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  course: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    default: 1,
  },
});

const Student = mongoose.model("Student", studentSchema);

export default Student;
