/*jshint esversion: 6*/
const express = require('express');
const morgan     = require('morgan');
const expressLayouts = require('express-ejs-layouts');

// We create our own server named app
// Express server handling requests and responses
const app = express();

app.use(express.static('public'));
app.use(expressLayouts);

app.set('layout', 'layouts/main_layout');
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(morgan('dev'));

// our first Route
app.get('/', (request, response) => {
  response.render('index');
  return "hola";
});

let controller = (req, res) =>{
  let data = {
    name: req.params.username,
    passwd: req.params.passwd,
    tipo: req.query.tipo
  };
  res.render('sucess', data);
}

app.post('/submit-form2', controller);

//Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});
