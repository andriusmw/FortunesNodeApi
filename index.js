const express = require('express');
const fortunes = require('./data/fortunes.json')
const port = 3000;
const app = express();


//ENDPOINTS
app.get('/fortunes', (req, res) => {
    res.json(fortunes)
    //Showing the json data from fortunes with res.json(MyVariableThatHasJsonData)
});

app.listen(port, () => console.log(`listening on port ${port}`));