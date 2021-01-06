const sequelize = require('./config/connection');
const express = require('express');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const routes = require('./controllers');
const exphbs = require('express-handlebars');
var hbs = exphbs.create({ /* config */ });
const path = require('path');

const {v4 : uuidv4} = require('uuid')


var app = express();
const PORT = process.env.PORT || 4789;

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

app.set('view engine', 'handlebars');
app.engine('handlebars', hbs.engine);

app.use(express.json());//function to call the inforamtion to the body req. 
app.use(express.urlencoded({ extended: true })); //using the app to express acess to the body requirements (req) function 
// app.use(express.static('public'));
app.use(express.static(path.join(__dirname, "public"))); //using express.static and app.use to pull all the files from the public folder to use mostly from the css styling. 

app.use(routes);

// app.get('/', (req, res) => {
//   res.render('main-container');
//   console.log("hello it worked");
// });

app.get("/", function (req, res){
	res.render('main-container');
  console.log("hello it worked");
}); // express reaching out to the index.js to send a file after the response 

app.get('/home', function(req, res) {
  console.log("it worked the app.get /home function")
	if (req.session.logged_in) {
		res.send('Welcome back, ' + req.session.logged_in + '!');
	} else {
		res.send('Please login to view this page!');
	}
	res.end();
});

app.post('/auth', function(request, response) {
	var username = request.body.username;
	var password = request.body.password;
	if (username && password) {
		// connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			if (request.length > 0) {
				request.session.logged_in = true;
				request.session.username = username;
				response.redirect('/home');
			} else {
        console.log("Incorrect Username and/or Password!")
        response.send('Incorrect Username and/or Password!');
        
			}			
			response.end();
		};
  })

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening http://localhost:' + PORT));
  });
