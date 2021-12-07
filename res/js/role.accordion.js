//---------------------------------------------------------//
// Author:Rodolfo Machon
// Company:WebSoft, SA de CV
// File Name: role.accordion.js
// Created: 2021-12-01
// Updates: 2021-12-01
// Copyright - All Rights Reserved
//---------------------------------------------------------//
//---------------------------------------------------------//
//LEVEL 0
( async function() {
    processPage('role',component['role'].id,'role');
})();
//---------------------------------------------------------//
//LEVEL 1
async function processPage(clas,id,desc){
    loadRecordAccordion(clas,id,1,'Registro Principal');
    loadSearchAccordion('role.option',id,2,'Rol Opciones'); 

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
