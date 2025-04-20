import mongoose from "mongoose";

const ContactFormSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    message: String,
  },
  { timestamps: true }
);

export default mongoose.models.ContactForm ||
  mongoose.model("ContactForm", ContactFormSchema);
