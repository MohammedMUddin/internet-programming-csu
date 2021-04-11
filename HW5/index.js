// importing packages
const express  = require('express')
const mysql  = require('mysql')

// initializing express object 
const app = express()

// decoding data received from html form
app.use(express.urlencoded())

// establishing connection
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'hw5'
  });  
connection.connect()

//grabbing form input and searching database for inputted data
app.post('/', function(req, res) {
  var sqlQuery =  `
                  SELECT student_name 
                  FROM course 
                  WHERE student_name = '${req.body.query}'`
  connection.query(sqlQuery, function (error, results, fields) {
    if (error) throw error
    res.send('You sent the name "' + results[0].student_name + '".')
  });
});

// check to see whether server running or not
app.listen('3000', () => {
    console.log('Server is running on 3000...')
})

/*
TODO
1. Make Search query through database
2. insert Input XML into Database
3. Restructure output to html or ejs?
*/