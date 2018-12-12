const mongoose = require('mongoose');
const passwordLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    email: {
        type: String,
        required: [true],
        unique: true,
    },
    profile: {
        fullName: {
            type: String,
        },
    },
});


userSchema.plugin(passwordLocalMongoose, {
    usernameField: 'email'
});
const User = mongoose.model('user', userSchema);

module.exports = User;