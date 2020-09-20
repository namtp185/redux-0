const express = require('express');
const app = express();
const path = require('path');
const port = 3000;


app.use('/static', express.static(path.join(__dirname, 'public'))); // app.use(express.static('public'));

app.get('/', (req, res) => {
    res.json('Hello, redux World');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});