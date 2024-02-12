const fs = require('fs');
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
    //console.log(req.body)

    const {message, lucky_number, spirit_animal} = req.body;
    const fortune_ids = fortunes.map(f => f.id);
   // const NewId = Math.max(...fortune_ids)
    const newId2 = fortune_ids.length + 1
    const fortune = {id: newId2, message,lucky_number,spirit_animal};

    const new_fortunes = fortunes.concat(fortune)
   
    fs.writeFile('./data/fortunes.json', JSON.stringify(new_fortunes), 
    err => console.log(err));
   //this override the fotunes.json file with the new object

    res.json(new_fortunes)
})

app.put('/fortunes/:id', (req,res)=>{
    const {id} = req.params;
    const {message, lucky_number, spirit_animal} = req.body;

    const old_fortune = fortunes.find(f =>f.id == id);
    old_fortune.message = message;
    old_fortune.lucky_number = lucky_number;
    old_fortune.spirit_animal = spirit_animal;

    fs.writeFile('./data/fortunes.json', JSON.stringify(fortunes),
        err => console.log(err));

    res.json(fortunes);
})

module.exports = app;