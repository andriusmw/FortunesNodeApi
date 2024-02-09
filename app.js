const express = require('express');
const fortunes = require('./data/fortunes.json')

const app = express();


//ENDPOINTS
app.get('/fortunes', (req, res) => {
    res.json(fortunes)
    //Showing the json data from fortunes with res.json(MyVariableThatHasJsonData)
});

app.get('/fortunes/random', (req,res) => {
    console.log("requesting random fortune");

    const random_index = Math.floor(Math.random() * fortunes.length);
    const r_fortune = fortunes[random_index]
    res.json(r_fortune);

});

module.exports = app;