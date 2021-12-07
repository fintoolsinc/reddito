//---------------------------------------------------------//
// Author:Rodolfo Machon
// Company:WebSoft, SA de CV
// File Name: almacen.form.js
// Created: 2018-02-18
// Updates: 2019-06-05,2021-03-05
// Copyright - All Rights Reserved
//---------------------------------------------------------//
//---------------------------------------------------------//
//LEVEL 0
( async function() {
    processPage('almacen',component['almacen'].id,'Almacen');
})();
//---------------------------------------------------------//
//LEVEL 1
async function processPage(clas,id,desc){
    loadRecordAccordion(clas,id,1,'Main Record');

    loadSearchAccordion('almacen.search',id,2,'Almacenes'); 

    eventClick(clas);    
}
//---------------------------------------------------------//
//LEVEL 2
async function eventClick(clas){
    document.getElementById(clas+'-accordion-close').addEventListener('click', async  event => { 
        destroyForm(clas);
    });
    document.getElementById(clas+'-accordion-maxmin').addEventListener('click', async  event => { 
        toggleMaxMin(clas);
    });
}
//----------------------------------------------------------//
// AUXILIAR
