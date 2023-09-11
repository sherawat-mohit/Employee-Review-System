// importing required packages
const express = require('express');

// setting up express
const router = express.Router();
console.log('router reloaded');

// middleware
router.use('/', require('./users'));
router.use('/review', require('./reviews'));

module.exports = router;
