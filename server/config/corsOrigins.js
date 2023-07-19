const corsOptions = {
    origin: (origin, callback) => {
        callback(null, true);
    },
    optionSuccessStatus: 200
}

module.exports = corsOptions;