// var baseUrl = "http://localhost:8080";




//     function loadFile(filename, filetype) {
//       filename = filename + "?time=" + Date.now();
//       if (filetype == "js") { //if filename is a external JavaScript file
//         var fileref = document.createElement('script');
//         fileref.setAttribute("type", "text/javascript");
//         fileref.setAttribute("src", filename);
//       } else if (filetype == "css") { //if filename is an external CSS file
//         var fileref = document.createElement("link")
//         fileref.setAttribute("rel", "stylesheet")
//         fileref.setAttribute("type", "text/css")
//         fileref.setAttribute("href", filename)
//       }
//       if (typeof fileref != "undefined")
//         document.getElementsByTagName("head")[0].appendChild(fileref);
//     }



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
//     success({
//         start:start.value,
//         end:end.value,
//     });
// }

// function keypress(e){
//     if(e.keyCode == 13){
//         buildValues();
//     }

//     if(e.keyCode == 27){
//         cancel();
//     }
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
//     //headerValue - the value of the header filter element
//     //rowValue - the value of the column in this row
//     //rowData - the data for the row being filtered
//     //filterParams - params object passed to the headerFilterFuncParams property

//         if(rowValue){
//             if(headerValue.start != ""){
//                 if(headerValue.end != ""){
//                     return rowValue >= headerValue.start && rowValue <= headerValue.end;
//                 }else{
//                     return rowValue >= headerValue.start;
//                 }
//             }else{
//                 if(headerValue.end != ""){
//                     return rowValue <= headerValue.end;
//                 }
//             }
//         }

//     return true; //must return a boolean, true if it passes the filter.
// }

// //for min-max filter:  headerFilter:minMaxFilterEditor, headerFilterFunc:minMaxFilterFunction, headerFilterLiveFilter:false



// function flattenData(data){
// 	var output = [];
// 	function flatternRow(row){
// 		var outputRow = {};
// 		for(var prop in row){
// 			if(typeof row[prop] !== "object"){
// 				outputRow[prop] = row[prop];
// 			}else{
// 				var flat = flattenRow(row[prop]);
// 				for(var flatProp in flat){
// 					outputRow[prop + "_" + flatProp] = flat[flatProp];
// 				}
// 			}
// 		}
// 		return outputRow;
// 	}
// 	data.forEach(function(row){
// 		output.push(flatternRow(row));
// 	});
// 	return output;
// }

// var updateIcon = function(value, data, cell, row, options){ //plain text value
//     return "<i class='fa fa-folder-open'></i>"
// };

// var priceIcon = function(value, data, cell, row, options){ //plain text value
//     return "<i class='fa fa-folder-open'></i>"
// };

// //tabulator script
// var table = new Tabulator("#example-table", {
//   rowDblClick:function(e, row){
//     //e - the click event object
//     //row - row component
//     //window.alert(row.getData().price);

//     document.getElementById("hepsiburadaSku").value = row.getData().hepsiburadaSku;
//     document.getElementById("merchantSku").value = row.getData().merchantSku;
//     //document.getElementById("productName").value = row.getData().productName;
//     document.getElementById("price").value = row.getData().price;
//     document.getElementById("availableStock").value = row.getData().availableStock;
//     document.getElementById("dispatchTime").value = row.getData().dispatchTime;
//     document.getElementById("maximumPurchasableQuantity").value = row.getData().maximumPurchasableQuantity;



//     var modal = document.getElementById("myModal");
//     var btn = document.getElementById("myBtn");
//     var span = document.getElementsByClassName("close")[0];
//     modal.style.display = "block";
//     span.onclick = function() {
//     modal.style.display = "none";
// }


//     },
//     resizableRows:true,
//     selectable:true,
//     tooltips:true,
//     //dataTree:true,
//     //dataTreeChildField:"childRows",
// 		height:"311px",
// 		layout:"fitColumns",
// 		placeholder:"No Data Set",
// 		movableColumns:true,
// 		layout:"fitColumns",
// 		columns:[
// 			{title:"ID", field:"id", formatter:"rownum" ,sorter:"number", width:50,headerTooltip:true, },
//       {title:"hepsiburadaSku", field:"hepsiburadaSku", sorter:"string",headerFilter:"input",headerTooltip:true},
//       {title:"MerchantSku", field:"merchantSku", sorter:"string",  tooltip:true ,headerFilter:"input",headerFilterPlaceholder:"ara"},
//       {title:"Fiyatı", field:"price", sorter:"number", width:80,tooltip:true,},
//       {title:"Stok Adet", field:"availableStock", sorter:"string",tooltip:true,headerTooltip:true,headerFilter:"input",headerFilterPlaceholder:"ara"},
//       {title:"Kargo veriliş Süresi",visible:false, field:"dispatchTime", sorter:"string",tooltip:true,headerTooltip:true,headerFilter:"input",headerFilterPlaceholder:"ara"},
//       {title:"Karog Şirketi", field:"cargoCompany1", sorter:"string",headerFilter:"input",headerTooltip:true},
//       {title:"Kargo Adres", field:"shippingAddressLabel", sorter:"string",  tooltip:true ,headerFilter:"input",headerFilterPlaceholder:"ara" },
//       {title:"Komisyon Oranı", field:"commissionRate", sorter:"string",  tooltip:true ,headerFilter:"input",headerFilterPlaceholder:"ara" },

//       {title:"Açıklama",visible:false, field:"description", sorter:"string",  tooltip:true ,headerFilter:"input",headerFilterPlaceholder:"ara" },
//       {title:"Onay Durumu",visible:false, field:"approved", sorter:"string", headerTooltip:true},
//       {title:"dimensionalWeight",visible:false, field:"dimensionalWeight", sorter:"string",headerFilter:"input",headerTooltip:true},
//       {title:"Kur tipi",visible:false, field:"currencyType", sorter:"string",headerFilter:"input",headerTooltip:true},
//       {title:"Liste Fiyatı",visible:false, field:"listPrice", sorter:"string",headerFilter:"input",headerTooltip:true},
//       {title:"Satış fiyatı",visible:false, field:"salePrice", sorter:"string",headerFilter:"input",headerTooltip:true},

//       {title:"Güncelle" , sortable:false, formatter:updateIcon,cellClick:function(e, row){
//     //e - the click event object
//     //cell - cell component
//     document.getElementById("barcode").value = row.getData().barcode;


//     var modal = document.getElementById("myModal");
//     var btn = document.getElementById("myBtn");
//     var span = document.getElementsByClassName("close")[0];
//   //  modal.style.display = "block";
//     span.onclick = function() {
//     modal.style.display = "none";
// }


//     //window.alert("clickedd" +  cell.getData.salePrice);
//     }, }


// 		],
// 	});

// 	document.getElementById("download-xlsx").addEventListener("click", function(){
//     table.download("xlsx", "urunler_trendyol.xlsx", {sheetName:"Urun Listesi"});
// });

// 	document.getElementById("download-pdf").addEventListener("click", function(){
//     table.download("pdf", "urunler_trendyol.pdf", {
//         orientation:"portrait", //set page orientation to portrait
//         title:"Urun Listesi", //add title to report
//     });
// });


// function setProduct1() {

//    var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
//    var theUrl =baseUrl + "/ws_iltech_n11/ws/setproducthepsiburada";

//    xmlhttp.addEventListener("readystatechange", function()  {
//        if(this.readyState === 4) {
//          console.log(this.responseText);
//          var resultText = xhr.responseText;
//          window.alert(this.responseText);

//          if(this.responseText.includes("message")) {

//           window.alert("Lütfen Bilgileri Kontrol Ediniz.!");


//          }

//          else {

//           var obj = JSON.parse(this.responseText);
//         console.log(obj.id);


//          }





//        //var abc  = this.responseText.split("<");
//         // window.alert(abc[6] + "status"  +abc[10] +"mesaj eror"  +this.responseText);

//        }
//      })


// var setProductData = {

// 	"hepsiburadaSku" : "___hepsiburadaSku___",
// 	"merchantSku" : "___merchantSku___",
// 	"productName" : "___productName___",
// 	"price" : "___price___",
// 	"availableStock" : "___availableStock___",
// 	"dispatchTime" : "___dispatchTime___",
// 	"maximumPurchasableQuantity" : "0"
// }




//    var setData = JSON.stringify(setProductData);

//    setData = setData.replace("___hepsiburadaSku___",document.getElementById("hepsiburadaSku").value);
//    setData = setData.replace("___merchantSku___",document.getElementById("merchantSku").value);
//    setData = setData.replace("___productName___",document.getElementById("productName").value);
//    setData = setData.replace("___price___",document.getElementById("price").value);
//    setData = setData.replace("___availableStock___",document.getElementById("availableStock").value);
//    setData = setData.replace("___dispatchTime___",document.getElementById("dispatchTime").value);
//    //setData = setData.replace("___stockCode___",document.getElementById("stockCode").value);

//    //window.alert(postData);
//    console.log(setData);


//    xmlhttp.open("POST", theUrl);
//    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
//    xmlhttp.setRequestHeader("Authorization", "Basic cHJpbXVzY2FtX2RldjpQczEyMzQ1IQ==");
//    xmlhttp.send(setData);
//    }

//    function setProduct111() {

//    var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
//    var theUrl =baseUrl + "/ws_iltech_n11/ws/setproducthepsiburada";

//    xmlhttp.addEventListener("readystatechange", function()  {
//        if(this.readyState === 4) {
//          console.log(this.responseText);
//          var resultText = xhr.responseText;
//          window.alert(this.responseText);

//          if(this.responseText.includes("message")) {

//           window.alert("Lütfen Bilgileri Kontrol Ediniz.!");


//          }

//          else {

//           var obj = JSON.parse(this.responseText);
//         console.log(obj.id);


//          }





//        //var abc  = this.responseText.split("<");
//         // window.alert(abc[6] + "status"  +abc[10] +"mesaj eror"  +this.responseText);

//        }
//      })


// var getProductUpdateStatus = {

// 	"hepsiburadaSku" : "___hepsiburadaSku___",
// 	"merchantSku" : "___merchantSku___",
// 	"productName" : "___productName___",
// 	"price" : "___price___",
// 	"availableStock" : "___availableStock___",
// 	"dispatchTime" : "___dispatchTime___",
// 	"maximumPurchasableQuantity" : "0"
// }




//    var setData = JSON.stringify(setProductData);

//    setData = setData.replace("___hepsiburadaSku___",document.getElementById("hepsiburadaSku").value);
//    setData = setData.replace("___merchantSku___",document.getElementById("merchantSku").value);
//    setData = setData.replace("___productName___",document.getElementById("productName").value);
//    setData = setData.replace("___price___",document.getElementById("price").value);
//    setData = setData.replace("___availableStock___",document.getElementById("availableStock").value);
//    setData = setData.replace("___dispatchTime___",document.getElementById("dispatchTime").value);
//    //setData = setData.replace("___stockCode___",document.getElementById("stockCode").value);

//    //window.alert(postData);
//    console.log(setData);


//    xmlhttp.open("POST", theUrl);
//    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
//    xmlhttp.setRequestHeader("Authorization", "Basic cHJpbXVzY2FtX2RldjpQczEyMzQ1IQ==");
//    xmlhttp.send(setData);
//    }





// var xhr = new XMLHttpRequest();

//   xhr.addEventListener("readystatechange", function()  {
//     if(this.readyState === 4) {
//      // console.log(this.responseText);
//       var resultText = xhr.responseText;
//       console.log(this.responseText.replace("{\"listings\":","").replace(",\"totalCount\":34,\"limit\":34,\"offset\":0}",""));
//       table.setData(this.responseText.replace("{\"listings\":","").replace(",\"totalCount\":34,\"limit\":34,\"offset\":0}",""));

//     //table.setData(resultText.replace("{\"listaings\":[{","").replace("}]}","}]").replace("\"totalCount\": 34, \"limit\": 34, \"offset\": 0","").replace("{\"totalElements\":3,","").replace("{\"totalElements\":4,","").replace("{\"totalElements\":5,",""));

//     //table.setData(tableData222);
//     //window.alert(resultText.replace("{\"totalElements\":1,\"totalPages\":1,\"page\":0,\"size\":10,\"content\":","").replace("}]}","}]"));

//     }
//   })



//   //xhr.open("GET", "http://localhost:8080/ws_iltech_n11/ws/xmltojsonT");
//   xhr.open("GET", "http://localhost:8080/ws_iltech_n11/ws/getproductshepsiburada");
//   xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
//   xhr.setRequestHeader("Authorization", "Basic cHJpbXVzY2FtX2RldjpQczEyMzQ1IQ==");

//   //xhr.setRequestHeader("Authorization", "Basic " + auth);

//   xhr.send();
(async function loadData() {
  let url = 'http://51.68.195.202:8080/ws_iltech_n11/ws/getproductshepsiburada';
  let response = await fetch(url);
  let commits = await response.json(); // читаем ответ в формате JSON
  let get_smth = commits;
  let obj = get_smth.listings;
  console.log(obj);
  if(obj.length != 0){
    new Vue({
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
                    title:"hepsiburadaSku",
                    field:"hepsiburadaSku",
                    sorter:"string",
                    headerFilter:"input",
                    headerTooltip:true,
                    width: 170,
                    editor: true,
                  },

                  {
                    title:"MerchantSku",
                    field:"merchantSku",
                    sorter:"string",
                    tooltip:true ,
                    headerFilter:"input",
                    headerFilterPlaceholder:"ara",
                    width: 170,
                    editor: true,
                  },
                  {
                    title:"Fiyatı",
                    field:"price",
                    sorter:"number",
                    width:180,
                    tooltip:true,
                    editor: true,
                  },

                  {
                    title:"Stok Adet",
                    field:"quantity",
                    sorter: 'string',
                    width: 166,
                    editor: true,
                    tooltip:true,
                  },

                  {
                    title:"Kargo veriliş Süresi",
                    visible:false,
                    field:"dispatchTime",
                    sorter:"string",
                    tooltip:true,
                    headerTooltip:true,
                    headerFilter:"input",
                    headerFilterPlaceholder:"ara",
                    editor: true,
                    width:170,
                  },

                  {
                    title:"Karog Şirketi",
                    field:"cargoCompany1",
                    sorter:"string",
                    headerFilter:"input",
                    headerTooltip:true,
                    width: 170,
                    editor: true,
                  },

                  {
                    title:"Kargo Adres",
                    field:"shippingAddressLabel",
                    sorter:"string",
                    tooltip:true ,
                    headerFilter:"input",
                    headerFilterPlaceholder:"ara",
                    width: 190,
                    editor: true,
                  },

                  {
                    title:"Komisyon Oranı",
                    field:"commissionRate",
                    sorter:"string",
                    tooltip:true ,
                    headerFilter:"input",
                    headerFilterPlaceholder:"ara",
                    width: 187,
                    editor: true,
                  },

                  {
                    title:"Açıklama",
                    visible:false,
                    field:"description",
                    sorter:"string",
                    tooltip:true ,
                    headerFilter:"input",
                    headerFilterPlaceholder:"ara",
                    width: 190,
                    editor: true,
                  },

                  {
                    title:"Onay Durumu",
                    visible:false,
                    field:"approved",
                    sorter:"string",
                    headerTooltip:true,
                    editor: true,
                  },

                  {
                    title:"dimensionalWeight",
                    visible:false,
                    field:"dimensionalWeight",
                    sorter:"string",
                    headerFilter:"input",
                    headerTooltip:true,
                    editor: true,
                  },

                  {
                    title:"Kur tipi",
                    visible:false,
                    field:"currencyType",
                    sorter:"string",
                    headerFilter:"input",
                    headerTooltip:true,
                    editor: true,
                  },

                  {
                    title:"Liste Fiyatı",
                    visible:false,
                    field:"listPrice",
                    sorter:"string",
                    headerFilter:"input",
                    headerTooltip:true,
                    editor: true,
                  },

                  {
                    title:"Satış fiyatı",
                    visible:false,
                    field:"salePrice",
                    sorter:"string",
                    headerFilter:"input",
                    headerTooltip:true,
                    editor: true,
                  },

                  {
                    title:"Güncelle" ,
                    field:"Güncelle",
                    sortable:false,
                    width: 300,
                //     formatter:updateIcon,cellClick:function(e, row){
                //     //e - the click event object
                //     //cell - cell component
                //     document.getElementById("barcode").value = row.getData().barcode;


                //     var modal = document.getElementById("myModal");
                //     var btn = document.getElementById("myBtn");
                //     var span = document.getElementsByClassName("close")[0];
                //   //  modal.style.display = "block";
                //     span.onclick = function() {
                //     modal.style.display = "none";
                // }


                //     //window.alert("clickedd" +  cell.getData.salePrice);
                //     },
                  }
                ],
              }
          }
      }
    });
  }
}());





