const express = require('express');
const bodyParser = require('body-parser');
const fortunes = require('./data/fortunes.json');


const app = express();
app.use(bodyParser.json());

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
   // console.log("requesting random fortune");

    const random_index = Math.floor(Math.random() * fortunes.length);
    const r_fortune = fortunes[random_index]
    res.json(r_fortune);

});

app.get('/fortunes/:id', (req,res)=> {
    //console.log(req.params);
   res.json(fortunes.find(f => f.id == req.params.id)) ;
   //res.json is the response. inside we have fortunes.find 
   // which searches and returns 1 value, the condition of the searching
   //is inside the parenthesis , check each fortune cookie and return
   //the one whichs id is the same as req.params.id
});

app.post('/fortunes', (req,res)=> {
    console.log(req.body)
})


module.exports = app;