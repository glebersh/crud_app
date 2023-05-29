import { Schema, model, models } from "mongoose";

export const userSchema = new Schema({
  name: String,
  gender: String,
  email: String,
  salary: String,
  birth_date: String,
  status: String,
  avatar_img_URL: String,
  phone: String,
  about: String,
  department: String,
  desiredPosition: String,
});

const Users = models.users || model('users', userSchema);
export default Users;