const express = require('express');
const app = express();
const port = 8080;
const indexRouter = require('./routes/index');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(indexRouter);

module.exports = app;
