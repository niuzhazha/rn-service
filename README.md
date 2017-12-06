# rn-service

1. cd rn-service
2. npm install
3. npm start

目录结构
rn-service
	|-- bin (express-generator 自动生成)
	|-- Controller (操作数据库的一些方法，包括增删改查)
		|-- User.js
	|-- Model (数据模型)
		|-- User.js
	|-- node_modules
	|-- public (express-generator 自动生成)
	|-- routes (express-generator 自动生成)
	|-- utils
	|-- views (express-generator 自动生成)
	|-- .gitignore
	|-- app.js (express-generator 自动生成)
	|-- package.json (express-generator 自动生成)
	|-- README.md




接口访问
	users
		1. 获取所有用户信息 http://localhost:3000/users/
		2. 通过id获取单个用户信息 http://localhost:3000/users/1 （1就代表了id）
