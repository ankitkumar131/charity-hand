import mongoose from "mongoose";

const VolunteerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String },
    phone: { type: String, required: true },
    address: { type: String },
    skills: { type: String },
    availability: { type: String, required: true },
    experience: { type: String },
    motivation: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Volunteer ||
  mongoose.model("Volunteer", VolunteerSchema);
