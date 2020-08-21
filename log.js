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
