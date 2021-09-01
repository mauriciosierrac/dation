const Users = require('../../models/Users')

/**
 * 
 * @param {*} req : recibe los parametros via body
 * @param {*} res : retorna datos o mensajes via json
 */

const getUsers = async (req, res) => {
    const users = await Users.find()
    res.json(users)
}


module.exports = getUsers