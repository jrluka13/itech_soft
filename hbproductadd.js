$.getJSON("category1.json", function (data) {
    let get_cat = data.data;
    console.log(get_cat);
    if (get_cat.length != 0) {
        new Vue({
          el: "#step1",
          data: {
            btn1p: "previous step",
            btn1c: "confirm",
            v: "wad",
          },
          beforeCreate: function () {
            console.log(get_cat);
            let get_sub;
            let get_cat1;
            let get_cat2;
            let get_cat3;
            let get_cat4;

            for (let i = 0; i < get_cat.length; i++) {
              $(
                '<li class="list-group-item-action list-group-item" value="' +
                  get_cat[i].name +
                  '">' +
                  get_cat[i].name +
                  "</li>"
              ).appendTo("#li0");
            }
          },
          methods: {
            changeContent1() {
              let second = document.getElementById("addproduct1");
              let third = document.getElementById("addproduct2");
              let tab = document.getElementById("circle5");
              let tab1 = document.getElementById("circle1");
              if (third.style.display === "none") {
                third.style.display = "block";
                tab.style.background = "#3758FF";
                tab1.style.color = "#ffffff";
                second.style.display = "none";
              }
            },
            cat1(event) {
              var value = event.target.innerHTML;
              value = value.replace("&amp;", "&");
              console.log(value);
              for (let i = 0; i < get_cat.length; i++) {
                if (
                  value == get_cat[i].name &&
                  get_cat[i].subCategories.length == 0
                ) {
                  console.log(get_cat[i].id);
                }
                if (
                  value == get_cat[i].name &&
                  get_cat[i].subCategories.length != 0
                ) {
                  get_sub = document.getElementById("list_box");
                  get_sub.style.display = "inline";
                  get_cat1 = get_cat[i].subCategories;
                  console.log(get_cat[i].id);
                  console.log(get_cat1);
                  for (let i = 0; i < get_cat1.length; i++) {
                    $(
                      '<li class="list-group-item-action list-group-item" value="' +
                        get_cat1[i].name +
                        '">' +
                        get_cat1[i].name +
                        "</li>"
                    ).appendTo("#li1");
                  }
                }
              }
            },
            cat2(event) {
              let value = event.target.innerHTML;
              value = value.replace("&amp;", "&");

              console.log(value);

              for (let i = 0; i < get_cat1.length; i++) {
                if (
                  value == get_cat1[i].name &&
                  get_cat1[i].subCategories.length == 0
                ) {
                  console.log(get_cat1[i].id);
                }
                if (
                  value == get_cat1[i].name &&
                  get_cat1[i].subCategories.length != 0
                ) {
                  get_sub = document.getElementById("list_box1");
                  get_sub.style.display = "inline";
                  get_cat2 = get_cat1[i].subCategories;

                  console.log(get_cat2);
                  for (let i = 0; i < get_cat2.length; i++) {
                    $(
                      '<li class="list-group-item-action list-group-item" value="' +
                        get_cat2[i].name +
                        '">' +
                        get_cat2[i].name +
                        "</li>"
                    ).appendTo("#li2");
                  }
                }
              }
            },
            cat3(event) {
              var value = event.target.innerHTML;
              value = value.replace("&amp;", "&");

              console.log(value);
              for (let i = 0; i < get_cat2.length; i++) {
                if (
                  value == get_cat2[i].name &&
                  get_cat2[i].subCategories.length == 0
                ) {
                  console.log(get_cat2[i].id);
                }
                if (
                  value == get_cat2[i].name &&
                  get_cat2[i].subCategories.length != 0
                ) {
                  get_sub = document.getElementById("list_box2");
                  get_sub.style.display = "inline";
                  get_cat3 = get_cat2[i].subCategories;
                  console.log(get_cat[i].id);
                  console.log(get_cat3);
                  for (let i = 0; i < get_cat3.length; i++) {
                    $(
                      '<li class="list-group-item-action list-group-item" value="' +
                        get_cat3[i].name +
                        '">' +
                        get_cat3[i].name +
                        "</li>"
                    ).appendTo("#li3");
                  }
                }
              }
            },
            cat4(event) {
              var value = event.target.innerHTML;
              value = value.replace("&amp;", "&");

              console.log(value);
              for (let i = 0; i < get_cat3.length; i++) {
                if (
                  value == get_cat3[i].name &&
                  get_cat3[i].subCategories.length == 0
                ) {
                  console.log(get_cat3[i].id);
                }
                if (
                  value == get_cat3[i].name &&
                  get_cat3[i].subCategories.length != 0
                ) {
                  console.log(15);
                  get_sub = document.getElementById("list_box3");
                  get_sub.style.display = "inline";
                  get_cat4 = get_cat3[i].subCategories;
                  console.log(get_cat[i].id);
                  console.log(get_cat3);
                  for (let i = 0; i < get_cat4.length; i++) {
                    $(
                      '<li class="list-group-item-action list-group-item" value="' +
                        get_cat4[i].name +
                        '">' +
                        get_cat4[i].name +
                        "</li>"
                    ).appendTo("#li4");
                  }
                }
              }
            },
          },
        });
      }
})

// (async function loadData() {
//   let url = "https://api.trendyol.com/sapigw/product-categories";
//   let response = await fetch(url);
//   let commits = await response.json(); // читаем ответ в формате JSON
//   let get_cat = commits.categories;

//   if (get_cat.length != 0) {
//     new Vue({
//       el: "#step1",
//       data: {
//         btn1p: "previous step",
//         btn1c: "confirm",
//         v: "wad",
//       },
//       beforeCreate: function () {
//         console.log(get_cat);
//         let get_sub;
//         let get_cat1;
//         let get_cat2;
//         let get_cat3;
//         let get_cat4;

//         for (let i = 0; i < get_cat.length; i++) {
//           $(
//             '<li class="list-group-item-action list-group-item" value="' +
//               get_cat[i].name +
//               '">' +
//               get_cat[i].name +
//               "</li>"
//           ).appendTo("#li0");
//         }
//       },
//       methods: {
//         changeContent1() {
//           let second = document.getElementById("addproduct1");
//           let third = document.getElementById("addproduct2");
//           let tab = document.getElementById("circle5");
//           let tab1 = document.getElementById("circle1");
//           if (third.style.display === "none") {
//             third.style.display = "block";
//             tab.style.background = "#3758FF";
//             tab1.style.color = "#ffffff";
//             second.style.display = "none";
//           }
//         },
//         cat1(event) {
//           var value = event.target.innerHTML;
//           value = value.replace("&amp;", "&");
//           console.log(value);
//           for (let i = 0; i < get_cat.length; i++) {
//             if (
//               value == get_cat[i].name &&
//               get_cat[i].subCategories.length == 0
//             ) {
//               console.log(get_cat[i].id);
//             }
//             if (
//               value == get_cat[i].name &&
//               get_cat[i].subCategories.length != 0
//             ) {
//               get_sub = document.getElementById("list_box");
//               get_sub.style.display = "inline";
//               get_cat1 = get_cat[i].subCategories;
//               console.log(get_cat[i].id);
//               console.log(get_cat1);
//               for (let i = 0; i < get_cat1.length; i++) {
//                 $(
//                   '<li class="list-group-item-action list-group-item" value="' +
//                     get_cat1[i].name +
//                     '">' +
//                     get_cat1[i].name +
//                     "</li>"
//                 ).appendTo("#li1");
//               }
//             }
//           }
//         },
//         cat2(event) {
//           let value = event.target.innerHTML;
//           value = value.replace("&amp;", "&");

//           console.log(value);

//           for (let i = 0; i < get_cat1.length; i++) {
//             if (
//               value == get_cat1[i].name &&
//               get_cat1[i].subCategories.length == 0
//             ) {
//               console.log(get_cat1[i].id);
//             }
//             if (
//               value == get_cat1[i].name &&
//               get_cat1[i].subCategories.length != 0
//             ) {
//               get_sub = document.getElementById("list_box1");
//               get_sub.style.display = "inline";
//               get_cat2 = get_cat1[i].subCategories;

//               console.log(get_cat2);
//               for (let i = 0; i < get_cat2.length; i++) {
//                 $(
//                   '<li class="list-group-item-action list-group-item" value="' +
//                     get_cat2[i].name +
//                     '">' +
//                     get_cat2[i].name +
//                     "</li>"
//                 ).appendTo("#li2");
//               }
//             }
//           }
//         },
//         cat3(event) {
//           var value = event.target.innerHTML;
//           value = value.replace("&amp;", "&");

//           console.log(value);
//           for (let i = 0; i < get_cat2.length; i++) {
//             if (
//               value == get_cat2[i].name &&
//               get_cat2[i].subCategories.length == 0
//             ) {
//               console.log(get_cat2[i].id);
//             }
//             if (
//               value == get_cat2[i].name &&
//               get_cat2[i].subCategories.length != 0
//             ) {
//               get_sub = document.getElementById("list_box2");
//               get_sub.style.display = "inline";
//               get_cat3 = get_cat2[i].subCategories;
//               console.log(get_cat[i].id);
//               console.log(get_cat3);
//               for (let i = 0; i < get_cat3.length; i++) {
//                 $(
//                   '<li class="list-group-item-action list-group-item" value="' +
//                     get_cat3[i].name +
//                     '">' +
//                     get_cat3[i].name +
//                     "</li>"
//                 ).appendTo("#li3");
//               }
//             }
//           }
//         },
//         cat4(event) {
//           var value = event.target.innerHTML;
//           value = value.replace("&amp;", "&");

//           console.log(value);
//           for (let i = 0; i < get_cat3.length; i++) {
//             if (
//               value == get_cat3[i].name &&
//               get_cat3[i].subCategories.length == 0
//             ) {
//               console.log(get_cat3[i].id);
//             }
//             if (
//               value == get_cat3[i].name &&
//               get_cat3[i].subCategories.length != 0
//             ) {
//               console.log(15);
//               get_sub = document.getElementById("list_box3");
//               get_sub.style.display = "inline";
//               get_cat4 = get_cat3[i].subCategories;
//               console.log(get_cat[i].id);
//               console.log(get_cat3);
//               for (let i = 0; i < get_cat4.length; i++) {
//                 $(
//                   '<li class="list-group-item-action list-group-item" value="' +
//                     get_cat4[i].name +
//                     '">' +
//                     get_cat4[i].name +
//                     "</li>"
//                 ).appendTo("#li4");
//               }
//             }
//           }
//         },
//       },
//     });
//   }
// })();

// new Vue({
//     el:'#step1',
//     data:{

//       btn1p:'previous step',
//       btn1c:'confirm',
//     },
//     methods:{
//       changeContent1() {
//         let second = document.getElementById("addproduct1");
//         let third = document.getElementById("addproduct2");
//         let tab = document.getElementById('circle5')
//         let tab1 = document.getElementById('circle1')
//         if (third.style.display === 'none') {
//           third.style.display = 'block'
//           tab.style.background = '#3758FF'
//           tab1.style.color = '#ffffff'
//           second.style.display = 'none'
//         }

//       }
//     }
//   });

// (async function loadData() {
//     let url = 'https://api.trendyol.com/sapigw/product-categories';
//     let response = await fetch(url);
//     let commits = await response.json(); // читаем ответ в формате JSON
//     get_cat = commits.categories;

//     if(get_cat.length !=0){
//         console.log(get_cat);

//         for (let i = 0; i < get_cat.length; i++) {
//             $('<li class="list-group-item-action list-group-item" value="' + get_cat[i].name + '">'+get_cat[i].name+'</li>').appendTo('#li0');
//         };

//         document.getElementById('li0').onclick = function(event){

//             var value = event.target.innerHTML;
//             value = value.replace('&amp;','&');
//             console.log(value);
//             for(let i =0;i<get_cat.length;i++){
//                 if(value == get_cat[i].name && get_cat[i].subCategories.length ==0){
//                     console.log(get_cat[i].id)
//                 }
//                 if(value == get_cat[i].name && get_cat[i].subCategories.length != 0){
//                     get_sub = document.getElementById('list_box');
//                     get_sub.style.display = "inline";
//                     get_cat1 = get_cat[i].subCategories;
//                     console.log(get_cat[i].id);
//                     console.log(get_cat1)
//                     for (let i = 0; i < get_cat1.length; i++) {
//                         $('<li class="list-group-item-action list-group-item" value="' + get_cat1[i].name + '">'+get_cat1[i].name+'</li>').appendTo('#li1');
//                     };

//                 }
//             };

//         }

//         document.getElementById('li1').onclick = function (event){
//              let value = event.target.innerHTML;
//              value = value.replace('&amp;','&');

//             console.log(value);

//             for(let i =0;i<get_cat1.length;i++){
//                 if(value == get_cat1[i].name && get_cat1[i].subCategories.length ==0){
//                     console.log(get_cat1[i].id)
//                 }
//                 if(value == get_cat1[i].name && get_cat1[i].subCategories.length != 0){
//                     get_sub = document.getElementById('list_box1');
//                     get_sub.style.display = "inline";
//                     get_cat2 = get_cat1[i].subCategories;

//                     console.log(get_cat2);
//                     for (let i = 0; i < get_cat2.length; i++) {
//                         $('<li class="list-group-item-action list-group-item" value="' + get_cat2[i].name + '">'+get_cat2[i].name+'</li>').appendTo('#li2');
//                     };
//                 }
//             };
//         }

//         document.getElementById('li2').onclick = function(event){
//             var value = event.target.innerHTML;
//             value = value.replace('&amp;','&');

//             console.log(value);
//             for(let i =0;i<get_cat2.length;i++){
//                 if(value == get_cat2[i].name && get_cat2[i].subCategories.length ==0){
//                     console.log(get_cat2[i].id)
//                 }
//                 if(value == get_cat2[i].name && get_cat2[i].subCategories.length != 0){
//                     get_sub = document.getElementById('list_box2');
//                     get_sub.style.display = "inline";
//                     get_cat3 = get_cat2[i].subCategories;
//                     console.log(get_cat[i].id);
//                     console.log(get_cat3)
//                     for (let i = 0; i < get_cat3.length; i++) {
//                         $('<li class="list-group-item-action list-group-item" value="' + get_cat3[i].name + '">'+get_cat3[i].name+'</li>').appendTo('#li3');
//                     };

//                 }
//             };

//         }
//         document.getElementById('li3').onclick = function(event){
//             var value = event.target.innerHTML;
//             value = value.replace('&amp;','&');

//             console.log(value);
//             for(let i =0;i<get_cat3.length;i++){
//                 if(value == get_cat3[i].name && get_cat3[i].subCategories.length ==0){
//                     console.log(get_cat3[i].id)
//                 }
//                 if(value == get_cat3[i].name && get_cat3[i].subCategories.length != 0){
//                     console.log(15)
//                     get_sub = document.getElementById('list_box3');
//                     get_sub.style.display = "inline";
//                     get_cat4 = get_cat3[i].subCategories;
//                     console.log(get_cat[i].id);
//                     console.log(get_cat3)
//                     for (let i = 0; i < get_cat4.length; i++) {
//                         $('<li class="list-group-item-action list-group-item" value="' + get_cat4[i].name + '">'+get_cat4[i].name+'</li>').appendTo('#li4');
//                     };

//                 }
//             };

//         }

//     }
// }());
