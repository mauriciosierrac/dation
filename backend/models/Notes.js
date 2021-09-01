const { Schema, model } = require('mongoose')
const Users = require('../models/Users')

//definicion del esquema de datos que sera la colletion de mi base de datos en mongo

const noteSchema = new Schema({
    title: {
        type: String,
        required: false,
    },
    note: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    idUser: { 
        type: Schema.ObjectId,
        ref: 'Users'
    }
})

module.exports = model('Notes', noteSchema)