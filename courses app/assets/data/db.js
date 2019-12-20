const mongoose = require("mongoose");

const DB_URL = "mongodb://localhost:27017/data-camp-courses";

const connect = (url = DB_URL, opts = {}) => {
  return mongoose.connect(url, {
    ...opts,
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  });
};

module.exports = connect;
