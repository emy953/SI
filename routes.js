const express = require('express');
const { get } = require('./request');
const router = express.Router();

router.get('/', get);

module.exports = router;