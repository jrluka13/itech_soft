
let get_sub;
let get_cat;
let get_cat1;
let get_cat2;
let get_cat3;

(async function loadData() {
    let url = 'https://api.trendyol.com/sapigw/product-categories';
    let response = await fetch(url);
    let commits = await response.json(); // читаем ответ в формате JSON
    get_cat = commits.categories;
    if(get_cat.length != 0){
        let select = document.getElementById("cat1");
        let select2 = document.getElementById("cat2");
        let select3 = document.getElementById("cat3");
        console.log("Succses parse");
        console.log(get_cat);

        for (let i = 0; i < get_cat.length; i++) {
            $('<option value="' + get_cat[i].name + '">' + get_cat[i].name + '</option>').appendTo('#cat1');
        };


        document.getElementById('cat1').onclick = function (){
            var value = select.value;
            for(let i =0;i<get_cat.length;i++){
                if(value == get_cat[i].name && get_cat[i].subCategories.length ==0){
                    console.log(get_cat[i].id)
                }
                if(value == get_cat[i].name && get_cat[i].subCategories.length != 0){
                    get_sub = document.getElementById('cat2');
                    get_sub.style.display = "inline";
                    get_cat1 = get_cat[i].subCategories;
                    console.log(get_cat[i].id);
                    console.log(get_cat1)
                    for (let i = 0; i < get_cat1.length; i++) {
                        $('<option value="' + get_cat1[i].name + '">' + get_cat1[i].name + '</option>').appendTo('#cat2');
                    };

                }
            };
        };

        document.getElementById('cat2').onclick = function (){
            var value = select2.value;
            for(let i =0;i<get_cat1.length;i++){
                if(value == get_cat1[i].name && get_cat1[i].subCategories.length ==0){
                    console.log(get_cat1[i].id)
                    let arr_id387 = [];
                    let arr_name = [];
                    let arr_name_val = [];
                    let get_attr_val = [];
                    $.getJSON("id387.json", function (data) {
                        arr_id387 = data.categoryAttributes;
                        console.log(arr_id387);
                        for(let i=0;i<arr_id387.length;i++){
                            arr_name.push(arr_id387[i].attribute.name);
                            get_attr_val.push(arr_id387[i].attributeValues);

                        }
                        console.log(arr_name);
                        console.log(get_attr_val);

                        for(let i = 0;i<get_attr_val.length;i++){
                            for(let k = 0;k<get_attr_val[i].length;k++){
                                arr_name_val.push(get_attr_val[i][k].name)
                            }
                            arr_name_val.push("");
                        }
                        console.log(arr_name_val);

                        let objAll = {};


                        for(let i =0;i<arr_name.length;i++){
                            let arr = [];
                            for(let k = 0;k< arr_name_val.length;k++){
                                    if(arr_name_val[k] == ""){
                                        arr_name_val.splice(0,k+1);
                                        break;
                                    }else{
                                        arr.push(arr_name_val[k]);
                                        objAll[arr_name[i]] = arr;
                                    }



                            }

                        }
                        console.log(objAll);

                        let n = 0;
                        for(let key in objAll){
                            let arrr =objAll[key];

                            console.log(arrr);

                            for(n;n<arr_name.length;n++){
                                $('<span>' + arr_name[n] + '</span>' + '<br/>').appendTo('#listAttr');
                                n++;
                                break;

                            }
                            for(let i=0;i<arrr.length;i++){
                                $('<ul>' + '<li>' + arrr[i] + '</li>' + '</ul>' ).appendTo('#listAttr');
                            }



                        }



                    });


                    // axios.get(`
                    // https://api.trendyol.com/sapigw/product-categories/${get_cat1[i].id}/attributes
                    // `)
                    // .then((response) => {
                    // const data = response.data;
                    // let get_attr = data.categoryAttributes;
                    // console.log(get_attr);
                    // let arr_name = [];
                    // let arr_name_val = [];
                    // let get_attr_val = [];
                    // for(let i=0;i<get_attr.length;i++){
                    //     arr_name.push(get_attr[i].attribute.name);
                    //     get_attr_val.push(get_attr[i].attributeValues);
                    //     // arr_name_val.push(get_attr[i].attributeValues[k].name)
                    // }
                    // console.log(arr_name);
                    // console.log(get_attr_val);
                    // for(let i = 0;i<get_attr_val.length;i++){
                    //     if(get_attr_val[i].length != 0){
                    //         for(let k = 0;i<get_attr_val[i].length;k++){
                    //             // console.log(get_attr_val[i].length);
                    //             console.log(get_attr_val[i][k]);
                    //             if(get_attr_val[i][k] != 0 ){
                    //                 arr_name_val.push(get_attr_val[i][k].name);
                    //             }else{
                    //                 continue;
                    //             }

                    //         }
                    //     }

                    // }
                    // console.log(arr_name_val);
                    // for (let i = 0; i < get_cat1.length; i++) {
                    //     $('<span value="' + arr_name[i] + '">' + arr_name[i] + '</span>').appendTo('#listAttr');
                    //     // $('<li value="' + arr_name[i] + '">' + arr_name[i] + '</span>').appendTo('#listAttr');

                    // };

                    // });
                }
                if(value == get_cat1[i].name && get_cat1[i].subCategories.length != 0){
                    get_sub = document.getElementById('cat3');
                    get_sub.style.display = "inline";
                    get_cat2 = get_cat1[i].subCategories;

                    console.log(get_cat2);
                    for (let i = 0; i < get_cat2.length; i++) {
                        $('<option value="' + get_cat2[i].name + '">' + get_cat2[i].name + '</option>').appendTo('#cat3');
                    };
                }
            };
        }

        document.getElementById('cat3').onclick = function (){
            var value = select3.value;
            for(let i =0;i<get_cat2.length;i++){
                if(value == get_cat2[i].name && get_cat2[i].subCategories.length ==0){
                    console.log(get_cat2[i].id)
                    let arr_id387 = [];
                    let arr_name = [];
                    let arr_name_val = [];
                    let get_attr_val = [];
                    $.getJSON("id387.json", function (data) {
                        arr_id387 = data.categoryAttributes;
                        console.log(arr_id387);
                        for(let i=0;i<arr_id387.length;i++){
                            arr_name.push(arr_id387[i].attribute.name);
                            get_attr_val.push(arr_id387[i].attributeValues);

                        }
                        console.log(arr_name);
                        console.log(get_attr_val);

                        for(let i = 0;i<get_attr_val.length;i++){
                            for(let k = 0;k<get_attr_val[i].length;k++){
                                arr_name_val.push(get_attr_val[i][k].name)
                            }
                            arr_name_val.push("");
                        }
                        console.log(arr_name_val);

                        let objAll = {};


                        for(let i =0;i<arr_name.length;i++){
                            let arr = [];
                            for(let k = 0;k< arr_name_val.length;k++){
                                    if(arr_name_val[k] == ""){
                                        arr_name_val.splice(0,k+1);
                                        break;
                                    }else{
                                        arr.push(arr_name_val[k]);
                                        objAll[arr_name[i]] = arr;
                                    }



                            }

                        }
                        console.log(objAll);

                        let n = 0;
                        for(let key in objAll){
                            let arrr =objAll[key];

                            console.log(arrr);

                            for(n;n<arr_name.length;n++){
                                $('<span>' + arr_name[n] + '</span>' + '<br/>').appendTo('#listAttr');
                                n++;
                                break;

                            }
                            for(let i=0;i<arrr.length;i++){
                                $('<ul>' + '<li>' + arrr[i] + '</li>' + '</ul>' ).appendTo('#listAttr');
                            }



                        }



                    });
                }
                if(value == get_cat2[i].name && get_cat2[i].subCategories.length != 0){
                    get_sub = document.getElementById('cat4');
                    get_sub.style.display = "inline";
                    get_cat3 = get_cat2[i].subCategories;
                    console.log(get_cat3);
                    for (let i = 0; i < get_cat3.length; i++) {
                        $('<option value="' + get_cat3[i].name + '">' + get_cat3[i].name + '</option>').appendTo('#cat4');
                    };
                }
            };
        }



    }

}());



// document.getElementById('cat1').onclick = function(){
//     var select = document.getElementById("cat1");
//     console.log(get_cat);
//     v = ["vlad","vo"];
//     for (var i = 0; i < get_cat.length; i++) {
//         $('<option value="' + get_cat[i].name + '">' + get_cat[i].name + '</option>').appendTo('#cat1');
//       };

//     var value = select.value;
//     alert(value);

//     for(let i =0;i<get_cat.length;i++){
//         if(value == get_cat[i].name && get_cat[i].subCategories.length != 0){
//             let get_sub = document.getElementById('cat2');
//             get_sub.style.display = "inline";
//         }else{
//             get_sub.style.display = "none";
//         }
//     }




// }