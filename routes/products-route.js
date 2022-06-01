var express = require('express');
var router = express.Router();

// Produktsidan skall visa samtliga produktkategorier. Klickar besökaren på en kategori så skall samtliga produkter från den kategorin visas.

router.get('/', (req, res) => {
  let sql = `SELECT * FROM productlines`;

  req.app.locals.con.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    }

    let productlines = result;
    res.render('categories', { title: 'Categories', productlines });
  });
});

router.get('/:id', (req, res) => {
  let sql = `SELECT * FROM products WHERE productLine='${req.params.id}'`;

  req.app.locals.con.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    }

    let products = result;
    console.log('Result', result);
    res.render('products', { title: 'Products', products });
  });
});

module.exports = router;
