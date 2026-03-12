const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.redirect('/html/overview.html');
});

app.listen(8080, () => {
    console.log("Server is running on http://localhost:8080");
});