const Notes = require('../../models/Notes')

/**
 * 
 * @param {*} req : recibe los parametros via url
 * @param {*} res : retorna datos o mensajes via json
 */

const deleteNote = async (req, res) => {
    await Notes.findByIdAndDelete(req.params.id)
    res.json({
        message: 'Deleted Note'
    })
}

module.exports = deleteNote