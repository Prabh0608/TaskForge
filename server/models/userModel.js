import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "User should have a name!"],
  },
  email: {
    type: String,
    required: [true, "User should have an email!"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a vadlid email!"],
  },
  password: {
    type: String,
    required: [true, "Please provide your password"],
    select: false,
    minlength: 8,
  },
  role: {
    type: String,
    enum: ["viewer", "member", "admin"],
    default: "viewer",
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next;
  this.password = await bcrypt.hash(this.password, 12);
  next;
});

export const User = mongoose.model("User", userSchema);
