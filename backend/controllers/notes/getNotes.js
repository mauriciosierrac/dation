const Notes = require('../../models/Notes')

const getAllNotes = async (req, res) => {
    const notes = await Notes.find()
    res.json(notes)
}


module.exports = getAllNotes