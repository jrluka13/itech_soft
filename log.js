localStorage.setItem('login','0');
var app = new Vue({
  el: "#app",
  data() {
      return{
        username: "",
        password: "",
        loading: false,
        users: [],
      }
  },
  methods: {
    chekUsers(){

        this.loading = true;
        this.users = [];

        axios.get('http://51.68.195.202:3000/users')
        .then((response) => {
            const data = response.data;
            this.users = data;
            this.loading = false;
            this.getData();
        });


    },
    getData(){
        console.log(this.users);

        let find_id;
        let keys = ["username","password"];
        let findObj = {};
        let val = [];

        val.push(this.username,this.password);
        console.log(val);

        for (let i = 0; i <= keys.length -1; i++) {
            findObj[keys[i]] = val[i];
        }

        console.log(findObj);

        const result = this.users.filter(some =>
        Object.keys(findObj).every(key =>
        some[key] === findObj[key]));

        console.log(result);

        if(result.length != 0) {
            for (let value of Object.values(result[0])) {
                find_id = value;
                break;
            }
        }
          console.log(find_id);
          localStorage.setItem('id',find_id);
        if(result.length == 0) {
        localStorage.setItem('login','0');
        alert("Incorrect data entered!")
        }else{
        localStorage.setItem('login','1');
        console.log(localStorage.getItem('login'));
        this.goToPage();
        }


        // var user=getCookie("username");
        // if (user != "") {
        //     alert("Welcome again " + user);
        // } else {
        //     user = l1;
        //     if (user != "" && user != null) {
        //     setCookie("username", user, 30);
        //         }
        //     }
    },

    goToPage(){
	document.location.href = "http://127.0.0.1:5500/index.html";
    }


  }
});

function goToHome()
{
	document.location.href = "http://127.0.0.1:5500/index.html";
}


axios.get('http://51.68.195.202:3000/users')
        .then((response) => {
        const data = response.data;
        let user_data = data;
        let user_flag = false;
        let psw_flag = 1;

        if(user_data.length !=0){
            var us_data = new Vue ({
                el:'#users',
                data:{
                    Username: "",
                    Password: "",
                },
                created:function(){
                    console.log(user_data);
                  },

                methods: {
                    check() {
                        for (let i = 0; i <= user_data.length -1; i++) {
                            if (user_data[i].username === Username.value && user_data[i].password === Password.value) {
                                console.log(user_data[i]);
                                user_flag = true;
                                localStorage.setItem('username',Username.value);
                                localStorage.setItem('password',Password.value);
                                localStorage.setItem('id',user_data[i].id);
                                localStorage.setItem('login','1');
                                goToHome();
                            } else if (user_data[i].username === Username.value && user_data[i].password !== Password.value) {
                              psw_flag = 2;
                            }
                          }

                          if (Username.value.length == 0 && Password.value.length == 0) {
                            user_flag = true;
                              alert("Incorrect data entered! Please enter your username and password");
                          } else if (Username.value.length == 0) {
                            user_flag = true;
                            alert("Incorrect data entered! Please enter your username");
                          } else if (Password.value.length == 0) {
                            user_flag = true;
                            alert("Incorrect data entered! Please enter your password");
                          } else if (psw_flag == 2) {
                            user_flag = true;
                            alert("Password is not true")
                          }

                          if(user_flag == false) {
                            alert("User was not found")
                          }

                    }
                }
            });
        }
        });
