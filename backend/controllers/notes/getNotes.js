const Notes = require('../../models/Notes')
const Users = require('../../models/Users');

/**
 * 
 * @param {*} req : recibe los parametros via body
 * @param {*} res : retorna datos o mensajes via json
 */

const getAllNotes = async (req, res) => {
    try {

        await Notes.find({}, function (err, notes) {
            Users.populate(notes, { path: 'idUser' }, function (err, notes) {
                res.status(200).json(notes)
            })
        })
    } catch (err){err}
}


module.exports = getAllNotes