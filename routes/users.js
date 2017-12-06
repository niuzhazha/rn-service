var express = require('express');
var router = express.Router();
var userController = require('../Controller/User')

/* GET users listing. */
router.get('/', function(req, res, next) {
	userController.getAllUsers().then(users => {
		res.send({
	  	message: 'get user success',
	  	status: 1,
	  	data: users
	  });
	}).catch(e => {
		res.send({
	  	message: 'get user error',
	  	status: 0
	  });
	})
});

module.exports = router;
