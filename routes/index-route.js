var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  let getProductLine = `SELECT  productName FROM products WHERE productLine='Planes'`;
  req.app.locals.con.query(getProductLine, (err, result) => {
    if (err) {
      console.log(err);
    }

    console.log('Result', result);
    res.render('index', { title: 'Home' });
  });
});

module.exports = router;
