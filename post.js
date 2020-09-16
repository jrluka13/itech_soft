let app = new Vue({
  el:"#app",
  data(){
    return{
      username1: '',
      password1: '',
      email1: '',
      mobile_phone_number1: '',
      company_title1: '',
      compnay_type1: '',
      registered_trademark1: '',
      mersis_no1: '',
      Company_register_number1: '',
      trade_registeration_number1: '',
      kep_address1: '',
      tax_office_city1: '',
      tax_office1: '',
      tax_number1: '',
      signature_officer_name_surname1: '',
      signature_officer_title1: '',
      company_local_no1: '',
      company_mobile_no1: '',
      company_fax_no1: '',
      company_address1: '',
      contact_person_mobile_no1: '',
      contact_person_email1: '',
      username2: '',
      password2: '',
      email2: '',
      mobile_phone_number2: '',
      company_title2: '',
      registered_trademark2: '',
      company_register_number2: '',
      trade_registration_number2: '',
      kep_address2: '',
      tax_office_city2: '',
      tax_number2: '',
      name_surnmae: '',
      title_of_person: '',
      Local_no: '',
      mobile_No: '',
      Fax: '',
      Address: '',
      GSM: '',
      Personal_Email: '',
    }
  },
  methods:{
    postUsers(){
      let arr = [];
      let obj = {};
      let keys = ["username","password","email","mobile_phone_number","company_title","company_type","registered_trademark","mersis_no",
        "company_register_number","trade_registration_number","kep_address",
        "tax_office_city","tax_office_name","tax_number","signature_officer_title","signature_officer_name_surname","company_local_no",
        "company_mobile_no","company_fax_no","company_address","contact_person_mobile_no","contact_person_email","membership_type"];

      let username1 = this.username1;
      let password1 = this.password1;
      let email1 = this.email1;
      let mobile_phone_number1 = this.mobile_phone_number1;
      let company_title1 = this.company_title1;
      let compnay_type1 = this.compnay_type1;
      let registered_trademark1 = this.registered_trademark1;
      let mersis_no1 = this.mersis_no1;
      let Company_register_number1 = this.Company_register_number1;
      let trade_registeration_number1 = this.trade_registeration_number1;
      let kep_address1 = this.kep_address1;
      let tax_office_city1 = this.tax_office_city1;
      let tax_office1 = this.tax_office1;
      let tax_number1 = this.tax_number1;
      let signature_officer_name_surname1 = this.signature_officer_name_surname1;
      let signature_officer_title1 = this.signature_officer_title1;
      let company_local_no1 = this.company_local_no1;
      let company_mobile_no1 = this.company_mobile_no1;
      let company_fax_no1 = this.company_fax_no1;
      let company_address1 = this.company_address1;
      let contact_person_mobile_no1 = this.contact_person_mobile_no1;
      let contact_person_email1 = this.contact_person_email1;
      let membership_type = "company";

      arr.push(username1,password1,email1,mobile_phone_number1,company_title1,compnay_type1,registered_trademark1,
        mersis_no1,Company_register_number1,trade_registeration_number1,kep_address1,tax_office_city1,tax_office1,
        tax_number1,signature_officer_title1,signature_officer_name_surname1,company_local_no1,company_mobile_no1,
        company_fax_no1,company_address1,contact_person_mobile_no1,contact_person_email1,membership_type);

        console.log(arr);

        for(let i =0; i<keys.length; i++){
          obj[keys[i]] = arr[i];
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

        fetch("http://51.68.195.202:3000/users", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));

    },
    postUsers1(){
      let arr = [];
      let obj = {};
      let keys = ["username","password","email","mobile_phone_number","company_title","company_type","registered_trademark","mersis_no",
        "company_register_number","trade_registration_number","kep_address",
        "tax_office_city","tax_office_name","tax_number","signature_officer_title","signature_officer_name_surname","company_local_no",
        "company_mobile_no","company_fax_no","company_address","contact_person_mobile_no","contact_person_email"];

      let username2 = this.username2;
      let password2 = this.password2;
      let email2 = this.email2;
      let mobile_phone_number2 = this.mobile_phone_number2;
      let company_title2 = this.company_title2;
      let compnay_type1 = this.compnay_type1;
      let registered_trademark2 = this.registered_trademark2;
      let mersis_no1 = this.mersis_no1;
      let company_register_number2 = this.company_register_number2;
      let trade_registration_number2 = this.trade_registration_number2;
      let kep_address2 = this.kep_address2;
      let tax_office_city2 = this.tax_office_city2;
      let tax_office1 = this.tax_office1;
      let tax_number2 = this.tax_number2;
      let name_surnmae = this.name_surnmae;
      let title_of_person = this.title_of_person;
      let Local_no = this.Local_no;
      let mobile_No = this.mobile_No;
      let Fax = this.Fax;
      let Address = this.Address;
      let GSM = this.GSM;
      let Personal_Email = this.Personal_Email;
      let membership_type = "personal"

      arr.push(username2,password2,email2,mobile_phone_number2,company_title2,compnay_type1,registered_trademark2,
        mersis_no1,company_register_number2,trade_registration_number2,kep_address2,tax_office_city2,tax_office1,
        tax_number2,title_of_person,name_surnmae,Local_no,mobile_No,
        Fax,Address,GSM,Personal_Email,membership_type);

        console.log(arr);

        for(let i =0; i<keys.length; i++){
          obj[keys[i]] = arr[i];
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

        fetch("http://51.68.195.202:3000/users", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));

    }

  },
})

















