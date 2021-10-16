if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express');
const cors = require('cors');
const flash = require('express-flash');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const registerRouter = require('./routes/register');
const productsRouter = require('./routes/products');
const loginRouter = require('./routes/login');
const logoutRouter = require('./routes/logout');

const initializePassport = require('./config/passport');
const passport = require('passport');

initializePassport();

const app = express();

// config
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(flash());
app.use(session({
  name: 'currentsession',
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 21600000,
    sameSite: false,
    httpOnly: false,
  }
}));
app.use(passport.initialize());
app.use(passport.session());

// routes
app.use('/register', registerRouter);
app.use('/products', productsRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);

app.get('/', (req, res) => {
  return res.status(200).send({'message': 'first endpoint is working!'})
});

// start server
app.listen(process.env.PORT || 80, () => {
  console.log('Server listening')
});