//-------------------------------------------------------//
//-------------------------------------------------------//
// Author:Rodolfo Machon
// Company:WebSoft, SA de CV
// File Name: /bsb/db.js
// Created: 2019-11-12
// Updates: 2019-11-12,2020-01-12,2021-01-21
// Copyright - All Rights Reserved
//-------------------------------------------------------//
//-------------------------------------------------------//
//
const mariadb = require('mariadb');
//-------------------------------------------------------//
// LEVEL 1
const pool = mariadb.createPool({
	host:     'localhost',
	port:      '4406',
	database: 'MundoCeramico',     
	user:     'root', 
	password: 'admin',
	connectionLimit: 10
});
module.exports = pool;
//-------------------------------------------------------//
// LEVEL 2
