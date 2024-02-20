const express = require("express");
const app = express();
const cors = require('cors')

// import errHandler function nanti daftarin error disini
const errHandler = require("./middlewares/errHandler");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

// pake router
app.use(require("./routes"));

// pakai error handler di folder middlewares
app.use(errHandler);

// listener dipindah ke folder bin/www -> nanti npx nodemon bin/www
module.exports = app;