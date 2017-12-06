//引入数据库Message模块
var userModel = require('../Model/User');

// 查询所有用户信息
const getAllUsers = async function () {
	return await userModel.findAll({
		attributes: ['id', 'username', 'gender', 'age']
	})
}

// 通过id查询用户信息
const getUserById = async function (id) {
	return await userModel.findOne({ 
		where: { 
			id: id 
		},
		attributes: ['id', 'username', 'gender', 'age']
	})
}

module.exports = {
	getAllUsers,
	getUserById
}