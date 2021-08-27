const Notes = require('../../models/Notes')


const createNotes = async (req, res) => {
    const { note } = req.body;
    const newNote = new Notes({ note })
    await newNote.save()
    res.json({
        message: 'New Note created'
    })
}
module.exports = createNotes