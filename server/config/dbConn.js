const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://krishna:iGvOQcs6piQAeM46@cluster0.vzuxyaa.mongodb.net/?retryWrites=true&w=majority', {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = connectDB;