import { User } from "../models/userModel.js";

export const createUser = async (req, res, next) => {
  const user = await User.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      data: doc,
    },
  });
};
