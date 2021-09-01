const Notes = require('../../models/Notes')
const Users = require('../../models/Users');

/**
 * 
 * @param {*} req : recibe los parametros via body
 * @param {*} res : retorna datos o mensajes via json
 */

const getNotesByUser = async (req, res) => {
    try {
        const idUser = req.params.id
        await Notes.find({idUser: idUser}, function (err, notes) {
            Users.populate(notes, { path: 'idUser' }, function (err, notes) {
                res.status(200).json(notes)
            })
        })
    } catch (err){err}
}


module.exports = getNotesByUser