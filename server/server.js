//import express from 'express';
var express = require("express");
var bodyParser = require('body-parser');
var cors = require('cors')
const app = express();
const mysql = require('mysql');
const path = require('path');
app.use(cors());

const con = mysql.createConnection({
  host: "localhost",
  database:"election",
  user: "root",
  password: "root"
});

con.connect(function(err) {
  if (err) {
  	// Error connecting to DB
            res.set('Content-Type', 'application/json');
            res.status(500).send(JSON.stringify({
                status: 500,
                message: "Error connecting to DB",
                detailed_message: err.message
            }));
           // return;
  }
  console.log("Connected!");
});

module.exports = con;

// Use body parser to parse JSON body
app.use(bodyParser.json());
app.listen(5800, () => console.log("Express server running on port 5800"));

app.get('/state', (req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  	//next();

con.query("Select * from election.state", function (err, result) {

                if(err) {
                    res.set('Content-Type', 'application/json');
                	res.status(500).send(JSON.stringify({
                    status: 500,
                    message: "Error getting the user profile",
                    detailed_message: err.message
                }));
                   // result(null, err);
                }
                else{
                	res.contentType('application/json').status(200);
               		 res.send(JSON.stringify(result));
                	console.log(result);
                  	
                }
            });

});

app.get('/state_constituency', (req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
con.query("Select * from election.state_constituency", function (err, result) {

                if(err) {
                    res.set('Content-Type', 'application/json');
                	res.status(500).send(JSON.stringify({
                    status: 500,
                    message: "Error getting the user profile",
                    detailed_message: err.message
                }));
                   // result(null, err);
                }
                else{
                	res.contentType('application/json').status(200);
               		 res.send(JSON.stringify(result));
                	console.log(result);
                  	
                }
            });
});


app.get('/candidatedetail', (req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
con.query("Select * from election.candidatedetail", function (err, result) {

                if(err) {
                    res.set('Content-Type', 'application/json');
                	res.status(500).send(JSON.stringify({
                    status: 500,
                    message: "Error getting the user profile",
                    detailed_message: err.message
                }));
                   // result(null, err);
                }
                else{
                	res.contentType('application/json').status(200);
               		 res.send(JSON.stringify(result));
                	console.log(result);
                  	
                }
            });
});


app.get('/question', (req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
con.query("Select * from election.question", function (err, result) {

                if(err) {
                    res.set('Content-Type', 'application/json');
                	res.status(500).send(JSON.stringify({
                    status: 500,
                    message: "Error getting the user profile",
                    detailed_message: err.message
                }));
                   // result(null, err);
                }
                else{
                	res.contentType('application/json').status(200);
               		 res.send(JSON.stringify(result));
                	console.log(result);
                  	
                }
            });
});


app.get('/expenditure', (req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
con.query("Select * from election.expenditure", function (err, result) {

                if(err) {
                    res.set('Content-Type', 'application/json');
                	res.status(500).send(JSON.stringify({
                    status: 500,
                    message: "Error getting the user profile",
                    detailed_message: err.message
                }));
                   // result(null, err);
                }
                else{
                	res.contentType('application/json').status(200);
               		 res.send(JSON.stringify(result));
                	console.log(result);
                  	
                }
            });
});

app.get('/indicators', (req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
con.query("Select * from election.indicators", function (err, result) {

                if(err) {
                    res.set('Content-Type', 'application/json');
                	res.status(500).send(JSON.stringify({
                    status: 500,
                    message: "Error getting the user profile",
                    detailed_message: err.message
                }));
                   // result(null, err);
                }
                else{
                	res.contentType('application/json').status(200);
               		 res.send(JSON.stringify(result));
                	console.log(result);
                  	
                }
            });
});