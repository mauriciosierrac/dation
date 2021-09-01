const Notes = require('../../models/Notes')

/**
 * 
 * @param {*} req : recibe los parametros via url
 * @param {*} res : retorna datos o mensajes via json
 */


const updateNote = async (req, res) => {
    //aqui va la logica del update
    const { note } = req.body
    const newTitle = note.slice(0, 20)
    const id = req.params.id
    await Notes.findByIdAndUpdate(id, { title: newTitle, note: note }, { new: true })
    res.json({
        message: 'Updated note'
    })
}

module.exports = updateNote