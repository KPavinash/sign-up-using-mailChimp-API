const express = require('express');
const bodyParser = require('body-parser');
const request= require('request');
const https= require('https');

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));



  app.get("/", function(req,res){
    res.sendFile(__dirname+"/signup.html")

  })

  app.post("/", function(req,res){
    const firstname = req.body.fName;
    const lastname = req.body.lName;
    const email = req.body.email;

    

    var data={
      members: [{
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstname,
          LNAME: lastname
        }

      }]  }
      var jsondata = JSON.stringify(data);
      
      https.request(url, options, function(response) {
      
      
      
      });


app.listen(4000, function(){
    console.log("Server is running on port 4000");
} );