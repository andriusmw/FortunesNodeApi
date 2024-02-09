//---------------DEPENDENCIES------------

npm init -y 

npm i nodemon --save-dev

npm i express --save

configure scripts on package.json --> scripts:
    "start": "node index",
    "dev": "nodemon index"

npm run dev   

npm i body-parser --save


//---------------------------------------
CURL request matching Endpoints:

-POST METHOD to create a fortune cookie:
(For people who has very few dififculties on life so want to waste time fighting the computer using complex systems like linux and Mac)
curl -H "Content-Type: application/json" -X POST -d '{"message": "Hello", "lucky_number": 5, "spirit_animal": "Dog"}' http://localhost:3000/fortunes

(For people who already have problems in life and don't want anyone touching the balls at work (Windows))
Invoke-WebRequest -Uri http://localhost:3000/fortunes -Method POST -ContentType "application/json" -Body '{"message": "Hello", "lucky_number": 5, "spirit_animal": "Dog"}'
