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

//-----------------------------GET ALL FORTUNES------------------------------
app.get('/fortunes', (req, res) => {
    console.log("data fetch");
    res.json(fortunes)
    //Showing the json data from fortunes with res.json(MyVariableThatHasJsonData)

});

//-------------------------GET A RANDOM FORTUNE -----------------------------

//get a random fortune cookie
app.get('/fortunes/random', (req,res) => {
    console.log("requesting random fortune");

    const random_index = Math.floor(Math.random() * fortunes.length);
    const r_fortune = fortunes[random_index]
   
    res.json(r_fortune);
   
});

//-------------------------GET FORTUNE BY ID-----------------------------------

app.get('/fortunes/:id', (req,res)=> {
    //console.log(req.params);
    console.log("single object data fetch");
   res.json(fortunes.find(f => f.id == req.params.id)) ;
   //res.json is the response. inside we have fortunes.find 
   // which searches and returns 1 value, the condition of the searching
   //is inside the parenthesis , check each fortune cookie and return
   //the one whichs id is the same as req.params.id
   
});

//-------------------------POST A FORTUNE----------------------------------------

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
   console.log("Successfully created")
    res.json(new_fortunes)
    
})

//--------------------------PUT/EDIT A FORTUNE------------------------------------

app.put('/fortunes/:id', (req,res)=>{
    const {id} = req.params;
    const {message, lucky_number, spirit_animal} = req.body;

    const old_fortune = fortunes.find(f =>f.id == id);
    if(message) old_fortune.message = message;
    if(lucky_number) old_fortune.lucky_number = lucky_number;
    if(spirit_animal) old_fortune.spirit_animal = spirit_animal;

    fs.writeFile('./data/fortunes.json', JSON.stringify(fortunes),
        err => console.log(err));

        console.log("Updated")
    res.json(fortunes);
   
})

//----------------------------DELETE A FORTUNE----------------------------

app.delete('/fortunes/:id', (req,res) => {

    const { id } = req.params;
    const new_fortunes = fortunes.filter(f => f.id != id);

    fs.writeFile('./data/fortunes.json', JSON.stringify(new_fortunes),
    err => console.log(err));

    console.log("Successfully deleted")
    res.json(new_fortunes);
  
})

//-------------------------------------------------------------------------

module.exports = app;