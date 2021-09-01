const Users = require('../../models/Users')


const login = async(req, res) => {
    const { email }= req.body
    const userExist = await Users.find({ email: email })
    if(userExist.length === 0) {
        const newUser = new Users({email})
        await newUser.save()
        res.json({
            message: 'New user Created'
        })
    } else {
        res.json({message: 'Usuario already exists'})
    }
}

module.exports = login