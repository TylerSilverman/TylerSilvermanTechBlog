const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
var hbs = exphbs.create({ /* config */ });


// const routes = require('./controllers');
const sequelize = require('./config/connection');

// Import the custom helper methods
// const formatTime = require('./utils/formatTime');

var app = express();
const PORT = process.env.PORT || 3000;

//set up sessions and the secrets puts what is made to be for you.
// const session = {
//   secret: "Scret",
//   resave: false,
//   saveUnintialized: false,
// }

// app.use(session(session));

// custom helper methods
// const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view homepage', 'handlebars');

// app.get('/', function (req, res) {
//   res.render('home');
// });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening http://localhost:' + PORT));
});