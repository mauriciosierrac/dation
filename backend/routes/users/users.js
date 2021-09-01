const { Router } = require('express')
const router = Router();

const login = require('../../controllers/users/login')
const getUsers = require('../../controllers/users/getUsers')

/* GET users listing. */

router.post('/', login);
router.get('/', getUsers);

module.exports = router;
