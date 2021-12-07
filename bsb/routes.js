//-------------------------------------------------------//
// Author:Rodolfo Machon
// Company:WebSoft, SA de CV
// File Name: /bsb/routes.js
// Created: 2019-11-12,2021-01-15
// Updates: 2019-11-12,2021-01-22
// Copyright - All Rights Reserved
//-------------------------------------------------------//
//-------------------------------------------------------//

const routes = require('express').Router();
const portal = require("./portal.js");
const log    = require("./log.js");
const session = require("./session.js");
const collection = require("./collection.js");


routes.get('/', (req, res) => { portal.option(req,res); } );
routes.get('/option', (req, res) => { portal.option(req,res) } );
routes.post('/login', (req, res) => { log.in(req,res) } );
routes.post('/logout', (req, res) => { log.out(req,res) } );
routes.post('/captcha', (req, res) => { log.captcha(req,res) } );
routes.post('/crypt', (req, res) => { log.crypt(req,res) } );
routes.post('/session', (req, res) => { session.data(req,res) } );
routes.get('/collection.getCatalog', (req, res) => {collection.getCatalog(req,res)});

module.exports = routes;

//----------------------------------------------------------//

