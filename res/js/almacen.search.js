//-------------------------------------------------------//
// Company:WebSoft, SA de CV
// Author:Rodolfo Machon
// File Name: almacen.search.js
// Created: 2021-4-14
// Updates: 2021-4-14
// Copyright - All Rights Reserved
//-------------------------------------------------------//
//-------------------------------------------------------//
// LEVEL 0
( async function() {
    processPage('almacen','Almacen');
})();
//-------------------------------------------------------//
//LEVEL 1
async function processPage(clas,desc){
    let data = {'tab':clas,'clas':clas,'clasDesc':desc,'desMas':1,'recBut':'yes'};

    await search(data);

    document.getElementById('nav-'+clas+'-tab').click();

    loadEventListener(clas,desc);
}
//-------------------------------------------------------//
//LEVEL 2
async function loadEventListener(clas,desc){
    loadEventClick(clas,desc);
}
//-------------------------------------------------------//
//LEVEL 3
async function loadEventClick(clas,desc){
    if(document.getElementById('nav-'+clas+'-tab')){document.getElementById('nav-'+clas+'-tab').addEventListener('dblclick', async  event => { destroyTab(clas) })}

    if(document.getElementById(clas+'_add')){document.getElementById(clas+'_add').addEventListener('click', async  event => { loadRecordAlert(clas,'record','',desc,'') })}
}
//-------------------------------------------------------//
// AUXILIAR
