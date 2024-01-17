import asyncHandler from "../middleware/asyncHandler.js";
import User from "../model/UserSchema.js";
import mongoose from "mongoose";
import { generateToken } from "../middleware/jsonwebtoken.js";

// @desc   Authenticate or Login users
// @routes POST /api/users/authUsers

export const authUsers = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({
    email,
  });

  if (user && (await user.matchedPassword(password))) {
    generateToken(res, user._id);
    res.status(200).json({
      name: user.name,
      _id: user._id,
      password: user.password,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(500);
    throw new Error("Invalid email or password");
  }
});

// @desc   Register new Users
// @routes POST api/users/registerUsers

export const registerUsers = asyncHandler(async (req, res) => {
  const { name, password, email, isAdmin } = req.body;

  const userExists = await User.findOne({
    email,
  });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
    isAdmin,
  });

  if (user) {
    generateToken(res, user._id);

    res.status(200).json({
      name: user.name,
      _id: user._id,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error("User cannot be created");
  }
});

// @desc Logout User
// @ POST api/users/logoutUsers

export const logoutUsers = (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ message: "User token deleted" });
};

export const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error("Cannot update profile");
  }
});

export const updateUserProfile = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const user = await User.findById(req.user._id);

  if (user) {
    user.name = name || user.name;
    user.email = email || user.email;

    if (req.body.password) {
      user.password = password || user.password;
    }

    const newUser = await user.save();

    res.status(200).json({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      isAdmin: newUser.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error("Cannot update user");
  }
});

export const getAllUsersProfile = asyncHandler(async (req, res) => {
  const allUsers = await User.find({});

  if (allUsers) {
    res.status(200).json(allUsers);
  } else {
    res.status(400);
    throw new Error("Cannot fetch all users profile");
  }
});

export const getSingleUser = asyncHandler(async (req, res) => {
  const singleUser = await User.findById(req.user._id);

  if (singleUser) {
    res.status(200).json({
      _id: singleUser._id,
      name: singleUser.name,
      email: singleUser.email,
      isAdmin: singleUser.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error("Cannot fetch user id");
  }
});

export const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.body;

  const user = await User.findByIdAndDelete(id);

  if (user) {
    res.status(200).json({ message: "User deleted" });
  } else {
    res.status(400);
    throw new Error("Cannot delete user id");
  }
});
