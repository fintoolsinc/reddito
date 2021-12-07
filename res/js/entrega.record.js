//-------------------------------------------------------//
// Company:WebSoft, SA de CV
// Author:Rodolfo Machon
// File Name: entrega.record.js
// Created: 2021-02-28
// Updates: 2021-02-28
// Copyright - All Rights Reserved
//-------------------------------------------------------//
//-------------------------------------------------------//
//LEVEL 0
( async function() {
    processPage('entrega');
})();
//-------------------------------------------------------//
//LEVEL 1
async function processPage(clas){
    await loadEventListener(clas);

    await loadCombos(clas);

    if(component[clas].id!==""){
        await record(clas,component[clas].id);
    }

    if(document.getElementById(clas+'_modal')){
        var myModal = new bootstrap.Modal(document.getElementById(clas+'_modal'), {keyboard: false})
        myModal.show();
    }
}

async function saveForm(clas){
    event.preventDefault();
    
    validateRecord(clas);
    
    let id = await saveRecord(clas);

    let modalButton = document.getElementById(clas+'-close-modal');

    modalButton.click();
    
    destroyRecord(clas);

    loadOption(clas+".search",'entregas');
}
//-------------------------------------------------------//
//LEVEL 2
async function loadEventListener(clas){
    loadEventClick(clas);
    loadEventChange(clas);
}
async function loadCombos(clas){

}
//------------------------------------------------------//
//Level 3
async function loadEventClick(clas){
    if(document.getElementById(clas+'.save')){document.getElementById(clas+'.save').addEventListener('click', async  event => { saveForm(clas); })}
}
async function loadEventChange(clas){

}
// AUXILIAR
//-------------------------------------------------------//
async function validateRecord(clas){
    const forms = document.querySelectorAll('.needs-validation');
    Array.prototype.slice.call(forms).forEach((form) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
    });
}