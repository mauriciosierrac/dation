const Notes = require('../../models/Notes')

/**
 * 
 * @param {*} req : recibe los parametros via body
 * @param {*} res : retorna datos o mensajes via json
 */

const createNotes = async (req, res) => {
    const { note, idUser } = req.body;
    
    //sustrae de la cadena contenida en  la variable "note" los caracteres en las posiciones 0 a 20
    const title = note.slice(0, 20)

    const newNote = new Notes({
        title,
        note,
        idUser
    })
    await newNote.save()
    res.json({
        message: 'New Note created'
    })

}
module.exports = createNotes