import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title: { type: String, required: true },

    date: { type: Date, default: Date.now() },

    description: { type: String, required: true },

    author: { type: String, required: true }
});

const Taskdb = mongoose.model('taskdb', schema);

export default Taskdb;
