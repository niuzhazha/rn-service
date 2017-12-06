var Sequelize = require('sequelize');
var sequelize = new Sequelize(
  'reactnativedb',    //数据库名
  'root',             //用户名
  '123456',           //密码
  {
      'dialect': 'mysql',
      'host': 'localhost',
      'port': 3306,
      'dialectOptions': {
        'charset': 'utf8mb4',
        'collate': 'utf8mb4_unicode_ci',
        'supportBigNumbers': true,
        'bigNumberStrings': true
      }
  }
);

module.exports = sequelize;