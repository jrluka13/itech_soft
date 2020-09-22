let id_user = parseInt(localStorage.getItem('id'));
console.log(id_user);
axios.get(`http://51.68.195.202:3000/users_api?user_id=eq.${id_user}`)
            .then((response) => {
                const data = response.data;
                let get_users = data;

                if(get_users.length != 0){
                    var N11 = new Vue ({
                        el: '#marketDiff',
                        data: {
                          app_key: '',
                          app_secret: '',
                          api_username: '',
                          api_password: '',
                          app_key1: '',
                          app_secret1: '',
                          api_username1: '',
                          api_password1: '',
                          app_key2: '',
                          app_secret2: '',
                          api_username2: '',
                          api_password2: '',
                          app_key3: '',
                          app_secret3: '',
                          api_username3: '',
                          api_password3: '',
                          marketplace: '',
                          keys_api: ["user_id","marketplace","app_key","app_secret","api_username","api_password"],
                          arr_api: [],
                          arr_api2: [],
                          keys_api2: ["app_key","app_secret","api_username","api_password"],
                          id_user: parseInt(localStorage.getItem('id')),
                          ok: false,
                          loading: false,
                          users: [],


                        },
                        created:function(){
                            console.log(get_users);

                            let arr_new = [];
                            let arr_new1 = [];
                            let arr_new2 = [];
                            let arr_new3 = [];
                            arr_new.push(this.app_key,this.app_secret,this.api_username,this.api_password);
                            arr_new1.push(this.app_key1,this.app_secret1,this.api_username1,this.api_password1);
                            arr_new2.push(this.app_key2,this.app_secret2,this.api_username2,this.api_password2);
                            arr_new3.push(this.app_key3,this.app_secret3,this.api_username3,this.api_password3);

                            for(let i=0;i<get_users.length;i++){
                                let findObj = [];
                                for (let value of Object.values(get_users[i])) {
                                    findObj.push(value);

                                }
                                findObj.shift();
                                findObj.shift();
                                findObj.shift();
                                findObj.pop();
                                if(i==0){
                                    this.app_key = findObj[0];
                                    this.app_secret= findObj[1];
                                    this.api_username = findObj[2];
                                    this.api_password = findObj[3];
                                }
                                else if(i==1){
                                    this.app_key1 = findObj[0];
                                    this.app_secret1 = findObj[1];
                                    this.api_username1 = findObj[2];
                                    this.api_password1 = findObj[3];
                                }
                                else if(i==2){
                                    this.app_key2 = findObj[0];
                                    this.app_secret2 = findObj[1];
                                    this.api_username2 = findObj[2];
                                    this.api_password2 = findObj[3];
                                }
                                else if(i==3){
                                    this.app_key3 = findObj[0];
                                    this.app_secret3 = findObj[1];
                                    this.api_username3 = findObj[2];
                                    this.api_password3 = findObj[3];
                                }
                                console.log(findObj);
                            }







                          },

                        methods:{

                            getMarket(market){
                                this.marketplace =market;
                                // console.log(this.marketplace);
                            },

                            chekUsers(){

                                this.loading = true;
                                this.users = [];

                                axios.get('http://51.68.195.202:3000/users_api')
                                .then((response) => {
                                    const data = response.data;
                                    this.users = data;
                                    this.loading = false;
                                    this.postApi();
                                });
                            },

                            postApi(){
                                console.log(this.users);
                                this.arr_api.push(this.id_user,this.marketplace);
                                console.log(this.arr_api);
                                for(let i=0;i<=this.users.length-1;i++){
                                    let get_arr = [];
                                    for (let value of Object.values(this.users[i])) {
                                        get_arr.push(value);
                                        console.log(get_arr);

                                    }
                                    if(this.arr_api[0] == get_arr[1] && this.arr_api[1] == get_arr[2]){
                                        console.log("match");
                                        this.ok = true;
                                        this.updateMarketplace();
                                        break;
                                    }
                                }
                                if(this.ok === false){
                                    console.log(123655356);
                                    this.insertMarketplace();
                                }
                            },
                            updateMarketplace(){
                                let findObj = {};

                                let app_key = this.app_key;
                                let app_key1 = this.app_key1;
                                let app_key2 = this.app_key2;
                                let app_key3 = this.app_key3;
                                if(app_key != ""){
                                    this.arr_api2.push(app_key);
                                }
                                if(app_key1 != ""){
                                    this.arr_api2.push(app_key1);
                                }
                                if(app_key2 != ""){
                                    this.arr_api2.push(app_key2);
                                }
                                if(app_key3 != ""){
                                    this.arr_api2.push(app_key3);
                                }


                                let app_secret = this.app_secret;
                                let app_secret1 = this.app_secret1;
                                let app_secret2 = this.app_secret2;
                                let app_secret3 = this.app_secret3;
                                if(app_secret != ""){
                                    this.arr_api2.push(app_secret);
                                }
                                if(app_secret1 != ""){
                                    this.arr_api2.push(app_secret1);
                                }
                                if(app_secret2 != ""){
                                    this.arr_api2.push(app_secret2);
                                }
                                if(app_secret3 != ""){
                                    this.arr_api2.push(app_secret3);
                                }



                                let api_username = this.api_username;
                                let api_username1 = this.api_username1;
                                let api_username2 = this.api_username2;
                                let api_username3 = this.api_username3;
                                if(api_username != ""){
                                    this.arr_api2.push(api_username);
                                }
                                if(api_username1 != ""){
                                    this.arr_api2.push(api_username1);
                                }
                                if(api_username2 != ""){
                                    this.arr_api2.push(api_username2);
                                }
                                if(api_username3 != ""){
                                    this.arr_api2.push(api_username3);
                                }


                                let api_password = this.api_password;
                                let api_password1 = this.api_password1;
                                let api_password2 = this.api_password2;
                                let api_password3 = this.api_password3;
                                if(api_password != ""){
                                    this.arr_api2.push(api_password);
                                }
                                if(api_password1 != ""){
                                    this.arr_api2.push(api_password1);
                                }
                                if(api_password2 != ""){
                                    this.arr_api2.push(api_password2);
                                }
                                if(api_password3 != ""){
                                    this.arr_api2.push(api_password3);
                                }
                                // arr_api.push(null);
                                console.log(this.arr_api2);

                                for (let i = 0; i <= this.keys_api2.length -1; i++) {
                                    findObj[this.keys_api2[i]] = this.arr_api2[i];
                                }
                                console.log(findObj);

                                var myHeaders = new Headers();
                                myHeaders.append("Content-Type", "application/json");

                                var raw = JSON.stringify([findObj]);

                                var requestOptions = {
                                method: 'PATCH',
                                headers: myHeaders,
                                body: raw,
                                redirect: 'follow'
                                };

                                fetch(`http://51.68.195.202:3000/users_api?user_id=eq.${this.id_user}&marketplace=eq.${this.marketplace}`, requestOptions)
                                .then(response => response.text())
                                .then(result => console.log(result))
                                .catch(error => console.log('error', error));
                            },


                            insertMarketplace(){
                                let obj = {};
                                let app_key = this.app_key;
                                let app_key1 = this.app_key1;
                                let app_key2 = this.app_key2;
                                let app_key3 = this.app_key3;
                                if(app_key != ""){
                                    this.arr_api.push(app_key);
                                }
                                if(app_key1 != ""){
                                    this.arr_api.push(app_key1);
                                }
                                if(app_key2 != ""){
                                    this.arr_api.push(app_key2);
                                }
                                if(app_key3 != ""){
                                    this.arr_api.push(app_key3);
                                }


                                let app_secret = this.app_secret;
                                let app_secret1 = this.app_secret1;
                                let app_secret2 = this.app_secret2;
                                let app_secret3 = this.app_secret3;
                                if(app_secret != ""){
                                    this.arr_api.push(app_secret);
                                }
                                if(app_secret1 != ""){
                                    this.arr_api.push(app_secret1);
                                }
                                if(app_secret2 != ""){
                                    this.arr_api.push(app_secret2);
                                }
                                if(app_secret3 != ""){
                                    this.arr_api.push(app_secret3);
                                }



                                let api_username = this.api_username;
                                let api_username1 = this.api_username1;
                                let api_username2 = this.api_username2;
                                let api_username3 = this.api_username3;
                                if(api_username != ""){
                                    this.arr_api.push(api_username);
                                }
                                if(api_username1 != ""){
                                    this.arr_api.push(api_username1);
                                }
                                if(api_username2 != ""){
                                    this.arr_api.push(api_username2);
                                }
                                if(api_username3 != ""){
                                    this.arr_api.push(api_username3);
                                }


                                let api_password = this.api_password;
                                let api_password1 = this.api_password1;
                                let api_password2 = this.api_password2;
                                let api_password3 = this.api_password3;
                                if(api_password != ""){
                                    this.arr_api.push(api_password);
                                }
                                if(api_password1 != ""){
                                    this.arr_api.push(api_password1);
                                }
                                if(api_password2 != ""){
                                    this.arr_api.push(api_password2);
                                }
                                if(api_password3 != ""){
                                    this.arr_api.push(api_password3);
                                }

                                console.log(this.arr_api);

                                for (let i = 0; i <= this.keys_api.length -1; i++) {
                                    obj[this.keys_api[i]] = this.arr_api[i];

                                }

                                console.log(obj);


                                var myHeaders = new Headers();
                                myHeaders.append("Content-Type", "application/json");

                                var raw = JSON.stringify([obj]);

                                var requestOptions = {
                                method: 'POST',
                                headers: myHeaders,
                                body: raw,
                                redirect: 'follow'
                                };

                                fetch("http://51.68.195.202:3000/users_api", requestOptions)
                                .then(response => response.text())
                                .then(result => console.log(result))
                                .catch(error => console.log('error', error));
                            }



                        }
                      })
                }
            });


//   var Trendyal = new Vue ({
//     el: '#Trendyal',
//     data: {
//       app_key1: '',
//       app_secret1: '',
//       api_username1: '',
//       api_password1: '',
//     }
//   })

//   var Hepsiburada = new Vue ({
//     el: '#Hepsiburada',
//     data: {
//       app_key2: '',
//       app_secret2: '',
//       api_username2: '',
//       api_password2: '',
//     }
//   })


//   var Gittigidiyor = new Vue ({
//     el: '#Gittigidiyor',
//     data: {
//       app_key3: '',
//       app_secret3: '',
//       api_username3: '',
//       api_password3: '',
//     }
//   })


// let keys_api = ["user_id","marketplace","app_key","app_secret","api_username","api_password"];
// let arr_api = [];
// let arr_api2 = [];
// let keys_api2 = ["app_key","app_secret","api_username","api_password"];
// let id_user =parseInt(localStorage.getItem('id'));


// let ok = false;

// let marketplace;
// function getMarket(market){
// marketplace =market;
// }
// let api_obg;
// (async function loadData() {
//     let url = 'http://51.68.195.202:3000/users_api';
//     let response = await fetch(url);
//     let commits = await response.json(); // читаем ответ в формате JSON
//     api_obg = commits;
//     console.log(api_obg);
// }());

// function postApi(){

//     arr_api.push(id_user,marketplace);
//     for(let i=0;i<=api_obg.length-1;i++){
//         let get_arr = [];
//         for (let value of Object.values(api_obg[i])) {
//             get_arr.push(value);
//             console.log(get_arr);

//         }
//         if(arr_api[0] == get_arr[1] && arr_api[1] == get_arr[2]){
//             console.log("match");
//             ok = true;
//             updateMarketplace();
//             break;
//         }
//     }
//     if(ok === false){
//         insertMarketplace();
//     }




// }


// function updateMarketplace(){
//     let findObj = {};

//     let app_key = document.getElementById('app_key').value;
//     let app_key1 = document.getElementById('app_key1').value;
//     let app_key2 = document.getElementById('app_key2').value;
//     let app_key3 = document.getElementById('app_key3').value;
//     if(app_key != ""){
//         arr_api2.push(app_key);
//     }
//     if(app_key1 != ""){
//         arr_api2.push(app_key1);
//     }
//     if(app_key2 != ""){
//         arr_api2.push(app_key2);
//     }
//     if(app_key3 != ""){
//         arr_api2.push(app_key3);
//     }


//     let app_secret = document.getElementById('app_secret').value;
//     let app_secret1 = document.getElementById('app_secret1').value;
//     let app_secret2 = document.getElementById('app_secret2').value;
//     let app_secret3 = document.getElementById('app_secret3').value;
//     if(app_secret != ""){
//         arr_api2.push(app_secret);
//     }
//     if(app_secret1 != ""){
//         arr_api2.push(app_secret1);
//     }
//     if(app_secret2 != ""){
//         arr_api2.push(app_secret2);
//     }
//     if(app_secret3 != ""){
//         arr_api2.push(app_secret3);
//     }



//     let api_username = document.getElementById('api_username').value;
//     let api_username1 = document.getElementById('api_username1').value;
//     let api_username2 = document.getElementById('api_username2').value;
//     let api_username3 = document.getElementById('api_username3').value;
//     if(api_username != ""){
//         arr_api2.push(api_username);
//     }
//     if(api_username1 != ""){
//         arr_api2.push(api_username1);
//     }
//     if(api_username2 != ""){
//         arr_api2.push(api_username2);
//     }
//     if(api_username3 != ""){
//         arr_api2.push(api_username3);
//     }


//     let api_password = document.getElementById('api_password').value;
//     let api_password1 = document.getElementById('api_password1').value;
//     let api_password2 = document.getElementById('api_password2').value;
//     let api_password3 = document.getElementById('api_password3').value;
//     if(api_password != ""){
//         arr_api2.push(api_password);
//     }
//     if(api_password1 != ""){
//         arr_api2.push(api_password1);
//     }
//     if(api_password2 != ""){
//         arr_api2.push(api_password2);
//     }
//     if(api_password3 != ""){
//         arr_api2.push(api_password3);
//     }
//     // arr_api.push(null);
//     console.log(arr_api2);

//     for (let i = 0; i <= keys_api2.length -1; i++) {
//         findObj[keys_api2[i]] = arr_api2[i];
//     }
//     console.log(findObj);

//     var myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");

//     var raw = JSON.stringify([findObj]);

//     var requestOptions = {
//       method: 'PATCH',
//       headers: myHeaders,
//       body: raw,
//       redirect: 'follow'
//     };

//     fetch(`http://51.68.195.202:3000/users_api?user_id=eq.${id_user}&marketplace=eq.${marketplace}`, requestOptions)
//       .then(response => response.text())
//       .then(result => console.log(result))
//       .catch(error => console.log('error', error));
// }

// function insertMarketplace(){
//     let obj = {};
//     let app_key = document.getElementById('app_key').value;
//     let app_key1 = document.getElementById('app_key1').value;
//     let app_key2 = document.getElementById('app_key2').value;
//     let app_key3 = document.getElementById('app_key3').value;
//     if(app_key != ""){
//         arr_api.push(app_key);
//     }
//     if(app_key1 != ""){
//         arr_api.push(app_key1);
//     }
//     if(app_key2 != ""){
//         arr_api.push(app_key2);
//     }
//     if(app_key3 != ""){
//         arr_api.push(app_key3);
//     }


//     let app_secret = document.getElementById('app_secret').value;
//     let app_secret1 = document.getElementById('app_secret1').value;
//     let app_secret2 = document.getElementById('app_secret2').value;
//     let app_secret3 = document.getElementById('app_secret3').value;
//     if(app_secret != ""){
//         arr_api.push(app_secret);
//     }
//     if(app_secret1 != ""){
//         arr_api.push(app_secret1);
//     }
//     if(app_secret2 != ""){
//         arr_api.push(app_secret2);
//     }
//     if(app_secret3 != ""){
//         arr_api.push(app_secret3);
//     }



//     let api_username = document.getElementById('api_username').value;
//     let api_username1 = document.getElementById('api_username1').value;
//     let api_username2 = document.getElementById('api_username2').value;
//     let api_username3 = document.getElementById('api_username3').value;
//     if(api_username != ""){
//         arr_api.push(api_username);
//     }
//     if(api_username1 != ""){
//         arr_api.push(api_username1);
//     }
//     if(api_username2 != ""){
//         arr_api.push(api_username2);
//     }
//     if(api_username3 != ""){
//         arr_api.push(api_username3);
//     }


//     let api_password = document.getElementById('api_password').value;
//     let api_password1 = document.getElementById('api_password1').value;
//     let api_password2 = document.getElementById('api_password2').value;
//     let api_password3 = document.getElementById('api_password3').value;
//     if(api_password != ""){
//         arr_api.push(api_password);
//     }
//     if(api_password1 != ""){
//         arr_api.push(api_password1);
//     }
//     if(api_password2 != ""){
//         arr_api.push(api_password2);
//     }
//     if(api_password3 != ""){
//         arr_api.push(api_password3);
//     }

//     console.log(arr_api);

//     for (let i = 0; i <= keys_api.length -1; i++) {
//           obj[keys_api[i]] = arr_api[i];

//       }

//       console.log(obj);


//       var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");

// var raw = JSON.stringify([obj]);

// var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: raw,
//   redirect: 'follow'
// };

// fetch("http://51.68.195.202:3000/users_api", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
// }