const express = require('express');
const app = express();
const indexRouter = require('./routes/index-route');
const productsRouter = require('./routes/products-route');
const contactRouter = require('./routes/contact-route');

const path = require('path');

const mysql = require('mysql2');
const PORT = process.env.PORT || 3000;

app.locals.con = mysql.createConnection({
  host: 'localhost',
  port: '8889',
  user: 'nathaliepe',
  password: 'yxkexT8ok86NJsKw',
  database: 'classicmodels',
});

app.use(express.json());
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));

app.use('/', indexRouter);
app.use('/products', productsRouter);
app.use('/contact', contactRouter);

// register view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
module.exports = app;
