import mongoose, { Document } from "mongoose";

interface IUser extends Document {
    name: string;
    email: string;
    password: string;
  }

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
    }

});

const Userdb = mongoose.model<IUser>('userdb', userSchema);

export default Userdb;