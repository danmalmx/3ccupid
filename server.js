const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
//Load modul
const Message = require('./Models/message');

const app = express();

//Load key file
const keys = require('./config/keys')

//Environment variable for port
const port = process.env.PORT || 3000;

//Body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Connect to MongoDb
mongoose.connect(keys.MongoDb,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log('Connected to database');
  }).catch((err) => {
    console.log(err);
  })

//Setup the view engine - expresss-handelbars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.get('/', (req, res) => {
  res.render('home', {
    title: 'Home'
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About'
  });
});

app.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Contact'
  });
});

app.post('/contactUs', (req, res) => {
  console.log(req.body);
  const newMessage = {
    fullname: req.body.fullname,
    email: req.body.email,
    message: req.body.message,
    date: new Date()
  }
  new Message(newMessage).save((err, message) => {
    if (err) {
      throw err;
    } else {
      Message.find({}).then((messages) => {
        if (message) {
          res.render('newmessage', {
            title: 'Sent',
            messages: messages
          });
        } else {
          res.render('nomessage', {
            title: 'Not found'
          }) 
        }
      })
    }
  });
})

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});