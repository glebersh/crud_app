import { Schema, model, models } from "mongoose";

export const adminSchema = new Schema({
  image: String || null,
  name: String,
  email: String,
  password: String
});

const Admins = models.admins || model('admins', adminSchema);
export default Admins;