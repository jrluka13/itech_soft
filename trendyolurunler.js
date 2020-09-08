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



// function flattenData(data){
// var output = [];
// function flatternRow(row){
// var outputRow = {};
// for(var prop in row){
//   if(typeof row[prop] !== "object"){
//     outputRow[prop] = row[prop];
//   }else{
//     var flat = flattenRow(row[prop]);
//     for(var flatProp in flat){
//       outputRow[prop + "_" + flatProp] = flat[flatProp];
//     }
//   }
// }
// return outputRow;
// }
// data.forEach(function(row){
// output.push(flatternRow(row));
// });
// return output;
// }

// var updateIcon = function(value, data, cell, row, options){ //plain text value
// return "<i class='fa fa-folder-open'></i>"
// };

// var priceIcon = function(value, data, cell, row, options){ //plain text value
// return "<i class='fa fa-folder-open'></i>"
// };

// //tabulator script
// var table = new Tabulator("#example-table", {
// rowDblClick:function(e, row){
// //e - the click event object
// //row - row component
// //window.alert(row.getData().price);

// document.getElementById("barcode").value = row.getData().barcode;
// document.getElementById("title").value = row.getData().title;
// document.getElementById("productMainId").value = row.getData().productMainId;
// //document.getElementById("brandId").value = row.getData().brandId;
// //document.getElementById("categoryId").value = row.getData().categoryId;
// document.getElementById("quantity").value = row.getData().quantity;
// document.getElementById("stockCode").value = row.getData().stockCode;
// document.getElementById("dimensionalWeight").value = row.getData().dimensionalWeight;
// document.getElementById("description").value = row.getData().description;
// //document.getElementById("currencyType").value = row.getData().currencyType;
// document.getElementById("listPrice").value = row.getData().listPrice;
// document.getElementById("salePrice").value = row.getData().salePrice;
// // document.getElementById("cargoCompanyId").value = row.getData().cargoCompanyId;
// // document.getElementById("img").value = row.getData().salePrice;
// document.getElementById("vatRate").value = row.getData().vatRate;
// //document.getElementById("img").value = row.getData().at;

// var modal = document.getElementById("myModal");
// var btn = document.getElementById("myBtn");
// var span = document.getElementsByClassName("close")[0];
// modal.style.display = "block";
// span.onclick = function() {
// modal.style.display = "none";
// }


// },
// resizableRows:true,
// selectable:true,
// tooltips:true,
// //dataTree:true,
// //dataTreeChildField:"childRows",
// height:"311px",
// layout:"fitColumns",
// placeholder:"No Data Set",
// movableColumns:true,
// layout:"fitColumns",
// columns:[
//   {title:"ID", field:"id", formatter:"rownum" ,sorter:"number", width:50,headerTooltip:true, },
//   {title:"Barkod", field:"barcode", sorter:"string",headerFilter:"input",headerTooltip:true},
//   {title:"Ürün Adı", field:"title", sorter:"string",  tooltip:true ,headerFilter:"input",headerFilterPlaceholder:"ara"},
//   {title:"Marka Id", visible:false, field:"brandId",headerTooltip:true, },
//   {title:"Ürün Ana Numarası",visible:false, field:"productMainId" ,sorter:"string",headerTooltip:true, },

//   {title:"Ürün Kodu", field:"productCode", sorter:"string",headerFilter:"input",headerTooltip:true},
//   {title:"Ürün Adı", field:"title", sorter:"string",  tooltip:true ,headerFilter:"input",headerFilterPlaceholder:"ara" },
//   {title:"Kategori Adı", field:"categoryName", sorter:"string",  tooltip:true ,headerFilter:"input",headerFilterPlaceholder:"ara" },
//   {title:"Açıklama", field:"description", sorter:"string",  tooltip:true ,headerFilter:"input",headerFilterPlaceholder:"ara" },
//   {title:"Stok Adet", field:"quantity", sorter:"string",tooltip:true,headerTooltip:true,headerFilter:"input",headerFilterPlaceholder:"ara"},
//   {title:"Stok Kodu",visible:false, field:"stockCode", sorter:"string",tooltip:true,headerTooltip:true,headerFilter:"input",headerFilterPlaceholder:"ara"},
//   {title:"Onay Durumu", field:"approved", sorter:"string", headerTooltip:true},
//   {title:"Fiyatı", field:"salePrice", sorter:"number", width:80,tooltip:true,},
//   {title:"dimensionalWeight",visible:false, field:"dimensionalWeight", sorter:"string",headerFilter:"input",headerTooltip:true},
//   {title:"Kur tipi",visible:false, field:"currencyType", sorter:"string",headerFilter:"input",headerTooltip:true},
//   {title:"Liste Fiyatı",visible:false, field:"listPrice", sorter:"string",headerFilter:"input",headerTooltip:true},
//   {title:"Satış fiyatı",visible:false, field:"salePrice", sorter:"string",headerFilter:"input",headerTooltip:true},
//  // {title:"Kargo Şirket Id",visible:true, field:"cargoCompanyId", sorter:"string",headerFilter:"input",headerTooltip:true},
// //  {title:"Kargo Id",visible:true, field:"attributes.name", sorter:"string",headerFilter:"input",headerTooltip:true},

//   {title:"Kdv Oranı",visible:false, field:"vatRate", sorter:"string",headerFilter:"input",headerTooltip:true},
//   {title:"Güncelle" , sortable:false, formatter:updateIcon,cellClick:function(e, row){
// //e - the click event object
// //cell - cell component
// document.getElementById("barcode").value = row.getData().barcode;


// var modal = document.getElementById("myModal");
// var btn = document.getElementById("myBtn");
// var span = document.getElementsByClassName("close")[0];
// //  modal.style.display = "block";
// span.onclick = function() {
// modal.style.display = "none";
// }


// // window.alert("clickedd" +  cell.getData.salePrice);
// }, }


// ],
// });

// document.getElementById("download-xlsx").addEventListener("click", function(){
// table.download("xlsx", "urunler_trendyol.xlsx", {sheetName:"Urun Listesi"});
// });

// document.getElementById("download-pdf").addEventListener("click", function(){
// table.download("pdf", "urunler_trendyol.pdf", {
//     orientation:"portrait", //set page orientation to portrait
//     title:"Urun Listesi", //add title to report
// });
// });


// function setProduct1() {

// var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
// var theUrl = "https://api.trendyol.com/sapigw/suppliers/106606/v2/products";

// xmlhttp.addEventListener("readystatechange", function()  {
//    if(this.readyState === 4) {
//      console.log(this.responseText);
//      var resultText = xhr.responseText;
//     // window.alert(this.responseText);

//      setProductStockPrice();

//      if(this.responseText.includes("message")) {

//       //window.alert("Lütfen 5 dk sonra tekrar deneyiniz");


//      }

//    //var abc  = this.responseText.split("<");
//     // window.alert(abc[6] + "status"  +abc[10] +"mesaj eror"  +this.responseText);

//    }
//  })


// var setProductData = {
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


// var putData = JSON.stringify(setProductData);

// putData = putData.replace("___barcode___",document.getElementById("barcode").value);
// putData = putData.replace("___title___",document.getElementById("title").value);
// putData = putData.replace("___productMainId___",document.getElementById("productMainId").value);
// putData = putData.replace("___brandId___",document.getElementById("brandId").value);
// putData = putData.replace("___categoryId___",document.getElementById("categoryId").value);
// putData = putData.replace("___quantity___",document.getElementById("quantity").value);
// putData = putData.replace("___stockCode___",document.getElementById("stockCode").value);
// putData = putData.replace("___dimensionalWeight___",document.getElementById("dimensionalWeight").value);
// putData = putData.replace("___description___",document.getElementById("description").value);
// putData = putData.replace("___currencyType___",document.getElementById("currencyType").value);
// putData = putData.replace("___listPrice___",document.getElementById("listPrice").value);
// putData = putData.replace("___salePrice___",document.getElementById("salePrice").value);
// putData = putData.replace("___vatRate___",document.getElementById("vatRate").value);
// putData = putData.replace("___cargoCompanyId___",document.getElementById("cargoCompanyId").value);
// putData = putData.replace("___imgurl___",document.getElementById("image_url1").value);
// putData = putData.replace("___attributeId___",document.getElementById("attributeId").value);
// putData = putData.replace("___customAttributeValue___",document.getElementById("customAttributeValue").value);

// //window.alert(postData);
// console.log(putData);


// xmlhttp.open("PUT", theUrl);
// xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
// xmlhttp.setRequestHeader("Authorization", "Basic a2hoTnJPV0pzUmpwcTVKbHNvc2g6bGpMd294a1Y5N1M1TE15SDBLOE4=");
// xmlhttp.send(putData);
// }


// function setProductStockPrice() {

// var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
// var theUrl = "https://api.trendyol.com/sapigw/suppliers/106606/products/price-and-inventory";

// xmlhttp.addEventListener("readystatechange", function()  {
//    if(this.readyState === 4) {
//      console.log(this.responseText);
//      var resultText = xhr.responseText;
//      window.alert(this.responseText);



//      if(this.responseText.includes("message")) {

//       //window.alert("Lütfen 5 dk sonra tekrar deneyiniz");


//      }

//    //var abc  = this.responseText.split("<");
//     // window.alert(abc[6] + "status"  +abc[10] +"mesaj eror"  +this.responseText);

//    }
//  })


// var setProductData = {


// "items": [
// {
//   "barcode": "___barcode___",
//   "quantity": "___quantity___",
//   "salePrice": "___salePrice___",
//   "listPrice": "___listPrice___"
// }
// ]
// }


// var putData = JSON.stringify(setProductData);

// putData = putData.replace("___barcode___",document.getElementById("barcode").value);
// putData = putData.replace("___quantity___",document.getElementById("quantity").value);
// putData = putData.replace("___listPrice___",document.getElementById("listPrice").value);
// putData = putData.replace("___salePrice___",document.getElementById("salePrice").value);

// //window.alert(postData);
// console.log(putData);


// xmlhttp.open("POST", theUrl);
// xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
// xmlhttp.setRequestHeader("Authorization", "Basic a2hoTnJPV0pzUmpwcTVKbHNvc2g6bGpMd294a1Y5N1M1TE15SDBLOE4=");
// xmlhttp.send(putData);
// }





// var xhr = new XMLHttpRequest();

// xhr.addEventListener("readystatechange", function()  {
// if(this.readyState === 4) {
//  // console.log(this.responseText);
//   var resultText = xhr.responseText;

// // resultText.splice();

//  // var myData = resultText.replace("{\"categories\":","").replace("81,\"subCategories\":[]}]}]}","81,\"subCategories\":[]}]}]")

//   //myData.substr(myData.length - 1);

// table.setData(resultText.replace("\"totalPages\":1,\"page\":0,\"size\":10,\"content\":","").replace("}]}","}]").replace("{\"totalElements\":2,","").replace("{\"totalElements\":3,","").replace("{\"totalElements\":4,","").replace("{\"totalElements\":5,","").replace("{\"totalElements\":6,","").replace("{\"totalElements\":7,","").replace("{\"totalElements\":8,",""));
// //window.alert(resultText.replace("{\"totalElements\":1,\"totalPages\":1,\"page\":0,\"size\":10,\"content\":","").replace("}]}","}]"));

// }
// })

// var url = "http://localhost:8080/ws_iltech_n11/ws/getproductstrendyol?supplier_id=106606&approved=";


// xhr.open("GET", url);
// //xhr.setRequestHeader("Authorization", "Basic " + auth);
// xhr.send();

(async function loadData() {
  let url = 'http://51.68.195.202:8080/ws_iltech_n11/ws/getproductstrendyol?supplier_id=112308&approved=';
  let response = await fetch(url);
  let commits = await response.json(); // читаем ответ в формате JSON
  let get_smth = commits;
  let obj = get_smth.content;
  console.log(obj);

  if(obj.length != 0){
    new Vue({
      el: '#example-table',
      data() {
          return {
              dados: obj,
              options: {
                  columns: [{

                      title:"ID",
                      field:"id",
                      formatter:"rownum",
                      sorter:"number",
                      width:50,
                      headerTooltip:true,
                      editor: true,
                    },

                  {
                    title:"Barkod",
                    field:"barcode",
                    sorter:"string",
                    width:170,
                    headerFilter:"input",
                    headerTooltip:true,
                    editor: true,
                  },

                  {
                    title:"Ürün Adı",
                    field:"title",
                    sorter:"string",
                    width:170,
                    tooltip:true ,
                    headerFilter:"input",
                    headerFilterPlaceholder:"ara",
                    editor: true,
                  },
                  {
                    title:"Marka Id",
                    visible:false,
                    field:"brandId",
                    width:170,
                    headerTooltip:true,
                    editor: true,
                  },

                  {
                    title:"Ürün Ana Numarası",
                    visible:false,
                    field:"productMainId",
                    width:170,
                    sorter:"string",
                    headerTooltip:true,
                    editor: true,
                  },

                  {
                    title:"Ürün Kodu",
                    field:"productCode",
                    width:170,
                    sorter:"string",
                    headerFilter:"input",
                    headerTooltip:true,
                    editor: true,
                  },

                  {
                    title:"Ürün Adı",
                    field:"title",
                    width:170,
                    sorter:"string",
                    tooltip:true,
                    headerFilter:"input",
                    headerFilterPlaceholder:"ara",
                    editor: true,
                  },

                  {
                    title:"Kategori Adı",
                    field:"categoryName",
                    width:170,
                    sorter:"string",
                    tooltip:true,
                    headerFilter:"input",
                    headerFilterPlaceholder:"ara",
                    editor: true,
                  },

                  {
                    title:"Açıklama",
                    field:"description",
                    width:153,
                    sorter:"string",
                    tooltip:true,
                    headerFilter:"input",
                    headerFilterPlaceholder:"ara",
                    editor: true,
                  },

                  {
                    title:"Stok Adet",
                    field:"quantity",
                    width:150,
                    sorter:"string",
                    tooltip:true,
                    headerTooltip:true,
                    headerFilter:"input",
                    headerFilterPlaceholder:"ara",
                    editor: true,
                  },

                  {
                    title:"Stok Kodu",
                    visible:false,
                    field:"stockCode",
                    width:150,
                    sorter:"string",
                    tooltip:true,
                    headerTooltip:true,
                    headerFilter:"input",
                    headerFilterPlaceholder:"ara",
                    editor: true,
                  },

                  {
                    title:"Onay Durumu",
                    field:"approved",
                    width:150,
                    sorter:"string",
                    headerTooltip:true,
                    editor: true,
                  },

                  {
                    title:"Fiyatı",
                    field:"salePrice",
                    sorter:"number",
                    width:80,
                    tooltip:true,
                    editor: true,
                  },

                  {
                    title:"dimensionalWeight",
                    visible:false,
                    field:"dimensionalWeight",
                    width:150,
                    sorter:"string",
                    headerFilter:"input",
                    headerTooltip:true,
                    editor: true,
                  },

                  {
                    title:"Kur tipi",
                    visible:false,
                    field:"currencyType",
                    width:170,
                    sorter:"string",
                    headerFilter:"input",
                    headerTooltip:true,
                    editor: true,
                  },

                  {
                    title:"Liste Fiyatı",
                    visible:false,
                    field:"listPrice",
                    width:170,
                    sorter:"string",
                    headerFilter:"input",
                    headerTooltip:true,
                    editor: true,
                  },

                  {
                    title:"Satış fiyatı",
                    visible:false,
                    field:"salePrice",
                    width:170,
                    sorter:"string",
                    headerFilter:"input",
                    headerTooltip:true,
                    editor: true,
                  },

                  //{title:"Kargo Şirket Id",visible:true, field:"cargoCompanyId", sorter:"string",headerFilter:"input",headerTooltip:true},
                  //{title:"Kargo Id",visible:true, field:"attributes.name", sorter:"string",headerFilter:"input",headerTooltip:true},

                  {
                    title:"Kdv Oranı",
                    visible:false,
                    field:"vatRate",
                    width:170,
                    sorter:"string",
                    headerFilter:"input",
                    headerTooltip:true,
                    editor: true,
                  },

                  {
                    title:"Güncelle" ,
                    field:"Güncelle",
                    sortable:false,
                    width:150,
                    // formatter:updateIcon,
                    // cellClick:function(e, row){
                    //       //e - the click event object
                    //       //cell - cell component
                    //       document.getElementById("barcode").value = row.getData().barcode;


                    //       var modal = document.getElementById("myModal");
                    //       var btn = document.getElementById("myBtn");
                    //       var span = document.getElementsByClassName("close")[0];
                    //       //  modal.style.display = "block";
                    //       span.onclick = function() {
                    //       modal.style.display = "none";
                    //       }


                    //       // window.alert("clickedd" +  cell.getData.salePrice);
                    //       },
                  },
                ],
              }
          }
      }
    });
  }
}());



















