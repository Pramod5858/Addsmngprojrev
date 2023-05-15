const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
BASE_URL = http://localhost:5500
const cors = require('cors');
const BASE_URL = process.env.BASE_URL;


const routes = require('./Routes/index');
const { response, request } = require('express');

const port = process.env.PORT || 5500;
//const hostname = 'localhost';
const DATABASE = 'mongodb+srv://user_12:GjKd5OpYeJWi3oEr@cluster0.fakhrz8.mongodb.net/testing1?retryWrites=true&w=majority';

/* 
Database :- testing1 
Collection Name :- testing1 , addresses
Username:-user_12
Password:-GjKd5OpYeJWi3oEr
Link:- mongodb+srv://user_12:<password>@cluster0.fakhrz8.mongodb.net/?retryWrites=true&w=majority   :-- Actual Code running now

const AtlasDbUrl = 'mongodb+srv://user_12:GjKd5OpYeJWi3oEr@cluster0.fakhrz8.mongodb.net/testing1?retryWrites=true&w=majority';
*/

// new link manual:- "mongodb+srv://user_31:y9iJ2iqaZAfkUA18@cluster0.uuiqh8m.mongodb.net/user_31?retryWrites=true&w=majority"

/* 
Database :- AddMngProj
Collection Name :- 
Username:- user_31
Password:-y9iJ2iqaZAfkUA18
Link:- mongodb+srv://user_31:<password>@cluster0.uuiqh8m.mongodb.net/?retryWrites=true&w=majority
*/



const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/', routes);

app.listen(port, BASE_URL, () => {
    console.log(`Connection Succesfully to ${BASE_URL}:${port}`)
})

mongoose.set("strictQuery", false);
mongoose.connect(process.env.DATABASE, {
    UseNewUrlParser: true, UseUnifiedTopology: true
}).then(data=>{
    console.log("DB has been connected");
}).catch(e=>console.log(e))
