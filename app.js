var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

var indexRouter = require('./routes/index');
const estudiosRouter = require('./routes/estudios')
const experienciaRouter = require('./routes/experiencia')
const proyectoRouter = require('./routes/proyectos')
const skillRouter = require('./routes/skills')
const { dbConnection } = require('./db/db');

var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(cors()) 
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/estudios', estudiosRouter )
app.use('/experiencias', experienciaRouter)
app.use('/proyectos', proyectoRouter)
app.use('/skills', skillRouter)
dbConnection()



module.exports = app;
