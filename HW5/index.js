const express  = require('express')
const mysql  = require('mysql')

const app = express()
app.use(express.urlencoded()); 

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'hw5'
  });
   
connection.connect();

connection.query('SELECT * FROM `course`', function (error, results, fields) {
    if (error) throw error;
    console.log(results);
  });
   

app.get('/hello', (req, res) => {
    res.send('Hello World!')
})

app.post('/myaction', function(req, res) {
  res.send('You sent the name "' + req.body.query + '".');
});

app.listen('3000', () => {
    console.log('Server is running on 3000...')
})

/*
TODO
1. Make Search query through database
2. Make Input XML into Database
*/