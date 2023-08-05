require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const express = require('express');
const path = require('path');
const app = express();
const connectDB = require('./config/dbConn.js');
const corsOptions = require('./config/corsOrigins');
const credentials = require('./middleware/credentials.js');
const Career = require('./models/career.js');
const Mail = require('./models/mail.js');
const PORT = process.env.PORT || 3500;

connectDB();

app.use(credentials);

app.use(cors(corsOptions))

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

app.get('/career', async (req, res, next) => {
    try {
        const foundCareers = await Career.find({}).exec();

        res.json(foundCareers);
    }
    catch (err) {
        next(err);
    }
})

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
})

app.post('/news', async (req, res, next) => {
    const { mail } = req.body;
    if (!mail) return res.status(400).json({ 'message': 'Mail is required' });

    const regexMail = /^[a-zA-Z0-9._+%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const validMail = regexMail.test(mail);

    if (!validMail) return res.status(400).json({ 'message': 'invalid mail' });

    try {

        const foundMail = await Mail.find({ mail }).exec();

        if (foundMail) return res.status(400).json({ 'message': 'Mail already exists' });

        const query = await Mail.create({
            mail
        });

        res.status(201).json({ 'sucess': 'Mail added to new letter subscription' });
    }
    catch (err) {
        next(err);
    }
})

app.all('*', (req, res) => {
    res.status(404).json({ 'message': 'PAGE-NOT-FOUND' });
});

app.use((err, req, res, next) => {
    // console.log(err.stack);
    res.status(500).json(err.message);
});

mongoose.connection.once('open', () => {
    console.log('mongodb connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});