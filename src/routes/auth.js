const express = require("express");
const  authMiddleware = require('../middleware/authMiddleware')
const { saveUser } = require("../utils/auth");
const {
    registerUser,
    loginUser,
    forgotPassword,
    resetPassword,
    verifyEmail,
    activationCode,
    loggedIn,
    logout
} = require("../controllers/auth");



const router = express.Router();

// Register Route
router.post("/register", registerUser, saveUser());

// Login Route
router.post("/login", loginUser);

// Route to get loggedIn user data
router.get("/loggedIn", authMiddleware, loggedIn());

// Forgot Password Route
router.post("/forgot-password", forgotPassword);

// Reset Password Route
router.post("/password-reset", resetPassword);

// Reset Password Route
router.post("/email-verify", verifyEmail);

// Reset Password Route
router.post("/resend-activation-code", activationCode);

// Logout Route
router.get('/logout', logout);


module.exports = router;

