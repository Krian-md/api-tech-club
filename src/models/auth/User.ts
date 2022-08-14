import mongoose from 'mongoose';
import config from 'config';
import bcrypt from 'bcrypt';
import IUser from '../../interfaces/auth/IUser';

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, default: null },
    lastName: { type: String, default: null },
    email: { type: String, unique: true },
    password: { type: String, unique: true },
    role: { type: String, default: null },
    token: { type: String },
  },
  {
    timestamps: true,
  },
);

userSchema.pre('save', async function (next) {
  const user = this as IUser;

  if (user.isModified('password')) {
    return next();
  }

  const salt = await bcrypt.genSalt(config.get<number>('saltWorkFactor'));

  const hash = await bcrypt.hashSync(user.password, salt);

  user.password = hash;

  return next();
});

userSchema.methods.comparePassword = async function (
  candidatePassword: string,
) {
  const user = this as IUser;

  return bcrypt.compare(candidatePassword, user.password).catch(() => false);
};

const User = mongoose.model('User', userSchema);

export default User;
