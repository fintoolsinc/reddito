//-------------------------------------------------------//
// Author:Rodolfo Machon
// Company:WebSoft, SA de CV
// Nombre del archivo: /bsb/record.js
// Created: 2019-11-12
// Updates: 2019-11-12
// Copyright - All Rights Reserved
//-------------------------------------------------------//
//-------------------------------------------------------//
const db =  require('./db.js');
const fs = require('fs');
const { transform } = require('camaro');
//-------------------------------------------------------//
// LEVEL 1
/*
this.pair = function(req , res){
    let clase = req.query.clase;
    let key   = req.query.key;
    let val   = req.query.val;
    (async function main(){
        try {
            let map   = await getMap(clase);
            let simple  = await getSimple(map,key,val);
            res.status(200).json(simple);
        } catch (err) {
            console.log(err.message);
        }

    })();
}
this.get = function(req , res){
    let clase = req.query.clase;
    let id    = req.query.id;
    let key   = req.query.key;
    let fds   = req.query.fds;
    (async function main(){
        try {        
            let map   = await getMap(clase);
            let collection  = await getCollection(map,key,id,fds);
            res.status(200).json(collection);
        } catch (err) {
            console.log(err.message);
        }
    })();
}
this.getQuery = function(req, res){
    let sql = req.query.sql;
    (async function main(){
        try {        
            let data  = await getQuery(sql);
            res.status(200).json(data);
        } catch (err) {
            console.log(err.message);
        }
    })();
}
*/
this.getCatalog = function(req, res){
    let sql = req.query.sql;
    (async function main(){
        try {        
            let data  = await getCatalog(sql);
            res.status(200).json(data);
        } catch (err) {
            console.log(err.message);
        }
    })();
}
/*
this.count = function(req,res){
    let clase = req.query.clase;
    let keys  = req.query.keys;
    let vals  = req.query.vals;
    (async function main(){
        try {
            let map   = await getMap(clase);
            let simple  = await getCount(map,keys,vals);
            res.status(200).json(simple);
        } catch (err) {
            console.log(err.message);
        }

    })();
}
this.pairFiltered = function(req , res){
    let clase = req.query.clase;
    let key   = req.query.key;
    let val   = req.query.val;
    let keys   = req.query.keys;
    let values  = req.query.values;
    (async function main(){
        try {
            let map   = await getMap(clase);
            let simple  = await getFiltered(map,key,val,keys,values);
            res.status(200).json(simple);
        } catch (err) {
            console.log(err.message);
        }

    })();
}
*/
//-------------------------------------------------------//
// LEVEL 2

async function getCatalog(q) {
    let conn = await db.getConnection();
    const rowSet = await conn.query(q);
    conn.end();    
    return JSON.stringify(rowSet);
}
/*
async function getMap(clase) {
    let xml = fs.readFileSync("./xml/"+clase+".data.mapper.xml", "utf8");        

    let template  = {table:'//table',keys:'//keys',order:'//order',dir:'//dir'};
    let data = await transform(xml, template);  

    return data;     
}
async function getSimple(map,key,value) {
    let conn = await db.getConnection();
    const rowSet = await conn.query("SELECT `"+key+"`,`"+value+"` FROM `"+map['table']+"` order by 1");
    conn.end();    
    let coll = {};
    for(let item of rowSet) {
        let i = 0;
        let k = "";
        let v = "";
        for(let attributename in item){
            if(i==0){ k = item[attributename];}
            if(i==1){ v = item[attributename];}
            i++;
        }
        coll[k] = v; 
    }
    return JSON.stringify(coll);
}
async function getCollection(map,key,id,fds) {
    let conn = await db.getConnection();
    let id_field = map['keys'];
    if(key!=""){id_field=key}
    if(fds==""){fds ="*"}
    let sql = "SELECT "+fds+" FROM `"+map['table']+"`";
    if(map['order'] != "" && map['dir'] != ""){
        sql = "SELECT "+fds+" FROM `"+map['table']+"` order by `"+map['order']+"` "+map['dir'];
    }
    if(map['keys'] != "" && id != ""){
        sql = "SELECT "+fds+" FROM `"+map['table']+"` WHERE `"+id_field+"`='"+id+"'";
        if(map['order'] != "" && map['dir'] != ""){
            sql = "SELECT "+fds+" FROM `"+map['table']+"` WHERE `"+id_field+"`='"+id+"' order by `"+map['order']+"` "+map['dir'];
        }            
    }
    //console.log(sql);
    const rowSet = await conn.query(sql);
    conn.end();
    return JSON.stringify(rowSet);
}
async function getQuery(q) {
    let conn = await db.getConnection();
    const rowSet = await conn.query(q);
    conn.end();    
    return JSON.stringify(rowSet);
}
async function getCount(map,keys,vals) {
    let conn = await db.getConnection();
    let filtro = "";
    let campo = keys.split(',');
    let valor  = vals.split('|');

    for(let i=0;i<campo.length;i++){
        filtro += "`"+campo[i]+"`='"+valor[i]+"' AND ";
    } 
    filtro = filtro.substr(0,filtro.length-4);

    let sql = "SELECT count(*) FROM `"+map['table']+"` WHERE "+filtro;
    const rowSet = await conn.query(sql);
    conn.end();

    return rowSet[0]['count(*)'];
}
async function getFiltered(map,key,value,keys,values) {
    let conn = await db.getConnection();
    let filtro = "";
    let campo = keys.split(',');
    let valor  = values.split('|');
    for(let i=0;i<campo.length;i++){
        filtro += "`"+campo[i]+"`='"+valor[i]+"' AND ";
    } 
    filtro = filtro.substr(0,filtro.length-4);
    let sql = "SELECT `"+key+"`,`"+value+"` FROM `"+map['table']+"` WHERE "+ filtro +" order by 1";
    const rowSet = await conn.query(sql);
    //console.log(sql);
    conn.end();    
    let coll = {};
    for(let item of rowSet) {
        let i = 0;
        let k = "";
        let v = "";
        for(let attributename in item){
            if(i==0){ k = item[attributename];}
            if(i==1){ v = item[attributename];}
            i++;
        }
        coll[k] = v; 
    }
    return JSON.stringify(coll);
}
*/
//-------------------------------------------------------//
// LEVEL 3