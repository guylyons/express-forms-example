var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');

var app = express();

// Some global variables for our app to work with
app.locals.title = "Express Simple Forms";

// This is our template engine, current set to use Handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// This is our root route where the response
// is set to render our home template
app.get('/', function (req, res) {
  res.render('home');
});

app.listen(3000, function(err) {
  if(err) {
    console.log(err);
  } else {
    console.log("Listening on port 3000");
  }
});
