import express from "express";
const router = express.Router();
import {
  authUsers,
  registerUsers,
  logoutUsers,
  getUserProfile,
  updateUserProfile,
  getAllUsersProfile,
  getSingleUser,
  deleteUser,
} from "../controller/userController.js";
import { auth, adminAuth } from "../middleware/authMiddleware.js";

router.get("/logoutUsers", logoutUsers);
router.get("/getUserProfile", auth, getUserProfile);
router.get("/getAllUsersProfile", auth, adminAuth, getAllUsersProfile);
router.get("/getSingleUserProfile", auth, adminAuth, getSingleUser);
router.get("/deleteUsers", auth, adminAuth, deleteUser);
router.put("/updateUserProfile", auth, updateUserProfile);
router.post("/authUsers", authUsers);
router.post("/registerUsers", registerUsers);

export default router;
