
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
        console.log(get_cat);

        for (let i = 0; i < get_cat.length; i++) {
            $('<option value="' + get_cat[i].name + '">' + get_cat[i].name + '</option>').appendTo('#cat1');
        };


        document.getElementById('cat1').onclick = function (){
            var value = select.value;
            for(let i =0;i<get_cat.length;i++){
                if(value == get_cat[i].name && get_cat[i].subCategories.length != 0){
                    console.log(516);
                    get_sub = document.getElementById('cat2');
                    get_sub.style.display = "inline";
                    get_cat1 = get_cat[i].subCategories;
                    console.log(get_cat1);
                    for (let i = 0; i < get_cat1.length; i++) {
                        $('<option value="' + get_cat1[i].name + '">' + get_cat1[i].name + '</option>').appendTo('#cat2');
                    };
                }
            };
        };

        document.getElementById('cat2').onclick = function (){
            var value = select2.value;
            for(let i =0;i<get_cat.length;i++){
                if(value == get_cat1[i].name && get_cat1[i].subCategories.length != 0){
                    console.log(523);
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
            for(let i =0;i<get_cat.length;i++){
                if(value == get_cat2[i].name && get_cat2[i].subCategories.length != 0){
                    console.log(578);
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