const express = require('express');
const bodyParser = require('body-parser');

const feedRoute = require('./routes/feed');

const app = express();
port = 8000;

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST,*');
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
    next();
})

app.use('/feed',feedRoute);

app.listen(port);