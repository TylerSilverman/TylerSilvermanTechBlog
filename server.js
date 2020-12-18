//installed
//npm init -y
//npm install express
//npm i sequelize
//npm i mysql2
//npm install handlebars

//npm install express-session
//npm install bcrypt

//npm install dotenv
//npm install connect-session-sequelize
//npm install exphbs
//npm install
//npm install --save-dev eslint-plugin-prettier
//npm install --save-dev eslint-config-prettier

const express = require('express');
const session = require('express-session');
const routes = require('./controllers');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const path = require('path');
const hbs = exphbs.create({});


// Import the custom helper methods
const formatTime = require('./utils/helper');

var app = express();
const PORT = process.env.PORT || 3000;

//set up sessions and the secrets puts what is made to be for you. keeps track of how many times you login and out of the site. 
const user = {
  secret: 'myPassword',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(user));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening http://localhost:' + PORT));
});
