const express = require('express');
const fortunes = require('./data/fortunes.json')

const app = express();


//---------------------------------ENDPOINTS--------------------------------------------
//--------------------------------------------------------------------------------------
//*Note: instead of declaring the function here we should declarate functions on other file,
//import that file and calling the functions here after the endpoint so we have the code clean.

//get all fortunes
app.get('/fortunes', (req, res) => {
    res.json(fortunes)
    //Showing the json data from fortunes with res.json(MyVariableThatHasJsonData)
});

//get a random fortune cookie
app.get('/fortunes/random', (req,res) => {
    console.log("requesting random fortune");

    const random_index = Math.floor(Math.random() * fortunes.length);
    const r_fortune = fortunes[random_index]
    res.json(r_fortune);

});

module.exports = app;