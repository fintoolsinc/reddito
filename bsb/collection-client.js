async function getCollection(clas,key,rid,fds,ord,dir){
    let data = {'clase':clas,'key':key,'id':rid,'fds':fds,'order':ord,'dir':dir};
    return await (await fetch('/collection.get', {method: 'post',headers: {'Content-Type': 'application/json',},body: JSON.stringify(data)})).json();;
}
async function getCollectionPair(clas,key,val){
    let data = {'clase':clas,'key':key,'val':val};
    return await (await fetch('/collection.pair', {method: 'post',headers: {'Content-Type': 'application/json',},body: JSON.stringify(data)})).json();;
}
async function fillSelect(str,ele){
    let d = JSON.parse(str);
    let selec = document.getElementById(ele);
    selec.length = 1;
    Object.keys(d).forEach(key => {
        var newOption = document.createElement("option");
        newOption.value		= key;
        if (typeof newOption.textContent === 'undefined'){
            newOption.innerText = d[key];
        }else{
            newOption.textContent = d[key];
        }
        selec.appendChild(newOption);
    });
}
async function getCollectionFiltered(clas,key,val,keys,values){
    let data = {'clase':clas,'key':key,'val':val,'keys':keys,'values':values};
    return await (await fetch('/collection.pairFiltered', {method: 'post',headers: {'Content-Type': 'application/json',},body: JSON.stringify(data)})).json();;
}
async function getCollectionCount(clas,keys,vals){
    let data = {'clase':clas,'keys':keys,'vals':vals};
    return await (await fetch('/collection.count', {method: 'post',headers: {'Content-Type': 'application/json',},body: JSON.stringify(data)})).json();;
}
async function getQueryCollection(query){
    let data = {'sql':query};
    return await (await fetch('/collection.getQuery', {method: 'post',headers: {'Content-Type': 'application/json',},body: JSON.stringify(data)})).json();;
}