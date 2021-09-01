const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan')
const cors = require('cors')
const path = require('path');

require('dotenv').config()
require('./database/mongo')

const usersRouter = require('./routes/users/users');
const notesRouter = require('./routes/notes/Notes')


const app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api/users', usersRouter);
app.use('/api/notes', notesRouter)

module.exports = app;
