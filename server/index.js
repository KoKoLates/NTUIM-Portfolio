const express = require('express');
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
const Comments = require('./db').Comments;
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 5000;

app.post('/', (req, res) => {
  Comments.create({
    'contents': req.body.contents ? req.body.contents : ''
  }, (err, data) => {
    if (err) throw err;
    res.send(JSON.stringify({ "status": 200, "error": null, "response": data }));
  })
})

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

