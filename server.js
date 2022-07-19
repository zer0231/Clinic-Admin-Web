const express = require('express');
const routes = require('./Routes/authRoutes');
const app = express();	
const port = 2020;

app.use(express.static('public'));

app.use(express.json()); //to understand the request received as json from POST
	
//setting view engine
app.set('view engine','ejs');

//listening server
app.listen(port,
	console.log("listening to port "+port));

//using routes
app.use(routes);

  
