const express = require('express');
const router = express.Router();

const user = require('./user');
const list = require('./list');

router.use('/user', user);
router.use('/list', list);

module.exports = router;