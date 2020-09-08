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

// function addProduct1() {

// var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
// var theUrl = "";

// xmlhttp.addEventListener("readystatechange", function()  {
// if(this.readyState === 4) {
//   console.log(this.responseText);
//  // var resultText = xhr.responseText;
//   //window.alert(this.responseText);

// //var abc  = this.responseText.split("<");
//  // window.alert(abc[6] + "status"  +abc[10] +"mesaj eror"  +this.responseText);
//  window.alert(this.responseText.replace('{"batchRequestId":""',"").replace('"}"',""));

// if(this.responseText.includes("message"))  {}

//   //window.alert("Tekrar istek atmadan önce bekleyiniz.!");

// }

// else {

// //  window.location.href = "http://127.0.0.1:5500/trendyolurunler.html#/";

// }
// }
// )

// var addProductData = {

// "sign": "__sign__",
// "timestamp": "___timestamp___",
// "itemId": "___itemId___",
// "categoryCode": "___categoryCode___",
// "title": "___title___",
// "subtitle": "___subtitle___",
// "description": "___description___",
// "buyNowPrice": "___buyNowPrice___",
// "productCount": "___productCount___"

// }

// var postData = JSON.stringify(addProductData);

// var date = new Date();
// var timestamp = date.getTime();
// var md5Hash = CryptoJS.MD5("mF4bqc8r3vsWaGemkmkbqN9bgThQJTuS"+"HPMUgcUtQ2Fn6VEe"+ timestamp);


// postData = postData.replace("___itemId___",document.getElementById("itemId").value);
// postData = postData.replace("___categoryCode___",document.getElementById("categoryCode").value);
// postData = postData.replace("___title___",document.getElementById("title").value);
// postData = postData.replace("___subtitle___",document.getElementById("subtitle").value);
// postData = postData.replace("___description___",document.getElementById("description").value);
// postData = postData.replace("___buyNowPrice___",document.getElementById("buyNowPrice").value);
// postData = postData.replace("___productCount___",document.getElementById("productCount").value);
// postData = postData.replace("__sign__",md5Hash);
// postData = postData.replace("___timestamp___",timestamp);

// console.log(postData);


// xmlhttp.open("POST", "http://localhost:8080/ws_iltech_n11/ws/putproductGG");
// xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
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


var ggproductadd = new Vue ({
  el: '#ggproductadd',
  data: {
    itemId: '',
    categoryCode: '',
    title: '',
    subtitle: '',
    description: '',
    buyNowPrice: '',
    productCount: '',
  },
  methods:{
     addProduct1() {

      var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
      var theUrl = "";

      xmlhttp.addEventListener("readystatechange", function()  {
      if(this.readyState === 4) {
        console.log(this.responseText);
       window.alert(this.responseText.replace('{"batchRequestId":""',"").replace('"}"',""));

      if(this.responseText.includes("message"))  {}
      }

      else {

      }
      }
      )

      var addProductData = {

      "sign": "__sign__",
      "timestamp": "___timestamp___",
      "itemId": "___itemId___",
      "categoryCode": "___categoryCode___",
      "title": "___title___",
      "subtitle": "___subtitle___",
      "description": "___description___",
      "buyNowPrice": "___buyNowPrice___",
      "productCount": "___productCount___"

      }

      var postData = JSON.stringify(addProductData);

      var date = new Date();
      var timestamp = date.getTime();
      var md5Hash = CryptoJS.MD5("mF4bqc8r3vsWaGemkmkbqN9bgThQJTuS"+"HPMUgcUtQ2Fn6VEe"+ timestamp);


      postData = postData.replace("___itemId___", itemId.value);
      postData = postData.replace("___categoryCode___", categoryCode.value);
      postData = postData.replace("___title___", title.value);
      postData = postData.replace("___subtitle___", subtitle.value);
      postData = postData.replace("___description___", description.value);
      postData = postData.replace("___buyNowPrice___", buyNowPrice.value);
      postData = postData.replace("___productCount___", productCount.value);
      postData = postData.replace("__sign__",md5Hash);
      postData = postData.replace("___timestamp___",timestamp);

      console.log(postData);


      xmlhttp.open("POST", "http://localhost:8080/ws_iltech_n11/ws/putproductGG");
      xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      xmlhttp.send(postData);


      }
  }
});

