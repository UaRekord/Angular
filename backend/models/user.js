const mongoose = require('mongoose');
const passwordLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});


userSchema.plugin(passwordLocalMongoose, {
    usernameField: 'email'
});
const User = mongoose.model('users', userSchema);

module.exports = User;