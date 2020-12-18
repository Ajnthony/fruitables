import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';

// Authenticate user and get token
// POST /api/users/login
// Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  // matchPassword is a custom method defined in userModel.js
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

// Register a new user and get logged in
// POST /api/users/register
// Public
const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }
  const user = await User.create({
    firstName:
      firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase(),
    lastName:
      lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase(),
    email,
    password,
  });

  // gets logged in after registration
  if (user) {
    res.status(201).json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// Get user's profile
// GET /api/users/profile
// Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id); // currently logged in user's id
  if (user) {
    res.json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

// Update user's profile
// PUT /api/users/profile
// Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.firstName =
      req.body.firstName.charAt(0).toUpperCase() +
        req.body.firstName.slice(1).toLowerCase() || user.firstName;
    user.lastName =
      req.body.lastName.charAt(0).toUpperCase() +
        req.body.lastName.slice(1).toLowerCase() || user.lastName;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

export { authUser, registerUser, getUserProfile, updateUserProfile };
