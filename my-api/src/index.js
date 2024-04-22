const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const port = process.env.PORT || 8080;

const app = express()
  .use(cors())
  .use(bodyParser.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'Angular',
  password: 'AshMeh123',
  database: 'Angular'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database');
});

function createRouter(db) {
  const router = express.Router();

  // POST route to insert data into the database
  router.post('/user_data', (req, res) => {
    const {username, email, DOB, phone_num, address, pass, confirm_pass} = req.body;

    // Format date of birth if necessary
    // const formattedDOB = formatDOB(Date_of_birth); // Implement formatDOB function as needed

    const sql = `INSERT INTO user_data (username, email, DOB, phone_num, address, pass, confirm_pass) 
                  VALUES (?, ?, ?, ?, ?, ?, ?)`;
    const values = [username, email, DOB, phone_num, address, pass, confirm_pass];

    db.query(sql, values, (error, results, fields) => {
      if (error) {
        console.error('Error inserting user into database:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      res.status(201).json({ message: 'User created successfully' });
    });
  });
// post order_data 
  router.post('/user_data', (req, res) => {
    const {username, email, DOB, phone_num, address, pass, confirm_pass} = req.body;

    // Format date of birth if necessary
    // const formattedDOB = formatDOB(Date_of_birth); // Implement formatDOB function as needed

    const sql = `INSERT INTO user_data (username, email, DOB, phone_num, address, pass, confirm_pass) 
                  VALUES (?, ?, ?, ?, ?, ?, ?)`;
    const values = [username, email, DOB, phone_num, address, pass, confirm_pass];

    db.query(sql, values, (error, results, fields) => {
      if (error) {
        console.error('Error inserting user into database:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      res.status(201).json({ message: 'User created successfully' });
    });
  });
  // GET route to fetch data by mobile number
  router.get('/user_data', (req, res) => {
    const username = req.query.username;
    const pass = req.query.pass;
    const sql = `SELECT * FROM user_data WHERE username = ? and pass = ?`;
    db.query(sql, [username,pass], (error, results, fields) => {
      if (error) {
        console.error('Error fetching user data from database:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      if (results.length === 0) {
        return res.status(404).json({ error: 'Data not found' });
      }
      res.json(results);
    });
    const sql1 = `SELECT * FROM user_data WHERE username = ? `;
    db.query(sql1, [username], (error, results, fields) => {
      if (error) {
        console.error('Error fetching user data from database:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      if (results.length === 0) {
        return res.status(404).json({ error: 'Data not found' });
      }
      res.json(results);
    });
  });
  return router;
}
app.use(createRouter(connection));
app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
// create table besant_form (id int,name varchar(50),mobile bigint,emailid varchar(50),DOB date,age int,physics int,chemistry int,mathematics int,total int,avg_percentage float,primary key(id));