const { Router } = require('express')
const router = Router()

const getAllNotes = require('../../controllers/notes/getNotes')
const createNotes = require('../../controllers/notes/createNotes')
const deleteNotes = require('../../controllers/notes/deleteNote')
const updateNote = require('../../controllers/notes/updateNote')
const getNotesByUser = require('../../controllers/notes/getNotesByUser')


router.get('/', getAllNotes)
router.get('/:id', getNotesByUser)

router.post('/', createNotes)

router.delete('/:id', deleteNotes)

router.put('/:id', updateNote)

module.exports = router