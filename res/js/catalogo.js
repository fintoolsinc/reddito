

$(document).ready(async function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

});

async function addItemCatalog2(Titulo,texto,Precio,imagen,index){
    let card =`
    <div class="js-add-cart card px-0 card-wrapper" data-index="0">
        <img class="card-img-top" src="/res/img/1_Tile.jpg" alt="1_Tile">
        <div class="card-body p-3">
            <h6 class="card-title mb-0">Fake Tile</h6>
            <p class="card-text">Se hace pasar por marmol falso</p>
        </div>
        <div class="card-footer bg-transparent border-0 pt-0 pb-3">

            <span class="text-muted small">
                 Buy for $12.50
            </span>
            <div class="w-100 pt-2">&nbsp;</div>
        </div>
    </div>
    `
    return card;
}


async function addItemCatalog(Titulo,texto,Precio,imagen,index){//luego se agregara una funcion para agregar imagenes
    let card = `
        <div class="col js-add-cart card px-0 card-wrapper" data-index="${index}">
            <div class="card mb-3 shadow-sm">
                <img src="/res/img/${imagen}" class="card-img-top " alt="${Titulo}" height="300">
                <div class="card-body p-3">
                    <h5 class="card-title">${Titulo}</h5>
                    <p class="card-text">${texto}</p>
                </div>
                <div class="card-footer">
                    <div class="row p-0">
                        <div class="col-8">
                            <h4 class="my-0 fw-bold" style="color: #15253F;">$ ${Precio}</h4>
                        </div>
                        <div class="col-4">
                            <a href="#"  class="btn" style="position:relative;top:-6px;color: #15253F;height:2rem;">
                                <svg class="js-add-cart bi bi-plus-circle" width="60" height="60" viewBox="0 0 30 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/></svg>
                            </a>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    
    `
    return card;
}
async function constructCatalog(){
    let car2 = "";
    let dat = await getCollection('producto','id','','desc,text,prize,imageDir','','','');
    let catalog = Object.keys(dat);
    for(i=0;i < catalog.length; i ++){
        let card = await addItemCatalog(dat[i]['desc'],dat[i]['text'],dat[i]['prize'],dat[i]['imageDir'],i);
        car2 = car2 + card;
    }
    console.log(dat[0]['desc']+dat[0]['text']+dat[0]['prize']+dat[0]['imageDir'])
    console.log(dat[1]['desc']+dat[1]['text']+dat[1]['prize']+dat[1]['imageDir'])
    console.log(dat[2]['desc']+dat[2]['text']+dat[2]['prize']+dat[2]['imageDir'])
    console.log(dat[3]['desc']+dat[3]['text']+dat[3]['prize']+dat[3]['imageDir'])
    document.getElementById("catalogo").innerHTML = car2;
}


async function setSrvModel(){
    let dat =  await getCollection('producto','id','','desc,text,prize,imageDir','','','');
    let modeloCarrito = {//solo obtiene el top 4 para el carrito
        "currencyInfo":{
          "prefixed":true,
          "currencySymbol":"$",
          "thousandSeparator":",",
          "decimalSeparator":".",
          "divisibility":2,
          "symbolSpace":false
        },
        "viewType":1,
        "showCustomAmount":true,
        "showDiscount":true,
        "enableTips":true,
        "step":"0.01",
        "title":"Mundo Ceramico",
        "items":[
        {
            "description":dat[0]['desc'],
            "id":dat[0]['desc'],"image":"/res/img/"+dat[0]['imageDir'],
            "price":{
                "type":1,
                "formatted":"$"+ dat[0]['prize'],
                "value":dat[0]['prize']
            },
            "title":dat[0]['desc'],
            "buyButtonText":null,
            "inventory":null,
            "paymentMethods":null,
            "disabled":false
        },
        {
            "description":dat[1]['desc'],
            "id":dat[1]['desc'],"image":"/res/img/"+dat[1]['imageDir'],
            "price":{
                "type":1,
                "formatted":"$"+ dat[1]['prize'],
                "value":dat[1]['prize']
            },
            "title":dat[1]['desc'],
            "buyButtonText":null,
            "inventory":null,
            "paymentMethods":null,
            "disabled":false
        },
        {
            "description":dat[2]['desc'],
            "id":dat[2]['desc'],"image":"/res/img/"+dat[2]['imageDir'],
            "price":{
                "type":1,
                "formatted":"$"+ dat[2]['prize'],
                "value":dat[2]['prize']
            },
            "title":dat[2]['desc'],
            "buyButtonText":null,
            "inventory":null,
            "paymentMethods":null,
            "disabled":false
        },
        {
            "description":dat[3]['desc'],
            "id":dat[3]['desc'],"image":"/res/img/"+dat[3]['imageDir'],
            "price":{
                "type":1,
                "formatted":"$"+ dat[3]['prize'],
                "value":dat[3]['prize']
            },
            "title":dat[3]['desc'],
            "buyButtonText":null,
            "inventory":null,
            "paymentMethods":null,
            "disabled":false
        },

        ],"currencyCode":"USD",
        "currencySymbol":"$",
        "appId":"2ZQvFt97bZgibfyS5asU7pM3iLA1",
        "buttonText":"Buy for {0}",
        "customButtonText":"Pay",
        "customTipText":"Do you want to leave a tip?",
        "customTipPercentages":[15,18,20],
        "customCSSLink":null,
        "customLogoLink":null,
        "description":null,
        "embeddedCSS":null,
        "requiresRefundEmail":0,
        "store":{
          "id":"73WuwZVbdGDbGEUkAbccPAvohL89hVhsapWR8QUkparK",
          "userStores":null,
          "apps":null,
          "paymentRequests":null,
          "pullPayments":null,
          "invoices":null,
          "derivationStrategy":null,
          "derivationStrategies":"{\n  \u0022BTC\u0022: {\n    \u0022signingKey\u0022: \u0022xpub6DGR44n1gwziv1MkKTDdNPh1ivLs7VmuytsqpksXKi5h9ySio24aMS29DzxdyfYA8EbPshXuu6Hg4CufBpeG27RrY38HsmHpC5VqjBH2Mr5\u0022,\n    \u0022source\u0022: \u0022NBXplorerGenerated\u0022,\n    \u0022isHotWallet\u0022: false,\n    \u0022accountDerivation\u0022: \u0022xpub6DGR44n1gwziv1MkKTDdNPh1ivLs7VmuytsqpksXKi5h9ySio24aMS29DzxdyfYA8EbPshXuu6Hg4CufBpeG27RrY38HsmHpC5VqjBH2Mr5\u0022,\n    \u0022accountOriginal\u0022: \u0022xpub6DGR44n1gwziv1MkKTDdNPh1ivLs7VmuytsqpksXKi5h9ySio24aMS29DzxdyfYA8EbPshXuu6Hg4CufBpeG27RrY38HsmHpC5VqjBH2Mr5\u0022,\n    \u0022accountKeySettings\u0022: [\n      {\n        \u0022rootFingerprint\u0022: \u00225de416e1\u0022,\n        \u0022accountKeyPath\u0022: \u002284\u0027/0\u0027/0\u0027\u0022,\n        \u0022accountKey\u0022: \u0022xpub6DGR44n1gwziv1MkKTDdNPh1ivLs7VmuytsqpksXKi5h9ySio24aMS29DzxdyfYA8EbPshXuu6Hg4CufBpeG27RrY38HsmHpC5VqjBH2Mr5\u0022\n      }\n    ],\n    \u0022label\u0022: null\n  }\n}",
          "storeName":"Mundo Ceramico",
          "speedPolicy":1,
          "storeWebsite":null,
          "storeCertificate":null,
          "role":null,
          "storeBlob":"eyJuZXR3b3JrRmVlTW9kZSI6Ik11bHRpcGxlUGF5bWVudHNPbmx5IiwicmVxdWlyZXNSZWZ1bmRFbWFpbCI6ZmFsc2UsImxpZ2h0bmluZ0Ftb3VudEluU2F0b3NoaSI6ZmFsc2UsImxpZ2h0bmluZ1ByaXZhdGVSb3V0ZUhpbnRzIjpmYWxzZSwib25DaGFpbldpdGhMbkludm9pY2VGYWxsYmFjayI6ZmFsc2UsImxhenlQYXltZW50TWV0aG9kcyI6ZmFsc2UsInJlZGlyZWN0QXV0b21hdGljYWxseSI6ZmFsc2UsInNob3dSZWNvbW1lbmRlZEZlZSI6dHJ1ZSwicmVjb21tZW5kZWRGZWVCbG9ja1RhcmdldCI6MSwiZGVmYXVsdEN1cnJlbmN5IjoiVVNEIiwiZGVmYXVsdEN1cnJlbmN5UGFpcnMiOltdLCJkZWZhdWx0TGFuZyI6bnVsbCwibW9uaXRvcmluZ0V4cGlyYXRpb24iOjE0NDAsImludm9pY2VFeHBpcmF0aW9uIjoxNSwic3ByZWFkIjowLjAsInByZWZlcnJlZEV4Y2hhbmdlIjoiY29pbmdlY2tvIiwicGF5bWVudE1ldGhvZENyaXRlcmlhIjpbXSwiY3VzdG9tQ1NTIjpudWxsLCJjdXN0b21Mb2dvIjpudWxsLCJodG1sVGl0bGUiOm51bGwsImF1dG9EZXRlY3RMYW5ndWFnZSI6ZmFsc2UsInJhdGVTY3JpcHRpbmciOmZhbHNlLCJyYXRlU2NyaXB0IjpudWxsLCJhbnlvbmVDYW5JbnZvaWNlIjpmYWxzZSwibGlnaHRuaW5nRGVzY3JpcHRpb25UZW1wbGF0ZSI6IlBhaWQgdG8ge1N0b3JlTmFtZX0gKE9yZGVyIElEOiB7T3JkZXJJZH0pIiwicGF5bWVudFRvbGVyYW5jZSI6MC4wLCJleGNsdWRlZFBheW1lbnRNZXRob2RzIjpbXSwiZW1haWxTZXR0aW5ncyI6bnVsbCwicGF5Sm9pbkVuYWJsZWQiOmZhbHNlLCJoaW50cyI6eyJ3YWxsZXQiOmZhbHNlLCJsaWdodG5pbmciOnRydWV9fQ==",
          "defaultCrypto":null,
          "pairedSINs":null,
          "apiKeys":null
        }
    };
    return modeloCarrito;
}




function Cart(){
    this.items=0;
    this.totalAmount=0;
    this.content=[];
    this.loadLocalStorage();
    this.buildUI();
    this.$list=$("#js-cart-list");
    this.$items=$("#js-cart-items");
    this.$total=$(".js-cart-total");
    this.$summaryProducts=$(".js-cart-summary-products");
    this.$summaryDiscount=$(".js-cart-summary-discount");
    this.$summaryTotal=$(".js-cart-summary-total");
    this.$summaryTip=$(".js-cart-summary-tip");
    this.$destroy=$(".js-cart-destroy");
    this.$confirm=$("#js-cart-confirm");
    this.listItems();this.bindEmptyCart();
    this.updateItemsCount();
    this.updateAmount();
    this.updatePosData()
}
    
    function removeAccents(n){
        for(var r="AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCCccDDdIIIIiiiiLlUUUUuuuuNNnnSsTtYyyZz ",u="",i=-1,t=0;t<n.length;t++)
        i="ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇČçčÐĎďÌÍÎÏìíîïĽľÙÚÛÜùúûüÑŇñňŠšŤťŸÿýŽž  ́".indexOf(n[t]),u+=i!=-1?typeof r[i]!="undefined"?r[i]:"":typeof n[t]!="undefined"?n[t]:"";
        return u
    }
        
    Cart.prototype.setCustomAmount=function(n){
        return srvModel.showCustomAmount?(this.customAmount=this.toNumber(n),this.customAmount>0?localStorage.setItem(this.getStorageKey("cartCustomAmount"),
        this.customAmount):localStorage.removeItem(this.getStorageKey("cartCustomAmount")),this.customAmount):0
    };
        
    Cart.prototype.getCustomAmount=function(){
        return srvModel.showCustomAmount?this.toCents(this.customAmount):0
    };


    Cart.prototype.setTip=function(n){
        return srvModel.enableTips?(this.tip=this.toNumber(n),
        this.tip>0?localStorage.setItem(this.getStorageKey("cartTip"),this.tip):localStorage.removeItem(this.getStorageKey("cartTip")),this.tip):0
    };
            
    Cart.prototype.getTip=function(){
        return srvModel.enableTips?this.toCents(this.tip):0
    };
        
    Cart.prototype.setDiscount=function(n){
        return srvModel.showDiscount?(this.discount=this.toNumber(n),
        this.discount>0?localStorage.setItem(this.getStorageKey("cartDiscount"),
        this.discount):localStorage.removeItem(this.getStorageKey("cartDiscount")),
        this.discount):0};
        
    Cart.prototype.getDiscount=function(){
        return srvModel.showDiscount?this.toCents(this.discount):0
    };
        
    Cart.prototype.getDiscountAmount=function(n){
        return srvModel.showDiscount?this.percentage(n,this.getDiscount()):0
    };
    
    Cart.prototype.getTotalProducts=function(){
        var t=0;
        for(var n in this.content)
        if(this.content.hasOwnProperty(n)&&typeof this.content[n]!="undefined"&&!this.content[n].disabled){
            const i=this.toCents(this.content[n].price.value||0);t+=this.content[n].count*i
        }
        return t+=this.getCustomAmount()
    };
            
    Cart.prototype.getTotal=function(n){
        return this.totalAmount=this.getTotalProducts(),
        this.getDiscount()>0&&(this.totalAmount-=this.getDiscountAmount(this.totalAmount)),
        n&&(this.totalAmount+=this.getTip()),this.fromCents(this.totalAmount)
    };
        
    Cart.prototype.addItem=function(n){
        var t=n.id,i=this.content.filter(function(n){return n.id===t
    });
    
    i.length||(this.content.push({id:t,title:n.title,price:n.price,count:0,image:n.image,inventory:n.inventory}),this.emptyCartToggle());this.incrementItem(t)};
    
    Cart.prototype.incrementItem=function(n){
        var u=this.items,i,r,t;
        for(this.items=0,i=!0,r=0;r<this.content.length;r++){
            if(t=this.content[r],t.id===n){
                if(t.inventory!=null&&t.inventory<=t.count){i=!1;continue}t.count++;delete t.disabled}this.items+=t.count}return i||(this.items=u),this.updateAll(),i
    };
                
    Cart.prototype.disableItem=function(n){
        var t=this;
        this.content.filter(function(i){i.id===n&&(i.disabled=!0,t.items-=i.count)});
        this.updateAll()};
        
    Cart.prototype.enableItem=function(n){
        var t=this;
        this.content.filter(function(i){i.id===n&&(delete i.disabled,t.items+=i.count)});this.updateAll()
    };
        
    Cart.prototype.decrementItem=function(n){
        var t=this;
        this.items=0;
        this.content.filter(function(i,r,u){i.id===n&&(i.count--,delete i.disabled,i.count<=0&&t.removeItem(n,r,u));t.items+=i.count});this.updateAll()
    };
        
        
        
    Cart.prototype.removeItemAll=function(n){
        var t=this;
        this.items=0;
        typeof n!="undefined"?this.content.filter(function(i,r,u){if(i.id===n){t.removeItem(n,r,u);
            for(var f=0;f<i.count;f++)t.items--}t.items+=i.count}):(this.$list.find("tbody").empty(),
            this.content=[]);this.emptyCartToggle();this.updateAll()
    };
            
    Cart.prototype.removeItem=function(n,t,i){i.splice(t,1);this.$list.find("tr").eq(t+1).remove()};
    
    Cart.prototype.updateAll=function(){
        this.saveLocalStorage();
        this.updateItemsCount();
        this.updateDiscount();
        this.updateSummaryProducts();
        this.updateSummaryTotal();
        this.updateTotal();
        this.updateAmount();
        this.updatePosData()
    };
        
    Cart.prototype.updateItemsCount=function(){this.$items.text(this.items)};
    
    Cart.prototype.updateTotal=function(){
        this.$total.text(this.formatCurrency(this.getTotal()))
    };
        
    Cart.prototype.updateSummaryTotal=function(){this.$summaryTotal.text(this.formatCurrency(this.getTotal(!0)))};
    
    Cart.prototype.updateSummaryProducts=function(){
        this.$summaryProducts.text(this.formatCurrency(this.fromCents(this.getTotalProducts())))
    };
    
    Cart.prototype.updateDiscount=function(n){var t=0;typeof n!="undefined"?t=n:(t=this.percentage(this.getTotalProducts(),this.getDiscount()),t=this.fromCents(t));
    
    this.$summaryDiscount.text((t>0?"-":"")+this.formatCurrency(t))};
    
    Cart.prototype.updateTip=function(n){var t=typeof n!="undefined"?n:this.fromCents(this.getTip());this.$summaryTip.text(this.formatCurrency(t))};
    
    Cart.prototype.updateAmount=function(){$("#js-cart-amount").val(this.getTotal(!0))};
    
    Cart.prototype.updatePosData=function(){
        var n={
            cart:this.content,customAmount:this.fromCents(this.getCustomAmount()),
            discountPercentage:this.discount?parseFloat(this.discount):0,subTotal:this.fromCents(this.getTotalProducts()),
            discountAmount:this.fromCents(this.getDiscountAmount(this.totalAmount)),tip:this.tip?this.tip:0,total:this.getTotal(!0)};
            console.warn(n);$("#js-cart-posdata").val(JSON.stringify(n))
    };
            
    Cart.prototype.resetDiscount=function(){this.setDiscount(0);this.updateDiscount(0);$(".js-cart-discount").val("")};
    
    Cart.prototype.resetTip=function(){
        this.setTip(0);this.updateTip(0);$(".js-cart-tip").val("")
    };
    
    Cart.prototype.resetCustomAmount=function(){this.setCustomAmount(0);$(".js-cart-custom-amount").val("")};
    
    Cart.prototype.escape=function(n){return(""+n).replace(/&/g,"&amp;").replace(/'/g,"&apos;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")};
    
    Cart.prototype.template=function(n,t){var i=n.text(),r,u;for(r in t)u=new RegExp("{"+r+"}","mg"),i=i.replace(u,t[r]);return i};
    
    Cart.prototype.buildUI=function(){var t=$("#js-cart-extra").find("thead"),n=[];tableTemplate=this.template($("#template-cart-extra"),{
        discount:this.escape(this.fromCents(this.getDiscount())||""),customAmount:this.escape(this.fromCents(this.getCustomAmount())||"")});
        n.push($(tableTemplate));
        tableTemplate=this.template($("#template-cart-total"),
        {total:this.escape(this.formatCurrency(this.getTotal()))});
        n.push($(tableTemplate));
        t.append(n);$(".js-cart-discount").inputAmount(this,"discount");
        $(".js-cart-discount-remove").removeAmount(this,"discount");
        $(".js-cart-custom-amount").inputAmount(this,"customAmount");
        $(".js-cart-custom-amount-remove").removeAmount(this,"customAmount")
    };
        
    Cart.prototype.listItems=function(){
        var e=this.$list.find("tbody"),n=this,r=[],u="",f,t,i;if(this.content.length>0){
            for(f in this.content)t=this.content[f],i=t.image&&this.escape(t.image),
            i&&i.startsWith("~")&&(i=i.replace("~",window.location.pathname.substring(0,i.indexOf("/apps")))),
            u=this.template($("#template-cart-item"),{
                id:this.escape(t.id),image:i?this.template($("#template-cart-item-image"),{image:i}):"",title:this.escape(t.title),
                count:this.escape(t.count),inventory:this.escape(t.inventory<0?99999:t.inventory),
                price:this.escape(t.price.formatted||0)}),r.push($(u));e.html(r);r=[];$(".js-cart-item-count").off().on("input",
                function(){
                    var h=this,
                    i=$(this).closest("tr").data("id"),
                    r=parseInt($(this).val()),
                    e=!isNaN(r),
                    o=parseInt($(this).data("prev")),
                    f=Math.abs(r-o),s=r>o,u,t;if(e?$(this).data("prev",r):r=null,n.resetTip(),s)for(u=n.content.filter(function(n){return n.id===i}),t=0;t<f;t++)n.addItem({id:i,title:u.title,price:u.price,image:u.image});else if(!s)if(e)if(f>0)for(t=0;t<f;t++)n.decrementItem(i);else n.enableItem(i);else n.disableItem(i)});
                    $(".js-cart-item-remove").off().on("click",function(t){t.preventDefault();n.resetTip();n.removeItemAll($(this).closest("tr").data("id"))});
                    $(".js-cart-item-plus").off().on("click",function(t){if(t.preventDefault(),n.incrementItem($(this).closest("tr").data("id"))){
                        var i=$(this).parents(".input-group").find(".js-cart-item-count"),r=parseInt(i.val()||i.data("prev"))+1;i.val(r);i.data("prev",r);n.resetTip()
                    }
                });
                $(".js-cart-item-minus").off().on("click",function(t){t.preventDefault();
                    var i=$(this).parents(".input-group").find(".js-cart-item-count"),
                    u=$(this).closest("tr").data("id"),
                    r=parseInt(i.val()||i.data("prev"))-1;n.resetTip();
                    r===0?n.removeItemAll(u):(i.val(r),i.data("prev",r),n.decrementItem(u))
                })
            }
        };


    Cart.prototype.bindEmptyCart=function(){
        var n=this;this.emptyCartToggle();
        this.$destroy.click(function(t){
            t.preventDefault();n.destroy();n.emptyCartToggle()})
    };
    
    Cart.prototype.emptyCartToggle=function(){
        this.content.length>0||this.getCustomAmount()?(this.$destroy.show(),this.$confirm.removeAttr("disabled")):(this.$destroy.hide(),this.$confirm.attr("disabled","disabled"))};
        
    Cart.prototype.formatCurrency=function(n){
        var t="",u="",r="",i;
        return prefix="",
        postfix="",
        srvModel.currencyInfo.prefixed?(prefix=srvModel.currencyInfo.currencySymbol,
            srvModel.currencyInfo.symbolSpace&&(prefix=prefix+" ")):(postfix=srvModel.currencyInfo.currencySymbol,srvModel.currencyInfo.symbolSpace&&(postfix=" "+postfix)),
            u=srvModel.currencyInfo.thousandSeparator,r=srvModel.currencyInfo.decimalSeparator,
            t=n.toFixed(srvModel.currencyInfo.divisibility),i=t.split("."),t=(i[0]+".").replace(/(\d)(?=(\d{3})+\.)/g,"$1"+u),t=t.substr(0,t.length-1),i.length==2&&(t=t+r+i[1]),
            srvModel.currencyInfo.divisibility!==0&&(t[t.length-srvModel.currencyInfo.divisibility-1]=r),prefix+t+postfix};Cart.prototype.toNumber=function(n){return n*1||0
    };
            
    Cart.prototype.toCents=function(n){
        return n*Math.pow(10,srvModel.currencyInfo.divisibility)
    };
    
    Cart.prototype.fromCents=function(n){
        return n/Math.pow(10,srvModel.currencyInfo.divisibility)
    };
    
    Cart.prototype.percentage=function(n,t){
        return this.fromCents(n/100*t)
    };
    
    Cart.prototype.getStorageKey=function(n){
        return n+srvModel.appId+srvModel.currencyCode
    };
    
    Cart.prototype.saveLocalStorage=function(){
        localStorage.setItem(this.getStorageKey("cart"),JSON.stringify(this.content))
    };
    
    Cart.prototype.loadLocalStorage=function(){
        var i,n,t;
        for(this.content=$.parseJSON(localStorage.getItem(this.getStorageKey("cart")))||[],i=this,n=this.content.length-1;n>=0;n--){if(!this.content[n]){this.content.splice(n,1);
            continue
        }
        if(t=srvModel.items.find(function(t){return t.id===i.content[n].id}),t)t.inventory!=null&&t.inventory<=0?this.content.splice(n,1):t.inventory!=null&&t.inventory<this.content[n].count&&(this.content[n].count=t.inventory),
        this.content[n].inventory=t.inventory;else{this.content.splice(n,1);continue}this.items+=this.content[n].count;delete this.content[n].disabled}this.discount=localStorage.getItem(this.getStorageKey("cartDiscount"));
        this.customAmount=localStorage.getItem(this.getStorageKey("cartCustomAmount"));
        this.tip=localStorage.getItem(this.getStorageKey("cartTip"))
    };
    
    Cart.prototype.destroy=function(n){
        this.resetDiscount();
        this.resetTip();
        this.resetCustomAmount();
        n?(this.content=[],this.items=0):this.removeItemAll();
        localStorage.removeItem(this.getStorageKey("cart"))
    };
    
    $.fn.inputAmount=function(n,t){$(this).off().on("input",function(){
        var i=n.toNumber($(this).val());switch(t){
            case"customAmount":n.setCustomAmount(i);
            n.updateDiscount();
            n.updateSummaryProducts();
            n.updateTotal();
            n.resetTip();
            break;
            case"discount":n.setDiscount(i);
            n.updateDiscount();
            n.updateSummaryProducts();
            n.updateTotal();
            n.resetTip();
            break;
            
            
            case"tip":n.setTip(i);
            n.updateTip()
        }
        
        n.updateSummaryTotal();
        n.updateAmount();
        n.updatePosData();
        n.emptyCartToggle()
    })
};

$.fn.removeAmount=function(n,t){$(this).off().on("click",function(i){
    i.preventDefault();
    switch(t){
        case"customAmount":n.resetCustomAmount();
        n.updateSummaryProducts();
        break;
        case"discount":n.resetDiscount();
        n.updateSummaryProducts()}n.resetTip();
        n.updateTotal();n.updateSummaryTotal();
        n.emptyCartToggle()
    })
};

$.fn.addAnimate=function(n){$(this).find(".js-cart-added").length===0&&(
    $(this).append('<div class="js-cart-added"><i class="fa fa-check fa-3x text-white align-middle"><\/i><\/div>'),$(this).find(".js-cart-added").fadeIn(200,function(){
        var t=this;
        setTimeout(function(){
            $(t).fadeOut(100,function(){$(this).remove();n&&n()})},200)
        }))
    };jQuery.expr[":"].icontains=function(n,t,i){
        var r=removeAccents(jQuery(n).text().toLowerCase());
        return r.indexOf(removeAccents(i[3].toLowerCase()))>=0
    };
    $(document).ready(function(){
        var n=new Cart;
        $(".js-add-cart").click(function(t){
            t.preventDefault();
            var i=$(t.target),
            r=this;
            index=i.closest(".card").data("index");
            item=srvModel.items[index];
            items=n.items;$(this).hasClass("disabled")||($(this).addClass("disabled"),$(this).addAnimate(function(){$(r).removeClass("disabled")
        }),n.addItem({id:item.id,title:item.title,price:item.price,image:typeof item.image!="undefined"?item.image:null,inventory:item.inventory}),
        n.listItems())
    });$("#js-cart-pay").click(function(){n.destroy(!0)});$("#js-cart-pay-form").on("submit",function(){
        var n=$("#js-cart-pay");n&&(n.attr("",!0),n.prepend('<div class="spinner-grow spinner-grow-sm align-baseline" role="status">    <span class="visually-hidden">Loading...<\/span><\/div>'))
    });$(".js-cart").on("click",function(){
        $("#sidebar, #content").toggleClass("active");
        $(".collapse.in").toggleClass("in");
        $("a[aria-expanded=true]").attr("aria-expanded","false")});
        $(".js-search").keyup(function(){
            var n=$(this).val(),t;
            $("#js-pos-list").find(".card-wrapper").show();
            n.length>1?(t=$("#js-pos-list").find(".card-title:not(:icontains('"+$.escapeSelector(n)+"'))"),t.parents(".card-wrapper").hide(),$(".js-search-reset").show()):n.length===0&&$(".js-search-reset").hide()});
            $(".js-search-reset").click(function(n){n.preventDefault();$(".js-search").val("");$(".js-search").trigger("keyup");$(this).hide()
        });
        $("#js-cart-summary").find("tbody").prepend(n.template($("#template-cart-tip"),{
            tip:n.fromCents(n.getTip())||""
        }));
        $("#cartModal").one("show.bs.modal",function(){
            n.updateDiscount();
            n.updateTip();
            n.updateSummaryProducts();
            n.updateSummaryTotal();
            $(".js-cart-tip").inputAmount(n,"tip");
            $(".js-cart-tip-remove").removeAmount(n,"tip");
            $(".js-cart-tip-btn").click(function(t){t.preventDefault();
                var i=$(".js-cart-tip"),
                r=n.percentage(n.getTotalProducts(),
                n.getDiscount()),
                u=n.getTotalProducts()-r,
                f=parseInt($(this).data("tip")),
                e=n.percentage(u,f).toFixed(srvModel.currencyInfo.divisibility);i.val(e);i.trigger("input")
            })
        })
        $("#cardModal").one("show.bs.modal",function(){
            
        })
    });

    /*Credit Card/Debit Card Checkout*/
    var $form = $('#payment-form');
    $form.on('submit', payWithStripe);
    
    /* If you're using Stripe for payments */
    function payWithStripe(e) {
        e.preventDefault();
    
        /* Visual feedback */
        $form.find('[type=submit]').html('Validating <i class="fa fa-spinner fa-pulse"></i>');
    
        var PublishableKey = 'pk_test_b1qXXwATmiaA1VDJ1mOVVO1p'; // Replace with your API publishable key
        Stripe.setPublishableKey(PublishableKey);
        
        /* Create token */
        var expiry = $form.find('[name=cardExpiry]').payment('cardExpiryVal');
        var ccData = {
            number: $form.find('[name=cardNumber]').val().replace(/\s/g,''),
            cvc: $form.find('[name=cardCVC]').val(),
            exp_month: expiry.month, 
            exp_year: expiry.year
        };
        
        Stripe.card.createToken(ccData, function stripeResponseHandler(status, response) {
            if (response.error) {
                /* Visual feedback */
                $form.find('[type=submit]').html('Try again');
                /* Show Stripe errors on the form */
                $form.find('.payment-errors').text(response.error.message);
                $form.find('.payment-errors').closest('.row').show();
            } else {
                /* Visual feedback */
                $form.find('[type=submit]').html('Processing <i class="fa fa-spinner fa-pulse"></i>');
                /* Hide Stripe errors on the form */
                $form.find('.payment-errors').closest('.row').hide();
                $form.find('.payment-errors').text("");
                // response contains id and card, which contains additional card details            
                console.log(response.id);
                console.log(response.card);
                var token = response.id;
                // AJAX - you would send 'token' to your server here.
                $.post('/account/stripe_card_token', {
                        token: token
                    })
                    // Assign handlers immediately after making the request,
                    .done(function(data, textStatus, jqXHR) {
                        $form.find('[type=submit]').html('Payment successful <i class="fa fa-check"></i>').prop('disabled', true);
                    })
                    .fail(function(jqXHR, textStatus, errorThrown) {
                        $form.find('[type=submit]').html('There was a problem').removeClass('success').addClass('error');
                        /* Show Stripe errors on the form */
                        $form.find('.payment-errors').text('Try refreshing the page and trying again.');
                        $form.find('.payment-errors').closest('.row').show();
                    });
            }
        });
    }
    /* Fancy restrictive input formatting via jQuery.payment library*/
    $('input[name=cardNumber]').payment('formatCardNumber');
    $('input[name=cardCVC]').payment('formatCardCVC');
    $('input[name=cardExpiry').payment('formatCardExpiry');
    
    /* Form validation using Stripe client-side validation helpers */
    jQuery.validator.addMethod("cardNumber", function(value, element) {
        return this.optional(element) || Stripe.card.validateCardNumber(value);
    }, "Please specify a valid credit card number.");
    
    jQuery.validator.addMethod("cardExpiry", function(value, element) {    
        /* Parsing month/year uses jQuery.payment library */
        value = $.payment.cardExpiryVal(value);
        return this.optional(element) || Stripe.card.validateExpiry(value.month, value.year);
    }, "Invalid expiration date.");
    
    jQuery.validator.addMethod("cardCVC", function(value, element) {
        return this.optional(element) || Stripe.card.validateCVC(value);
    }, "Invalid CVC.");
    
    validator = $form.validate({
        rules: {
            cardNumber: {
                required: true,
                cardNumber: true            
            },
            cardExpiry: {
                required: true,
                cardExpiry: true
            },
            cardCVC: {
                required: true,
                cardCVC: true
            }
        },
        highlight: function(element) {
            $(element).closest('.form-control').removeClass('success').addClass('error');
        },
        unhighlight: function(element) {
            $(element).closest('.form-control').removeClass('error').addClass('success');
        },
        errorPlacement: function(error, element) {
            $(element).closest('.form-group').append(error);
        }
    });
    
    paymentFormReady = function() {
        if ($form.find('[name=cardNumber]').hasClass("success") &&
            $form.find('[name=cardExpiry]').hasClass("success") &&
            $form.find('[name=cardCVC]').val().length > 1) {
            return true;
        } else {
            return false;
        }
    }
    
    $form.find('[type=submit]').prop('disabled', true);
    var readyInterval = setInterval(function() {
        if (paymentFormReady()) {
            $form.find('[type=submit]').prop('disabled', false);
            clearInterval(readyInterval);
        }
    }, 250);
    /*Credit Card/Debit Card Checkout*/

    /*Dinamic Button Selector*/
    function checkout() {
        const rbs = document.querySelectorAll('input[name="payment-option"]');
        for (const rb of rbs) {
            if (rb.checked) {
                if(rb.value == "Visa"){
                    document.getElementById("js-card-pay").style.display = "block";
                    document.getElementById("js-cart-pay").style.display = "none";
                    document.getElementById("js-cash-pay").style.display = "none";
                    document.getElementById("defaultBtn").style.display = "none";
                    document.getElementById("cash").style.display = "none";
                    document.getElementById("visa").style.display = "block";
                }
                if(rb.value == "Bitcoin"){
                    document.getElementById("js-card-pay").style.display = "none";
                    document.getElementById("js-cart-pay").style.display = "block";
                    document.getElementById("js-cash-pay").style.display = "none";
                    document.getElementById("defaultBtn").style.display = "none";
                    document.getElementById("cash").style.display = "none";
                    document.getElementById("visa").style.display = "none";
                }
                if(rb.value == "Efectivo"){
                    document.getElementById("js-card-pay").style.display = "none";
                    document.getElementById("js-cart-pay").style.display = "none";
                    document.getElementById("js-cash-pay").style.display = "block";
                    document.getElementById("defaultBtn").style.display = "none";
                    document.getElementById("cash").style.display = "block";
                    document.getElementById("visa").style.display = "none";
                }
            }
        }
    }

    
          