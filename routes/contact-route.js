var express = require('express');
var router = express.Router();

// Kontaktsidan skall visa alla kontor med adress samt vilken personal med kontaktuppgifter arbetar på det kontoret.

router.get('/', (req, res) => {
  let sql = `SELECT * FROM offices`;
  let sqlEmp = `SELECT * FROM employees`;

  // SELECT offices.addressLine1, employees.firstName
  // FROM offices INNER JOIN employees
  // ON offices.officeCode = employees.officeCode

  req.app.locals.con.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    }
    const offices = result;

    req.app.locals.con.query(sqlEmp, (err, result) => {
      if (err) {
        console.log(err);
      }

      const employees = result;
      const data = [offices, employees];

      res.render('contact', { title: 'Contact', data });
    });
  });
});

router.get('/:id', (req, res) => {
  let sql = `SELECT * FROM employees WHERE officeCode='${req.params.id}'`;

  req.app.locals.con.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    }

    let employees = result;
    console.log('Result', result);
    res.render('contact', { title: 'Contact', employees });
  });
});

module.exports = router;
