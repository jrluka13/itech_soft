// function loadFile(filename, filetype) {
//   filename = filename + "?time=" + Date.now();
//   if (filetype == "js") { //if filename is a external JavaScript file
//     var fileref = document.createElement('script');
//     fileref.setAttribute("type", "text/javascript");
//     fileref.setAttribute("src", filename);
//   } else if (filetype == "css") { //if filename is an external CSS file
//     var fileref = document.createElement("link")
//     fileref.setAttribute("rel", "stylesheet")
//     fileref.setAttribute("type", "text/css")
//     fileref.setAttribute("href", filename)
//   }
//   if (typeof fileref != "undefined")
//     document.getElementsByTagName("head")[0].appendChild(fileref);
// }



// //custom max min header filter
// var minMaxFilterEditor = function(cell, onRendered, success, cancel, editorParams){

// var end;

// var container = document.createElement("span");

// //create and style inputs
// var start = document.createElement("input");
// start.setAttribute("type", "number");
// start.setAttribute("placeholder", "Min");
// //start.setAttribute("min", 0);
// //start.setAttribute("max", 100);
// start.style.padding = "4px";
// start.style.width = "50%";
// start.style.boxSizing = "border-box";

// start.value = cell.getValue();

// function buildValues(){
// success({
//     start:start.value,
//     end:end.value,
// });
// }

// function keypress(e){
// if(e.keyCode == 13){
//     buildValues();
// }

// if(e.keyCode == 27){
//     cancel();
// }
// }

// end = start.cloneNode();
// end.setAttribute("placeholder", "Max");

// start.addEventListener("change", buildValues);
// start.addEventListener("blur", buildValues);
// start.addEventListener("keydown", keypress);

// end.addEventListener("change", buildValues);
// end.addEventListener("blur", buildValues);
// end.addEventListener("keydown", keypress);


// container.appendChild(start);
// container.appendChild(end);

// return container;
// }

// //custom max min filter function
// function minMaxFilterFunction(headerValue, rowValue, rowData, filterParams){
// //headerValue - the value of the header filter element
// //rowValue - the value of the column in this row
// //rowData - the data for the row being filtered
// //filterParams - params object passed to the headerFilterFuncParams property

//     if(rowValue){
//         if(headerValue.start != ""){
//             if(headerValue.end != ""){
//                 return rowValue >= headerValue.start && rowValue <= headerValue.end;
//             }else{
//                 return rowValue >= headerValue.start;
//             }
//         }else{
//             if(headerValue.end != ""){
//                 return rowValue <= headerValue.end;
//             }
//         }
//     }

// return true; //must return a boolean, true if it passes the filter.
// }

// //for min-max filter:  headerFilter:minMaxFilterEditor, headerFilterFunc:minMaxFilterFunction, headerFilterLiveFilter:false

// //tabulator script






// function addProduct1() {

// var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
// var theUrl = "https://api.trendyol.com/sapigw/suppliers/106606/v2/products";

// xmlhttp.addEventListener("readystatechange", function()  {
// if(this.readyState === 4) {
//   console.log(this.responseText);
//  // var resultText = xhr.responseText;
//   //window.alert(this.responseText);

// //var abc  = this.responseText.split("<");
//  // window.alert(abc[6] + "status"  +abc[10] +"mesaj eror"  +this.responseText);
//  window.alert(this.responseText.replace('{"batchRequestId":""',"").replace('"}"',""));

// if(this.responseText.includes("message"))  {}

//   window.alert("Tekrar istek atmadan önce bekleyiniz.!");

// }

// else {

// //  window.location.href = "http://127.0.0.1:5500/trendyolurunler.html#/";

// }
// }
// )

// var addProductData = {
// "items": [
// {
//   "barcode": "___barcode___",
//   "title": "___title___",
//   "productMainId": "___productMainId___",
//   "brandId": "___brandId___",
//   "categoryId": "___categoryId___",
//   "quantity": "___quantity___",
//   "stockCode": "___stockCode___",
//   "dimensionalWeight": "___dimensionalWeight___",
//   "description": "___description___",
//   "currencyType": "___currencyType___",
//   "listPrice": "___listPrice___",
//   "salePrice": "___salePrice___",
//   "vatRate": "___vatRate___",
//   "cargoCompanyId": "___cargoCompanyId___",
//   "images": [
//     {
//       "url": "___imgurl___"
//     }
//   ],
//   "attributes": [
//    {
//        "attributeId": "___attributeId___",
//        "customAttributeValue": "___customAttributeValue___"
//      }

//   ]
// }
// ]
// }

// var postData = JSON.stringify(addProductData);


// postData = postData.replace("___barcode___",document.getElementById("barcode").value);
// postData = postData.replace("___title___",document.getElementById("title").value);
// postData = postData.replace("___productMainId___",document.getElementById("productMainId").value);
// postData = postData.replace("___brandId___",document.getElementById("brandId").value);
// postData = postData.replace("___categoryId___",document.getElementById("categoryId").value);
// postData = postData.replace("___quantity___",document.getElementById("quantity").value);
// postData = postData.replace("___stockCode___",document.getElementById("stockCode").value);
// postData = postData.replace("___dimensionalWeight___",document.getElementById("dimensionalWeight").value);
// postData = postData.replace("___description___",document.getElementById("description").value);
// postData = postData.replace("___currencyType___",document.getElementById("currencyType").value);
// postData = postData.replace("___listPrice___",document.getElementById("listPrice").value);
// postData = postData.replace("___salePrice___",document.getElementById("salePrice").value);
// postData = postData.replace("___vatRate___",document.getElementById("vatRate").value);
// postData = postData.replace("___cargoCompanyId___",document.getElementById("cargoCompanyId").value);
// postData = postData.replace("___imgurl___",document.getElementById("image_url1").value);
// postData = postData.replace("___attributeId___",document.getElementById("attributeId").value);
// postData = postData.replace("___customAttributeValue___",document.getElementById("customAttributeValue").value);


// var count = 60, timer = setInterval(function() {
// $("#counter").html("Lütfen " +  count-- + " saniye bekleyiniz");
// if(count == 1) clearInterval(timer);
// }, 1000);


// //window.alert(postData);
// console.log(postData);

// xmlhttp.withCredentials = true;

// xmlhttp.open("POST", theUrl);
// xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
// //xmlhttp.setRequestHeader("Authorization", authenticateUser("khhNrOWJsRjpq5Jlsosh", "ljLwoxkV97S5LMyH0K8N"));
// xmlhttp.setRequestHeader("Authorization", "Basic a2hoTnJPV0pzUmpwcTVKbHNvc2g6bGpMd294a1Y5N1M1TE15SDBLOE4=");
// xmlhttp.send(postData);


// }

// function checkProductStatus() {

// var xhr = new XMLHttpRequest();

// xhr.addEventListener("readystatechange", function()  {
// if(this.readyState === 4) {
//   console.log(this.responseText);
//   var resultText = xhr.responseText;

// }
// })

// xhr.open("GET", "https://api.trendyol.com/sapigw/suppliers/106606/products/");
// //xhr.send();

// }


var trendyolproductadd = new Vue ({
  el: '#trendyolproductadd',
  data: {
    barcode: '',
    title: '',
    productMainId: '',
    brandId: '',
    categoryId: '',
    quantity: '',
    stockCode: '',
    dimensionalWeight: '',
    description: '',
    currencyType: '',
    listPrice: '',
    salePrice: '',
    cargoCompanyId: '',
    image_url1: '',
    vatRate: '',
    attributeId: '',
    customAttributeValue: '',
    currencyTypes: ["TRY"],
    cargoCompanyIds: ["MNG Kargo", "Aras KArgo", "Yurtçi Kargo Marketplace", "UPS Kargo", "PTT"],
  },
  methods:{
    addProduct1() {

      var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
      var theUrl = "https://api.trendyol.com/sapigw/suppliers/106606/v2/products";

      xmlhttp.addEventListener("readystatechange", function()  {
      if(this.readyState === 4) {
        console.log(this.responseText);
       // var resultText = xhr.responseText;
        //window.alert(this.responseText);

      //var abc  = this.responseText.split("<");
       // window.alert(abc[6] + "status"  +abc[10] +"mesaj eror"  +this.responseText);
       window.alert(this.responseText.replace('{"batchRequestId":""',"").replace('"}"',""));

      if(this.responseText.includes("message"))  {}

        window.alert("Tekrar istek atmadan önce bekleyiniz.!");

      }

      else {

      //  window.location.href = "http://127.0.0.1:5500/trendyolurunler.html#/";

      }
      }
      )

      var addProductData = {
      "items": [
      {
        "barcode": "___barcode___",
        "title": "___title___",
        "productMainId": "___productMainId___",
        "brandId": "___brandId___",
        "categoryId": "___categoryId___",
        "quantity": "___quantity___",
        "stockCode": "___stockCode___",
        "dimensionalWeight": "___dimensionalWeight___",
        "description": "___description___",
        "currencyType": "___currencyType___",
        "listPrice": "___listPrice___",
        "salePrice": "___salePrice___",
        "vatRate": "___vatRate___",
        "cargoCompanyId": "___cargoCompanyId___",
        "images": [
          {
            "url": "___imgurl___"
          }
        ],
        "attributes": [
         {
             "attributeId": "___attributeId___",
             "customAttributeValue": "___customAttributeValue___"
           }

        ]
      }
      ]
      }

      var postData = JSON.stringify(addProductData);


      postData = postData.replace("___barcode___",barcode.value);
      postData = postData.replace("___title___",title.value);
      postData = postData.replace("___productMainId___",productMainId.value);
      postData = postData.replace("___brandId___",brandId.value);
      postData = postData.replace("___categoryId___",categoryId.value);
      postData = postData.replace("___quantity___",quantity.value);
      postData = postData.replace("___stockCode___",stockCode.value);
      postData = postData.replace("___dimensionalWeight___",dimensionalWeight.value);
      postData = postData.replace("___description___",description.value);
      postData = postData.replace("___currencyType___",currencyType.value);
      postData = postData.replace("___listPrice___",listPrice.value);
      postData = postData.replace("___salePrice___",salePrice.value);
      postData = postData.replace("___vatRate___",vatRate.value);
      postData = postData.replace("___cargoCompanyId___",cargoCompanyId.value);
      postData = postData.replace("___imgurl___",image_url1.value);
      postData = postData.replace("___attributeId___",attributeId.value);
      postData = postData.replace("___customAttributeValue___",customAttributeValue.value);


      var count = 60, timer = setInterval(function() {
      $("#counter").html("Lütfen " +  count-- + " saniye bekleyiniz");
      if(count == 1) clearInterval(timer);
      }, 1000);


      //window.alert(postData);
      console.log(postData);

      xmlhttp.withCredentials = true;

      xmlhttp.open("POST", theUrl);
      xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      //xmlhttp.setRequestHeader("Authorization", authenticateUser("khhNrOWJsRjpq5Jlsosh", "ljLwoxkV97S5LMyH0K8N"));
      xmlhttp.setRequestHeader("Authorization", "Basic a2hoTnJPV0pzUmpwcTVKbHNvc2g6bGpMd294a1Y5N1M1TE15SDBLOE4=");
      xmlhttp.send(postData);


      }

      // function checkProductStatus() {

      // var xhr = new XMLHttpRequest();

      // xhr.addEventListener("readystatechange", function()  {
      // if(this.readyState === 4) {
      //   console.log(this.responseText);
      //   var resultText = xhr.responseText;

      // }
      // })

      // xhr.open("GET", "https://api.trendyol.com/sapigw/suppliers/106606/products/");
      // //xhr.send();

      // }
  }
});



