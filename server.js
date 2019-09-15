const express = require('express');
const exphbs = require('express-handlebars')
const app = express();
const port = 3000;


//Setup the view engine - expresss-handelbars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.get('/', (req, res) => {
  res.render('home');
});

<<<<<<< HEAD
app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

=======
>>>>>>> parent of b9be639... install nodemod
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});