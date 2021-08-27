const Notes = require('../../models/Notes')


const updateNote = async (req, res) => {
    //aqui va la logica del update
    const { note } = req.body
    const id = req.params.id
    await Notes.findByIdAndUpdate(id, { note: note }, { new: true })
    res.json({
        message: 'Updated note'
    })
}

module.exports = updateNote