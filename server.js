const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv').config();
const port = 3000;


app.use('/static', express.static(path.join(__dirname, 'public'))); // app.use(express.static('public'));

app.get('/', (req, res) => {
    res.json('Hello, redux World');
});

console.log(process.env.PORT);
const listener = app.listen(process.env.PORT || port, () => {
    const serverPort = listener.address().port;
    console.log(`Example app listening at http://localhost:${serverPort}`);
});