const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        minLength: 3,
        maxLength: 128,
    },
},
    { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);