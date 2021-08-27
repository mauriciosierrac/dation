const Notes = require('../../models/Notes')

const deleteNote = async (req, res) => {
    await Notes.findByIdAndDelete(req.params.id)
    res.json({
        message: 'Deleted Note'
    })
}

module.exports = deleteNote