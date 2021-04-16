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
  var sqlQuery = `SELECT * 
                  FROM cd_catalog 
                  WHERE COUNTRY = '${req.body.query}'`
  connection.query(sqlQuery, function (error, results, fields) {
    // this is not working
    if (error) {
      res.send('404 Not Found!')
      throw error
    }
    console.log(results)
    // res.send('You sent the name "' + results[0].country + '".')
  });
});

// check to see whether server running or not
app.listen('3000', () => {
    console.log('Server is running on 3000...')
})



/*
TODO
3. front end -- serverside rendering
----------------------------------------
COMPLTED
1. Make Search query through database
2. insert Input XML into Database
*/