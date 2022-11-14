const express = require('express');
const router = express.Router();

const user = require('./user');
const list = require('./list');

router.use('/users', user);
router.use('/lists', list);

module.exports = router;