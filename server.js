require('dotenv').config(); // Load environment variables

const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sequelize = require('./config/connection');
const routes = require('./controllers');

const app = express();
const PORT = process.env.PORT || 3000;

const hbs = exphbs.create({ defaultLayout: 'main', layoutsDir: path.join(__dirname, 'views', 'layouts') });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(session({
  secret: process.env.SESSION_SECRET || 'fallbacksecret', // Fallback for development
  store: new SequelizeStore({ db: sequelize }),
  resave: false,
  saveUninitialized: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
});
