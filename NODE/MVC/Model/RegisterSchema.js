const { default: mongoose } = require("mongoose");

const commonSchema = {
    type: String,
    required: true,
}
const UserSchema = new mongoose.Schema({
    name: commonSchema,
    email: {
        ...commonSchema,
        unique: true,
    },
    password: commonSchema,
})

// const UserSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     password: {
//         type: String,
//         required: true
//     }
// })

const User = mongoose.model('User', UserSchema);

module.exports = User;