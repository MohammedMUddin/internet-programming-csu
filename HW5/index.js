const express  = require('express')
const mysql  = require('mysql')

const app = express()

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
   

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen('3000', () => {
    console.log('Server is running on 3000...')
})

