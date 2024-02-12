//---------------DEPENDENCIES------------

npm init -y 

npm i nodemon --save-dev

npm i express --save

configure scripts on package.json --> scripts:
    "start": "node index",
    "dev": "nodemon index"

npm run dev   

npm i body-parser --save


//--------------------CMD-------------------
CURL request matching Endpoints:

-POST METHOD to create a fortune cookie:
(For people who has very few dififculties on life so want to waste time fighting the computer using complex systems like linux and Mac)
curl -H "Content-Type: application/json" -X POST -d '{"message": "Hello", "lucky_number": 5, "spirit_animal": "Dog"}' http://localhost:3000/fortunes

(For people who already have problems in life and don't want anyone touching the balls at work (Windows))
Invoke-WebRequest -Uri http://localhost:3000/fortunes -Method POST -ContentType "application/json" -Body '{"message": "Hello", "lucky_number": 5, "spirit_animal": "Dog"}'


//-----------------FOR POSTMAN /INSOMNIA--------------------

1-GET:
    -Create a new request using GET type, and write this url: http://localhost:3000/fortunes
        (that should give you all the fortunes cookies)
2-POST: 
    -Create a new request using POST type, and write this url: http://localhost:3000/fortunes
    -Select on the body of the request: JSON and write the an object like this:
        {
	        "message": "Success awaits you2",
	        "lucky_number": 16,
	        "spirit_animal": "giraffe"
        } 
    -Select "Content-type: Application/json" on headers.

3-PUT:    
    -Create a new request using PUT type, and write this url: http://localhost:3000/fortunes/id
    (Change ID for the numberid of the fortune cookie you want to edit)
    -Select on the body of the request: JSON and write the an object like this:
        {
	        "message": "Success awaits you2",
	        "lucky_number": 16,
	        "spirit_animal": "giraffe"
        } 
    -Select "Content-type: Application/json" on headers.  

 4-DELETE:   
    - -Create a new request using DELETE type, and write this url: http://localhost:3000/fortunes/id
     (Change ID for the numberid of the fortune cookie you want to DELETE)     

//----------------------------NOTES-----------------------------

-Moreover of looking the results on postman/insomnia we can also watch some console.log on the console
    to confirm our methods work or not if they show errors.