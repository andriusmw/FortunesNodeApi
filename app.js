const express = require('express');
const fortunes = require('./data/fortunes.json')

const app = express();


//ENDPOINTS
app.get('/fortunes', (req, res) => {
    res.json(fortunes)
    //Showing the json data from fortunes with res.json(MyVariableThatHasJsonData)
});

module.exports = app;