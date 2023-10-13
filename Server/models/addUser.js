const mongoose = require('mongoose');

const addUserSchema = new mongoose.Schema({
    username: String,
    email: String,
    phone: String,
});

module.exports = mongoose.model('AddUser', addUserSchema);
