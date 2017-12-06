var Sequelize = require('sequelize');
var sequelize = require('../utils/db.config');
//定义表的模型
const User = sequelize.define('user', {
	id: { //自增长id,主键,整形
    type:Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
		comment: '自增长id'
  },
	username: { //用户姓名
		type: Sequelize.STRING(32),
		allowNull: false,
		comment: '用户姓名'
	},
	password: { //用户密码
		type: Sequelize.STRING(20),
		allowNull: false,
		comment: '用户密码'
	},
	gender: { //用户性别
		type: Sequelize.INTEGER(1),
		comment: '0:男 1：女'
	},
	age: { //用户年龄
		type: Sequelize.INTEGER,
		comment: '用户年龄'
	}
}, {
	// 不要添加时间戳属性 (updatedAt, createdAt)
  timestamps: false,
})

User.sync(); //创建表

// 查找用户名为admin的用户信息，如果没有找到，则添加一个名为admin的用户，默认密码为6个0
User
  .findOrCreate({
  	where: {
  		username: 'admin'
  	}, 
  	defaults: {
  		password: '000000',
  	}
  })
  .spread(function(user, created) {
    console.log(user.get({
      plain: true
    }))
    console.log(created)
  })
module.exports = User;