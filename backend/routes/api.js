const express = require('express');

const router = express();

router.get('/', function (req, res) {
  res.status(200).send('Welcome');
});

module.exports = router;