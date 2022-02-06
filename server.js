const dotenv = require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 5000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", "./src/views");
// define a root route

/*
app.get('/', (req, res) => {
  res.send("Hello World!!!!!!!");
});

*/
// Require employee routes
const homeRoutes = require('./src/routes/home.routes');
const employeeRoutes = require('./src/routes/employee.routes');
const loginRoutes = require('./src/routes/login.routes');
// using as middleware
app.use('/', homeRoutes);
app.use('/api/v1/employees', employeeRoutes);
app.use('/login', loginRoutes);
// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});