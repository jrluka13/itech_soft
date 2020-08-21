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
        GSM: '',
        Email1: '',
        get_users: [],
        keys_1: ["username","password","email","mobile_phone_number","company_title","company_type","registered_trademark",
"company_register_number","trade_registration_number","kep_address",
"tax_office_city","tax_office_name","tax_number","signature_officer_title","signature_officer_name_surname","company_local_no",
"company_mobile_no","company_fax_no","company_address","contact_person_mobile_no","contact_person_email","membership_type"],
        arr_update: [],
        id_user: parseInt(localStorage.getItem('id')),
        loading:false,
    },
    methods:{
        chekUsers(){

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

        update(){
            console.log(this.get_users);
            let l1,l2,l3,l4,l5,l6,l7,l8,l9,l10,l11,l12,l13,l14,l15,l16,l17,l18,l19,m1,m2,m3;
            let findObj = {}

            l1 = this.Username;
            l2 = this.Password;
            l3 = this.Email;
            l4 = this.Phone;
            l5 = this.Company_title;
            l6 = this.Company_type;
            l7 = this.Company_register_number;
            l8 = this.Kep_address;
            l9 = this.Tax_office_city;
            l10 = this.Tax_office;
            l11 = this.Tax_number;
            l12 = this.Title_of_person;
            l13 = this.Name_surname;
            l14 = this.Local_no;
            l15 = this.Mobile_no;
            l16 = this.Fax;
            l17 = this.Address1;
            l18 = this.Email1;
            l19 = this.Membership_type;

            this.arr_update.push(l1,l2,l3,l4,l5,l6,m1,l7,m2,l8,l9,l10,l11,l12,l13,l14,l15,l16,l17,m3,l18,l19);

            console.log(this.arr_update);
                for(let i = 0;i<this.arr_update.length;i++){
                    if(this.arr_update[i] == undefined){
                        continue;
                    }else
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
                }

        }
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