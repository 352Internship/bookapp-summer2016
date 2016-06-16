'use strict';

var express = require('express');
var controller = require('./transaction.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.get('/me/all', auth.isAuthenticated(), controller.getAllUsers);
router.get('/me/count', auth.isAuthenticated(), controller.getAllCount);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;
