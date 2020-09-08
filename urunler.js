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

// var deleteIcon = function(value, data, cell, row, options){ //plain text value
// return "<i class='fa fa-trash'></i>"
// };

// //tabulator script
// var table = new Tabulator("#example-table", {

// rowDblClick:function(e, row){
// //e - the click event object
// //row - row component
// //window.alert(row.getData().price);

// document.getElementById("productSellerCode").value = row.getData().productSellerCode;
// document.getElementById("price").value = row.getData().price;
// document.getElementById("title").value = row.getData().title;
// document.getElementById("subtitle").value = row.getData().subtitle;
// document.getElementById("productId").value = row.getData().productId;
// document.getElementById("quantity").value = row.getData().quantity;
// document.getElementById("stockItem_Id").value = row.getData().id;
// //document.getElementById("discount_type").value = row.getData().discount_type;
// //document.getElementById("discount_value").value = row.getData().discount_value;

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
// height:"311px",
// layout:"fitColumns",
// placeholder:"No Data Set",
// movableColumns:true,
// layout:"fitColumns",
// columns:[
//   {title:"ID", field:"row_id", formatter:"rownum" ,sorter:"number", width:50,headerTooltip:true, },
//   {title:"Ürün Id", field:"productId" ,sorter:"number",headerTooltip:true, },
//   {title:"Ürün Satış Kodu", field:"productSellerCode", sorter:"string",tooltip:true,headerTooltip:true,headerFilter:"input",headerFilterPlaceholder:"ara"},
//   {title:"Başlık", field:"title", sorter:"string",  tooltip:true ,headerFilter:"input",headerFilterPlaceholder:"ara" },
//   {title:"Altbaşlık", field:"subtitle", sorter:"string",tooltip:true,headerFilter:"input",headerFilterPlaceholder:"ara"},
//   {title:"Fiyat", field:"price", sorter:"number", width:140,tooltip:true,},
//   {title:"Stok Adet", field:"quantity", sorter:"string",tooltip:true,},
//   {title:"Onay Durumu", field:"approvalStatus", sorter:"string",width:140, headerTooltip:true},
//   {title:"Kur Tipi",visible:false, field:"currencyType", sorter:"string",headerTooltip:true},
//   {title:"Stok Id", field:"id", sorter:"string",headerTooltip:true},
//   {title:"Indirim Tipi",visible:false, field:"discount_type", sorter:"string",headerTooltip:true},
//   {title:"Indirim Degeri",visible:false, field:"discount_value", sorter:"string",headerTooltip:true},
//   {title:"Sil" , sortable:false, formatter:deleteIcon,width:60,cellClick:function(e, row){

//     delProduct1(row.getData().productId);
// },}
// ],
// });

// document.getElementById("download-xlsx").addEventListener("click", function(){
// table.download("xlsx", "urunler_n11.xlsx", {sheetName:"Urun Listesi"});
// });

// document.getElementById("download-pdf").addEventListener("click", function(){
// table.download("pdf", "urunler_n11.pdf", {
//     orientation:"portrait", //set page orientation to portrait
//     title:"Urun Listesi", //add title to report
// });
// });


// var xhr = new XMLHttpRequest();

// xhr.addEventListener("readystatechange", function()  {
// if(this.readyState === 4) {
//   console.log(this.responseText);
//   var resultText = xhr.responseText;
//  // window.alert(resultText.replace("{\"product\":","").replace("}]}","}]"));
//   table.setData(resultText.replace("{\"product\":","").replace("}]}","}]"));
// //table.setData(resultText.replace("{\"totalElements\":1,\"totalPages\":1,\"page\":0,\"size\":10,\"content\":","").replace("}]}","}]"));
// //window.alert(resultText.replace("{\"totalElements\":1,\"totalPages\":1,\"page\":0,\"size\":10,\"content\":","").replace("}]}","}]"));

// }
// })

// xhr.open("GET", "http://localhost:8080/ws_iltech_n11/ws/getproductsn11");
// //xhr.open("GET", "http://localhost:8080/ws_iltech_n11/ws/getproductstrendyol");

// //xhr.setRequestHeader("Authorization", "Basic " + auth);

// xhr.send();


// //Set Product
// function setProduct1() {

// var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
// var theUrl = "http://localhost:8080/ws_iltech_n11/ws/setproductbasic";

// xmlhttp.addEventListener("readystatechange", function()  {
//    if(this.readyState === 4) {
//      console.log(this.responseText);
//      var resultText = xhr.responseText;
//      window.alert(this.responseText);

//      if(this.responseText.includes("error")) {

//        var count = 60, timer = setInterval(function() {

//      $("#counter").css("visibility", "visible");
//      $("#counter").html("Lütfen " +  count-- + " saniye bekleyiniz");
//      if(count == 0) {
//          clearInterval(timer);
//       $("#counter").css("visibility", "hidden");
//         }
//           }, 1000);

//      }

//    //var abc  = this.responseText.split("<");
//     // window.alert(abc[6] + "status"  +abc[10] +"mesaj eror"  +this.responseText);

//    }
//  })

// var setProductData = {
//            "appKey":"___appKey___",
//            "appSecret":"___appSecret___",
//            "productId":"___productId___",
//            "productSellerCode":"___productSellerCode___",
//            "price":"___price___",
//            "discount_type":"___discount_type___",
//            "discount_value":"___discount_value___",
//            "description":"",
//            "stockItem_Id":"___stockItem_id___",
//            "stockItem_quantity1":"___quantity__"
//          //  "image_url1":"___img_url1___",
//          //  "image_order1":"___img_order1___"

//        }

// var postData = JSON.stringify(setProductData);

// postData = postData.replace("___appKey___","71faab12-d47e-432e-a4a2-5546c49cb1c4");
// postData = postData.replace("___appSecret___","FrOoxTV9Mk4R5KI5");
// postData = postData.replace("___productId___",document.getElementById("productId").value);
// postData = postData.replace("___productSellerCode___",document.getElementById("productSellerCode").value);
// postData = postData.replace("___price___",document.getElementById("price").value);
// postData = postData.replace("___discount_type___",document.getElementById("discount_type").value);
// postData = postData.replace("___discount_value___",document.getElementById("discount_value").value);
// //postData = postData.replace("___description___",document.getElementById("description").value);
// postData = postData.replace("___stockItem_id___",document.getElementById("stockItem_Id").value);
// postData = postData.replace("___quantity__",document.getElementById("quantity").value);
// postData = postData.replace("___img_url1___",document.getElementById("image_url1").value);
// postData = postData.replace("___img_order1___",document.getElementById("image_order1").value);

// //window.alert(postData);
// console.log(postData);


// xmlhttp.open("POST", theUrl);
// xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
// xmlhttp.send(postData);
// }


// function delProduct1(product_id) {

// var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
// var theUrl = "http://localhost:8080/ws_iltech_n11/ws/delproductn11";

// xmlhttp.addEventListener("readystatechange", function()  {
//    if(this.readyState === 4) {
//      console.log(this.responseText);
//      var resultText = xhr.responseText;
//      window.alert(this.responseText);

//    //var abc  = this.responseText.split("<");
//     // window.alert(abc[6] + "status"  +abc[10] +"mesaj eror"  +this.responseText);

//    }
//  })

// var addProductData = {
//            "appKey":"___appKey___",
//            "appSecret":"___appSecret___",
//            "productId":"___productId___"
// }

// var postData = JSON.stringify(addProductData);

// postData = postData.replace("___appKey___","71faab12-d47e-432e-a4a2-5546c49cb1c4");
// postData = postData.replace("___appSecret___","FrOoxTV9Mk4R5KI5");
// postData = postData.replace("___productId___",product_id);

// //window.alert(postData);
// console.log(postData);


// xmlhttp.open("POST", theUrl);
// xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
// xmlhttp.send(postData);

// }


(async function loadData() {
  let url = 'http://51.68.195.202:8080/ws_iltech_n11/ws/getproductsn11';
  let response = await fetch(url);
  let commits = await response.json(); // читаем ответ в формате JSON
  let get_smth = commits;
  let obj = get_smth.product;
  console.log(obj);
  if(obj.length != 0){
    var vm = new Vue({
      el: '#example-table',

      data() {
          return {

              dados: obj,
              options: {
                  columns: [{

                      formatter:"rownum" ,
                      sorter:"number",
                      width:50,
                      headerTooltip:true,
                      title:"ID",
                      field:"row_id",
                      editor: true,
                    },

                  {
                    title:"Ürün Id",
                    field:"productId" ,
                    width: 190,
                    editor: true,
                    sorter:"number",
                    headerTooltip:true,
                  },

                  {
                    title:"Ürün Satış Kodu",
                    field:"productSellerCode",
                    width: 190,
                    editor: true,
                    headerFilter:"input",
                    headerFilterPlaceholder:"ara",
                    sorter:"string",
                    tooltip:true,
                    headerTooltip:true,
                  },
                  {
                    title:"Başlık",
                    field:"title",
                    sorter: 'string',
                    width: 190,
                    editor: true,
                    tooltip:true ,
                    headerFilter:"input",
                    headerFilterPlaceholder:"ara",
                  },

                  {
                    title:"Altbaşlık",
                    field:"subtitle",
                    sorter: 'string',
                    width: 173,
                    editor: true,
                    tooltip:true,
                    headerFilter:"input",
                    headerFilterPlaceholder:"ara",
                  },

                  {
                    title:"Fiyat",
                    field:"price",
                    editor: true,
                    sorter:"number",
                    width:140,
                    tooltip:true,
                  },

                  {
                    title:"Stok Adet",
                    field:"quantity",
                    sorter: 'string',
                    width: 170,
                    editor: true,
                    tooltip:true,
                  },

                  {
                    title:"Onay Durumu",
                    field:"approvalStatus",
                    sorter: 'string',
                    editor: true,
                    width:140,
                    headerTooltip:true,
                  },

                  {
                    title:"Kur Tipi",
                    field:"currencyType",
                    sorter: 'string',
                    width: 170,
                    editor: true,
                    visible:false,
                    headerTooltip:true,
                  },

                  {
                    title:"Stok Id",
                    field:"id",
                    sorter: 'string',
                    width: 170,
                    editor: true,
                    headerTooltip:true
                  },

                  {
                    title:"Indirim Tipi",
                    field:"discount_type",
                    sorter: 'string',
                    width: 170,
                    editor: true,
                    visible:false,
                    headerTooltip:true
                  },

                  {
                    title:"Indirim Degeri",
                    field:"discount_value",
                    sorter: 'string',
                    width: 170,
                    editor: true,
                    visible:false,
                    headerTooltip:true,
                  },

                  {
                    title:"Sil" ,
                    field:"discount_value",
                    sorter: 'string',
                    width: 170,
                    editor: true,
                    sortable:false,
                    //formatter:deleteIcon,
                    // cellClick:function(e, row){
                    //     delProduct1(row.getData().productId);
                    // },
                  }
                ],
              },
          }
      },

    });
  }
}());











