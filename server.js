//npm i sequelize
//npm init -y
//npm i
//npm i mysql2
//npm install dotenv
//npm install express
//npm install connect-session-sequelize
//npm install express-session
//npm install exphbs
//npm install bcrypt
//npm install handlebars
//npm install express-handlebars
//npm install seed

const sequelize = require('./config/connection');
const express = require('express');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const routes = require('./controllers');
const exphbs = require('express-handlebars');
var hbs = exphbs.create({ /* config */ });
const path = require('path');

// const formatTime = require('./utils/helper');


var app = express();
const PORT = process.env.PORT || 1598;

//adding in a sessions in mysql to show how many times the user logins
const user = {
  secret: 'myPassword',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

//runing the function above. 
app.use(session(user));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);
// app.get('/', (req, res) =>
// if)

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening http://localhost:' + PORT));
  });
