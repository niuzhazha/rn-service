//引入数据库Message模块
var userModel = require('../Model/User');

const getAllUsers = async function () {
	return await userModel.findAll({
		attributes: ['id', 'username', 'gender', 'age']
	})
}

module.exports = {
	getAllUsers
}