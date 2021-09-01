const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    email: {
        type: String,
        require: true,
        unique: true
    }
})

module.exports = model('Users', userSchema)