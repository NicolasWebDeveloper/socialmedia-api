import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
    unique: true
  },
  email: {
    required: true,
    type: String,
    unique: true
  },
  password: {
    required: true,
    type: String,
    validate: {
      validator(v) {
        console.log(v);
      },
      message: 'Password is to short!'
    }
  },
  passwordConfirm: {
    required: true,
    type: String
  }
});

userSchema.pre('save', function(next) {
  console.log(this);
  next();
});

const User = mongoose.model('user', userSchema);

export default User;
