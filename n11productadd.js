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
// var theUrl = "http://localhost:8080/ws_iltech_n11/ws/saveproduct";

// xmlhttp.addEventListener("readystatechange", function()  {
// if(this.readyState === 4) {
//   console.log(this.responseText);
//  // var resultText = xhr.responseText;
//   window.alert(this.responseText);

//  //var abc  = this.responseText.split("<");
//  // window.alert(abc[6] + "status"  +abc[10] +"mesaj eror"  +this.responseText);

//  if(this.resultText.includes("success")) {

//   //window.location.href = "http://127.0.0.1:5500/urunler.html#/";
//  }



// }
// })

// var addProductData = {
//         "appKey":"___appKey___",
//         "appSecret":"___appSecret___",
//         "productSellerCode":"___productSellerCode___",
//         "title":"___title___",
//         "subtitle":"___subtitle___",
//         "description":"___description___",
//         "category_id":"___categoryid___",
//         "specialProductInfo_key1":"___specialProductInfo_key1___",
//         "specialProductInfo_value1":"___specialProductInfo_value1___",
//         "price":"___price___",
//         "currencyType":"___curr_type___",
//         "image_url1":"___img_url1___",
//         "image_order1":"___img_order1___",
//         "approvalStatus":"2",
//         "productCondition":"2",
//         "preparingDay":"___preparingDay__",
//         "shipmentTemplate":"test",
//         "stockItem_gtin1":"___stockItem_gtin1___",
//         "stockItem_attribute_name1":"___stockItem_attribute_name1___",
//         "stockItem_attribute_value1":"___stockItem_attribute_value1___",
//         "stockItem_quantity1":"___stockItem_quantity1___"
//     }

// var postData = JSON.stringify(addProductData);

// postData = postData.replace("___appKey___","71faab12-d47e-432e-a4a2-5546c49cb1c4");
// postData = postData.replace("___appSecret___","FrOoxTV9Mk4R5KI5");
// postData = postData.replace("___productSellerCode___",document.getElementById("productSellerCode").value);
// postData = postData.replace("___title___",document.getElementById("title").value);
// postData = postData.replace("___subtitle___",document.getElementById("subtitle").value);
// postData = postData.replace("___description___",document.getElementById("description").value);
// postData = postData.replace("___categoryid___",document.getElementById("category_id").value);
// postData = postData.replace("___specialProductInfo_key1___",document.getElementById("specialProductInfo_key1").value);
// postData = postData.replace("___specialProductInfo_value1___",document.getElementById("specialProductInfo_value1").value);
// postData = postData.replace("___price___",document.getElementById("price").value);
// postData = postData.replace("___curr_type___",document.getElementById("currencyType").value);
// postData = postData.replace("___img_url1___",document.getElementById("image_url1").value);
// postData = postData.replace("___img_order1___",document.getElementById("image_order1").value);
// postData = postData.replace("___approvalStatus___",document.getElementById("approvalStatus").value);
// postData = postData.replace("___productCondition___",document.getElementById("productCondition").value);
// postData = postData.replace("___preparingDay__",document.getElementById("preparingDay").value);
// postData = postData.replace("___shipmentTemplate___",document.getElementById("shipmentTemplate").value);
// postData = postData.replace("___stockItem_gtin1___",document.getElementById("stockItem_gtin1").value);
// postData = postData.replace("___stockItem_attribute_name1___",document.getElementById("stockItem_attribute_name1").value);
// postData = postData.replace("___stockItem_attribute_value1___",document.getElementById("stockItem_attribute_value1").value);
// postData = postData.replace("___stockItem_quantity1___",document.getElementById("stockItem_quantity1").value);



// xmlhttp.open("POST", theUrl);
// xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
// xmlhttp.send(postData);


// //counter for another post request
// var count = 10, timer = setInterval(function() {

// $("#counter").css("visibility", "visible");
// $("#counter").html("Lütfen " +  count-- + " saniye bekleyiniz");
// if(count == 0) {
// clearInterval(timer);
// $("#counter").css("visibility", "hidden");
// }
// }, 1000);

// //window.alert(postData);
// //console.log(postData);


// }


var n11productadd = new Vue ({
  el: '#n11productadd',
  data: {
    appKey: '',
    appSecret: '',
    productSellerCode: '',
    title: '',
    subtitle: '',
    description: '',
    category_id: '',
    specialProductInfo_key1: '',
    specialProductInfo_value1: '',
    price: '',
    stockItem_quantity1: '',
    currencyType: '',
    image_url1: '',
    image_order1: '',
    approvalStatus: '',
    productCondition: '',
    preparingDay: '',
    shipmentTemplate: '',
    stockItem_gtin1: '',
    stockItem_attribute_name1: '',
    stockItem_attribute_value1: '',
    currencyTypes: ["TL", "USD", "EUR"],
    approvalStatuses: ["Aktif(Satışta)", "Beklemede", "Yasaklı"],
  },
  methods:{
    addProduct1() {

      var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
      var theUrl = "http://localhost:8080/ws_iltech_n11/ws/saveproduct";

      xmlhttp.addEventListener("readystatechange", function()  {
      if(this.readyState === 4) {
        console.log(this.responseText);
       // var resultText = xhr.responseText;
        window.alert(this.responseText);

       //var abc  = this.responseText.split("<");
       // window.alert(abc[6] + "status"  +abc[10] +"mesaj eror"  +this.responseText);

       if(this.resultText.includes("success")) {

        //window.location.href = "http://127.0.0.1:5500/urunler.html#/";
       }



      }
      })

      var addProductData = {
              "appKey":"___appKey___",
              "appSecret":"___appSecret___",
              "productSellerCode":"___productSellerCode___",
              "title":"___title___",
              "subtitle":"___subtitle___",
              "description":"___description___",
              "category_id":"___categoryid___",
              "specialProductInfo_key1":"___specialProductInfo_key1___",
              "specialProductInfo_value1":"___specialProductInfo_value1___",
              "price":"___price___",
              "currencyType":"___curr_type___",
              "image_url1":"___img_url1___",
              "image_order1":"___img_order1___",
              "approvalStatus":"2",
              "productCondition":"2",
              "preparingDay":"___preparingDay__",
              "shipmentTemplate":"test",
              "stockItem_gtin1":"___stockItem_gtin1___",
              "stockItem_attribute_name1":"___stockItem_attribute_name1___",
              "stockItem_attribute_value1":"___stockItem_attribute_value1___",
              "stockItem_quantity1":"___stockItem_quantity1___"
          }

      var postData = JSON.stringify(addProductData);

      postData = postData.replace("___appKey___","71faab12-d47e-432e-a4a2-5546c49cb1c4");
            postData = postData.replace("___appSecret___","FrOoxTV9Mk4R5KI5");
            postData = postData.replace("___productSellerCode___", productSellerCode.value);
            postData = postData.replace("___title___",title.value);
            postData = postData.replace("___subtitle___",subtitle.value);
            postData = postData.replace("___description___",description.value);
            postData = postData.replace("___categoryid___",category_id.value);
            postData = postData.replace("___specialProductInfo_key1___",specialProductInfo_key1.value);
            postData = postData.replace("___specialProductInfo_value1___",specialProductInfo_value1.value);
            postData = postData.replace("___price___",price.value);
            postData = postData.replace("___curr_type___",currencyType.value);
            postData = postData.replace("___img_url1___",image_url1.value);
            postData = postData.replace("___img_order1___",image_order1.value);
            postData = postData.replace("___approvalStatus___",approvalStatus.value);
            postData = postData.replace("___productCondition___",productCondition.value);
            postData = postData.replace("___preparingDay__",preparingDay.value);
            postData = postData.replace("___shipmentTemplate___",shipmentTemplate.value);
            postData = postData.replace("___stockItem_gtin1___",stockItem_gtin1.value);
            postData = postData.replace("___stockItem_attribute_name1___",stockItem_attribute_name1.value);
            postData = postData.replace("___stockItem_attribute_value1___",stockItem_attribute_value1.value);
            postData = postData.replace("___stockItem_quantity1___",stockItem_quantity1.value);
            console.log(postData);



      // xmlhttp.open("POST", theUrl);
      // xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      // xmlhttp.send(postData);


      //counter for another post request
      var count = 10, timer = setInterval(function() {

      $("#counter").css("visibility", "visible");
      $("#counter").html("Lütfen " +  count-- + " saniye bekleyiniz");
      if(count == 0) {
      clearInterval(timer);
      $("#counter").css("visibility", "hidden");
      }
      }, 1000);

      //window.alert(postData);
      //console.log(postData);


      }
  }
});


