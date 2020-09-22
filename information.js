
let info = new Vue ({
    el:'#user_inform',
    data:{
        start:'',
        name:'',
        mail:'',
        number_phone:'',
        loading:false,
        get_users: [],
        id_user: parseInt(localStorage.getItem('id')),
    },
    created:function(){
        this.loading = true;
        this.get_users = [];

            axios.get(`http://51.68.195.202:3000/users?id=eq.${this.id_user}`)
            .then((response) => {
                const data = response.data;
                this.get_users = data;
                this.loading = false;
                if(this.get_users[0].length != 0){
                    this.name = this.get_users[0].username;
                    this.start = this.get_users[0].membership_start_date;
                    this.mail = this.get_users[0].email;
                    this.number_phone = this.get_users[0].mobile_phone_number;
                }

            });


      },
});

let end = new Vue ({
    el:'#end',
    data:{
        end:'',
        loading:false,
        get_users: [],
        id_user: parseInt(localStorage.getItem('id')),
    },
    created:function(){
        this.loading = true;
        this.get_users = [];

            axios.get(`http://51.68.195.202:3000/users?id=eq.${this.id_user}`)
            .then((response) => {
                const data = response.data;
                this.get_users = data;
                this.loading = false;
                if(this.get_users[0].length != 0){
                    this.end = this.get_users[0].membership_end_date;
                }

            });


      },
});
let id_user = parseInt(localStorage.getItem('id'));
axios.get(`http://51.68.195.202:3000/users?id=eq.${id_user}`)
            .then((response) => {
                const data = response.data;
                let get_users = data;

                if(get_users.length != 0){
                    var up_info = new Vue ({
                        el: '#up_info',
                        data: {
                            Username: '',
                            Password: '',
                            Email: '',
                            Phone: '',
                            Membership_type: '',
                            Company_title: '',
                            Company_type: '',
                            Registered_trademark: '',
                            Mersis_no: '',
                            Trade_registration_number: '',
                            Company_register_number: '',
                            Kep_address: '',
                            Tax_office_city: '',
                            Tax_office: '',
                            Tax_number: '',
                            Name_surname: '',
                            Title_of_person: '',
                            Local_no: '',
                            Mobile_no: '',
                            Fax: '',
                            Address1: '',
                            Contact_person_email: '',
                            Email1: '',
                            get_users: [],
                            get_users1:[],
                            keys_1: ["username","password","email","mobile_phone_number", "company_title","company_type","registered_trademark","mersis_no", "company_register_number","trade_registration_number","kep_address","tax_office_city","tax_office_name","tax_number","signature_officer_title","signature_officer_name_surname","company_local_no","company_mobile_no","company_fax_no","company_address","contact_person_mobile_no","contact_person_email", "membership_type"],
                            arr_update: [],
                            id_user: parseInt(localStorage.getItem('id')),
                            loading:false,
                        },
                        created:function(){
                            console.log(get_users[0]);
                            let lengthh = 0;
                            let newarr = [];
                            // for(let i in get_users[0]){
                            //     lengthh++;
                            // };
                            // let newGet_users = [];
                            // for(let i = 0;i<lengthh;i++){
                            //     if(Object.keys(get_users[0])[i] == "id" || Object.keys(get_users[0])[i] == "mersis_no" || Object.keys(get_users[0])[i] == "registered_trademark" || Object.keys(get_users[0])[i] == "trade_registration_number"
                            //     || Object.keys(get_users[0])[i] == "contact_person_mobile_no" || Object.keys(get_users[0])[i] == "membership_start_date" || Object.keys(get_users[0])[i] == "membership_end_date"
                            //     || Object.keys(get_users[0])[i] == "create_date" || Object.keys(get_users[0])[i] == "update_date" || Object.keys(get_users[0])[i] == "active" || Object.keys(get_users[0])[i] == "deleted") {
                            //         continue;
                            //     }
                            //     newGet_users.push(Object.keys(get_users[0])[i]);
                            // }
                            // console.log(newGet_users);

                            // for(let i =0;i<get_users.length;i++){
                            //     if(get_users)
                            // }

                            let arr_up = [];

                            let findObj = []




                            arr_up.push(this.Username,this.Password,this.Email,this.Phone,this.Company_title,this.Company_type, this.Registered_trademark, this.Mersis_no, this.Company_register_number,this.Trade_registration_number,this.Kep_address,
                                this.Tax_office_city,this.Tax_office,this.Tax_number,this.Name_surname,this.Title_of_person,this.Local_no,this.Mobile_no,this.Fax,this.Address1, this.Contact_person_email,
                                this.Email1,this.Membership_type);

                            // for(let i =0;i<get_users[0].length;i++){
                            //     console.log(i);
                            //     // if(i == 8){
                            //     //     console.log(awdad);
                            //     // }
                            // }
                            for (let value of Object.values(get_users[0])) {
                                findObj.push(value);
                            }
                            findObj.shift();
                            for(let i = 0;i<6;i++){
                                findObj.pop();
                            }
                            for(let i = 0;i<findObj.length;i++){
                                newarr.push(findObj[i]);

                            }
                            console.log(newarr);

                            this.Username = newarr[0];
                            this.Password = newarr[1];
                            this.Email = newarr[2];
                            this.Phone = newarr[3];
                            this.Company_title = newarr[4];
                            this.Company_type = newarr[5];
                            this.Registered_trademark = newarr[6];
                            this.Mersis_no = newarr[7];
                            this.Company_register_number = newarr[8];
                            this.Trade_registration_number = newarr[9];
                            this.Kep_address = newarr[10];
                            this.Tax_office_city = newarr[11];
                            this.Tax_office = newarr[12];
                            this.Tax_number = newarr[13];
                            this.Title_of_person = newarr[14];
                            this.Name_surname = newarr[15];
                            this.Local_no = newarr[16];
                            this.Mobile_no = newarr[17];
                            this.Fax = newarr[18];
                            this.Address1 = newarr[19];
                            this.Email1 = newarr[20];
                            this.Contact_person_email = newarr[21];
                            this.Membership_type = newarr[22];


                            // for(let i =0;i<newarr.length;i++){
                            //     value = arr_up[i];
                            //     value = newarr[i];
                            //     console.log(value);

                            // };
                                // console.log(findObj);
                                // for(let i = 0;i<=findObj.length -1;i++){
                                //     console.log(adwadawd);
                                // }


                          },


                        methods:{

                            chekUsers: function() {

                                this.loading = true;
                                this.get_users = [];

                                axios.get('http://51.68.195.202:3000/users')
                                .then((response) => {
                                    const data = response.data;
                                    this.get_users = data;
                                    this.loading = false;
                                    this.update();
                                });
                            },

                            update: function() {
                                console.log(this.get_users);
                                let l1,l2,l3,l4,l5,l6,l7,l8,l9,l10,l11,l12,l13,l14,l15,l16,l17,l18,l19,l20,l21,l22,l23;
                                let findObj = {}

                                l1 = this.Username;
                                l2 = this.Password;
                                l3 = this.Email;
                                l4 = this.Phone;
                                l5 = this.Company_title;
                                l6 = this.Company_type;
                                l7 = this.Registered_trademark;
                                l8 = this.Mersis_no;
                                l9 = this.Company_register_number;
                                l10 = this.Trade_registration_number;
                                l11 = this.Kep_address;
                                l12 = this.Tax_office_city;
                                l13 = this.Tax_office;
                                l14 = this.Tax_number;
                                l15 = this.Name_surname;
                                l16 = this.Title_of_person;
                                l17 = this.Local_no;
                                l18 = this.Mobile_no;
                                l19 = this.Fax;
                                l20 = this.Address1;
                                l21 = this.Email1;
                                l22 = this.Contact_person_email;
                                l23 = this.Membership_type;


                                this.arr_update.push(l1,l2,l3,l4,l5,l6,l7,l8,l9,l10,l11,l12,l13,l14,l15,l16,l17,l18,l19,l20,l21,l22,l23);

                                console.log(this.arr_update);
                                    for(let i = 0;i<this.arr_update.length;i++){
                                            findObj[this.keys_1[i]] = this.arr_update[i];
                                    }

                                    console.log(findObj);

                                    for(let i =0;i<this.get_users.length;i++){
                                        let findId;
                                        for (let value of Object.values(this.get_users[i])) {
                                            findId = value;
                                            console.log(findId);
                                            if(findId = this.id_user){
                                                var myHeaders = new Headers();
                                                myHeaders.append("Content-Type", "application/json");

                                                var raw = JSON.stringify([findObj]);

                                                var requestOptions = {
                                                method: 'PATCH',
                                                headers: myHeaders,
                                                body: raw,
                                                redirect: 'follow'
                                                };

                                                fetch(`http://51.68.195.202:3000/users?id=eq.${this.id_user}`, requestOptions)
                                                .then(response => response.text())
                                                .then(result => console.log(result))
                                                .catch(error => console.log('error', error));

                                            }
                                            break;
                                        }
                                        this.arr_update = [];
                                    }

                            }
                        }
                    });
                }
            });



 axios.get('http://51.68.195.202:3000/pay')
        .then((response) => {
        const data = response.data;
        let get_pay = data;

        if(get_pay.length !=0){
            new Vue ({
                el:'#get_pay',
                data:{

                },
                created:function(){

                    console.log(get_pay);

                  },
            });
        }
        });













// let get_users;
// let l1,l2,l3,l4,l5,l6,l7,l8,l9,l10,l11,l12,l13,l14,l15,l16,l17,l18,l19,m1,m2,m3;
// let keys_1 = ["username","password","email","mobile_phone_number","company_title","company_type","registered_trademark",
// "company_register_number","trade_registration_number","kep_address",
// "tax_office_city","tax_office_name","tax_number","signature_officer_title","signature_officer_name_surname","company_local_no",
// "company_mobile_no","company_fax_no","company_address","contact_person_mobile_no","contact_person_email","membership_type"];
// let arr_update = [];
// let id_user =parseInt(localStorage.getItem('id'));


// (async function loadData() {
//     let url = 'http://51.68.195.202:3000/users';
//     let response = await fetch(url);
//     let commits = await response.json(); // читаем ответ в формате JSON
//     get_users = commits;
//     console.log(get_users);
// }());

// function update(){
//     let findObj = {};
//     l1 = document.getElementById('Username').value;
//     l2 = document.getElementById('Password').value;
//     l3 = document.getElementById('Email').value;
//     l4 = document.getElementById('Phone_number').value; //
//     l5 = document.getElementById('Company_title').value;
//     l6 = document.getElementById('Company_type').value; //

//     l7 = document.getElementById('Company_register_number').value;

//     l8 = document.getElementById('Kep_address').value;
//     l9 = document.getElementById('Tax_office_city').value;
//     l10 = document.getElementById('Tax_office').value;
//     l11 = document.getElementById('Tax_number').value;
//     l12 = document.getElementById('Title_of_person').value;
//     l13 = document.getElementById('Name_surname').value;
//     l14 = document.getElementById('Local_no').value;
//     l15 = document.getElementById('Mobile_no').value; //
//     l16 = document.getElementById('Fax').value;
//     l17 = document.getElementById('Address1').value;

//     l18 = document.getElementById('Email1').value;
//     l19 = document.getElementById('Membership_type').value;

//     arr_update.push(l1,l2,l3,l4,l5,l6,m1,l7,m2,l8,l9,l10,l11,l12,l13,l14,l15,l16,l17,m3,l18,l19);

//     for(let i = 0;i<arr_update.length;i++){
//         if(arr_update[i] == undefined){
//             continue;
//         }else
//             findObj[keys_1[i]] = arr_update[i];
//     }

//     console.log(findObj);

//     for(let i =0;i<get_users.length;i++){
//         let findId;
//         for (let value of Object.values(get_users[i])) {
//             findId = value;
//             console.log(findId);
//             if(findId = id_user){
//                 var myHeaders = new Headers();
//                 myHeaders.append("Content-Type", "application/json");

//                 var raw = JSON.stringify([findObj]);

//                 var requestOptions = {
//                   method: 'PATCH',
//                   headers: myHeaders,
//                   body: raw,
//                   redirect: 'follow'
//                 };

//                 fetch(`http://51.68.195.202:3000/users?id=eq.${id_user}`, requestOptions)
//                   .then(response => response.text())
//                   .then(result => console.log(result))
//                   .catch(error => console.log('error', error));

//             }
//             break;
//         }
//     }




// }