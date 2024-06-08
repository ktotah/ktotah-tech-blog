// Import necessary modules and dependencies
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const path = require('path');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

// Import Sequelize connection
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

// Configure session with session store
const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000, // 5 minutes
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

// Use session middleware
app.use(session(sess));

// Set Handlebars as the template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Middleware to parse JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Use routes defined in the controllers directory
app.use(routes);

// Sync Sequelize models to the database and start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});
