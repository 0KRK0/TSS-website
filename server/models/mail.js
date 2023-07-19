const mongoose = require('mongoose');
const { Schema } = mongoose;

const mailSchema = new Schema({
    mail: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Mail', mailSchema);