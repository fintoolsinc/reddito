//-------------------------------------------------------//
// Company:WebSoft, SA de CV
// Author:Rodolfo Machon
// File Name: almacen.record.js
// Created: 2021-4-22
// Updates: 2021-4-22
// Copyright - All Rights Reserved
//-------------------------------------------------------//
//-------------------------------------------------------//
//LEVEL 0
( async function() {
    processPage('almacen','Almacen');
})();
//-------------------------------------------------------//
//LEVEL 1
async function processPage(clas,desc){
    await loadEventListener(clas,desc);

    await loadCombos(clas);

    if(component[clas].id!==""){
        await record(clas,component[clas].id);
        document.getElementById(clas+".remove").disabled = false;
    }

    if(document.getElementById(clas+'_modal')){
        var myModal = new bootstrap.Modal(document.getElementById(clas+'_modal'), {keyboard: false})
        myModal.show();
    }
}
async function saveForm(clas){
    event.preventDefault();
    
    let valid = await validateRecord(clas);

    if (valid==false){return;}
    
    let id = await saveRecord(clas);

    let modalButton = document.getElementById(clas+'-close-modal');

    modalButton.click();
    
    destroyRecord(clas);

    loadOption(clas+".search",'Almacen')
}
async function removeForm(clas,desc){
    event.preventDefault();

    modalRemovePros[clas] = [
        {'func':'removeRecord',args:{'clase':clas,'id':component[clas].id},'index':'1'},
        {'func':'loadDiv','index':'2',args:{'clas':clas,'comp':'search','desc':desc}}
    ]

    alertModalProcess('Are you sure, you wish to remove this information ?',clas,component[clas].id)
}
//-------------------------------------------------------//
//LEVEL 2
async function loadEventListener(clas,desc){
    loadEventClick(clas,desc);
    loadEventChange(clas,desc);
}
async function loadCombos(clas){

}
//------------------------------------------------------//
//Level 3
async function loadEventClick(clas,desc){
    if(document.getElementById(clas+'.save')){document.getElementById(clas+'.save').addEventListener('click', async  event => { saveForm(clas,desc); })}
    if(document.getElementById(clas+'.remove')){document.getElementById(clas+'.remove').addEventListener('click', async  event => { removeForm(clas,desc); })}    
}
async function loadEventChange(clas){

}
// AUXILIAR
//-------------------------------------------------------//
async function validateRecord(clas){
    let count = 0;
    let valid = true;
    const forms = document.querySelectorAll('.needs-validation');
    Array.prototype.slice.call(forms).forEach((form) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
          if(count==0){
            valid = false;
            count++;
          }
        }
        form.classList.add('was-validated');
    });
    return valid;
}