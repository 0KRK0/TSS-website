const mongoose = require('mongoose');
const { Schema } = mongoose;

const careerSchema = new Schema({
    role: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Career', careerSchema);