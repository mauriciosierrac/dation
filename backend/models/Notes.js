const { Schema, model } = require('mongoose')

const noteSchema = new Schema({
    note: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
})

module.exports = model('Notes', noteSchema)