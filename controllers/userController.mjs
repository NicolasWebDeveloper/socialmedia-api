import catchAsync from '../utils/catchAsync.mjs';
import AppError from '../utils/appError.mjs';
import User from '../models/userModel.mjs';

export const createUser = catchAsync(async (req, res, next) => {
  const { name, email, password, passwordConfirm } = req.body;
  if (!name || !email || !password || !passwordConfirm) return next(new AppError('Invalid request body provided', 400));

  const user = new User({ name, email, password, passwordConfirm });
  await user.save();
});

export const deleteUser = (req, res, next) => {};
