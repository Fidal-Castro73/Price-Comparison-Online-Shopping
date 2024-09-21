const express = require('express');
const mysql = require('mysql2');

// Initialize express app
const app = express(); // Make sure this line is included to initialize the app

// Create MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123123', // Update with your MySQL password
  database: 'product', // Update with your database name
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL Connected...');
});

// Serve static files from the public folder (e.g., index.html, styles.css)
app.use(express.static('public'));

// Search route to fetch product data from both Amazon and Flipkart tables
app.get('/search', (req, res) => {
  const query = req.query.query;

  // SQL queries to get the product info from amazon and flipkart tables
  const amazonSql = `SELECT pdt_name, pdt_price, pdt_rat FROM amazon WHERE pdt_name LIKE ?`;
  const flipkartSql = `SELECT pdt_name, pdt_price, pdt_rat FROM flipkart WHERE pdt_name LIKE ?`;

  const searchTerm = `%${query}%`;

  // Execute Amazon query
  db.query(amazonSql, [searchTerm], (err, amazonResults) => {
    if (err) {
      console.error('Error occurred while fetching data from Amazon:', err);
      return res.status(500).send('Error occurred while fetching data from Amazon');
    }

    // Execute Flipkart query
    db.query(flipkartSql, [searchTerm], (err, flipkartResults) => {
      if (err) {
        console.error('Error occurred while fetching data from Flipkart:', err);
        return res.status(500).send('Error occurred while fetching data from Flipkart');
      }

      // Display Amazon results in terminal
      console.log('Amazon Results:');
      amazonResults.forEach(result => {
        console.log(`Product: ${result.pdt_name}, Price: ${result.pdt_price}, Rating: ${result.pdt_rat}`);
      });

      // Display Flipkart results in terminal
      console.log('Flipkart Results:');
      flipkartResults.forEach(result => {
        console.log(`Product: ${result.pdt_name}, Price: ${result.pdt_price}, Rating: ${result.pdt_rat}`);
      });

      // Send a basic confirmation response to the user
      res.send('Search results logged in the terminal.');
    });
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
