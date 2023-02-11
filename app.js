const express = require('express');
const bodyParser = require('body-parser');
const requst= require('request');


const app = express();



app.listen(4000, function(){
    console.log("Server is running on port 4000");
} );