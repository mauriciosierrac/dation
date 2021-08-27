const { Router } = require('express')
const router = Router()

const getAllNotes = require('../../controllers/notes/getNotes')
const createNotes = require('../../controllers/notes/createNotes')
const deleteNotes = require('../../controllers/notes/deleteNote')
const updateNote = require('../../controllers/notes/updateNote')


router.get('/', getAllNotes)

router.post('/', createNotes)

router.delete('/:id', deleteNotes)

router.put('/:id', updateNote)

module.exports = router