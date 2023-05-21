const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

const bodyParser = require('body-parser');
const shelves = require('./db').Images;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

