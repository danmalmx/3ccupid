const express = require('express');
const exphbs = require('express-handlebars')
const app = express();
const port = 3000;

//Setup the view engine - expresss-handelbars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.get('/', (req, res) => {
  res.send('Hello ATCCs!')
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});