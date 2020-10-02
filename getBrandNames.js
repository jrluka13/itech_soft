
      //       var brand = new Vue ({
      //           el:'#brand',
      //           data:{
      //             id_brand: '',
      //             brand_name: '',
      //             name: '',
      //             selected: '',
      //             arr: [],
      //             // options: [
      //             //   { id: '', name: ''},
      //             // ]
      //             options: [],
      //             state: {
      //               options: []
      //             },

      //           },

      //           // created:function(){
      //           //   axios.get('https://api.trendyol.com/sapigw//brands/by-name?name=test')
      //           //     .then((response) => {
      //           //     const data = response.data;
      //           //     let brand_names = data;
      //           //     brand_name = brand_names[0].name;
      //           //     arr = brand_names;
      //           //     console.log();
      //           //   });


      //           methods: {
      //             getFormValues (event) {
      //               var sendAddess = this.name;
      //               console.log(sendAddess)
      //               axios.get('https://api.trendyol.com/sapigw//brands/by-name?name='+event.target.value)
      //               .then((response) => {
      //                 const data = response.data;
      //                 this.state.options = data;
      //                 console.log(this.state.options)

      //                 // this.state.options = response.data;
      //                 // console.log(this.state.options)
      //                 // name = arr[0].name;
      //                 // options[0].name = name;
      //                 // this.state.message = arr[0].name;
      //                   // this.state.options.push(this.arr[0].id);
      //                   // console.log(this.state.options.id);
      //                 // options.name = arr[0].name;
      //                 // console.log(options);

      //                 // console.log(arr)
      //               })
      //               console.log(this.state.options[0].name);
      //               // console.log(this.arr);
      //               // console.log(this.state.options);
      //               // .then((options) => {
      //               //   console.log(options[0].id)
      //               //   // for (let i = 0; i<=brand_names.length; i++) {
      //               //   //   options[i].id = brand_names[i].id;
      //               //   //   options[i].name = brand_names[i].name;

      //               //   })
      //               }
      //               // for (let i = 0; i<=brand_names.length; i++) {
      //               //   arr.push(brand_names[i].name);
      //               // }
      //               // console.log(arr);
      //               // }
      //             }

      // });

      function getFormValues() {
        let input = document.getElementById('search_in');
        let opt = document.getElementById('search_out');
        let brand_names = document.getElementById('brand_names');

        axios.get('https://api.trendyol.com/sapigw//brands/by-name?name='+input.value)
              .then((response) => {
              const data = response.data;
              let arr = data;
              console.log(arr);

              brand_names.innerHTML = arr.map(n => `<option id="${n.id}">${n.name}</option>`).join('')
              brand_names.innerHTML.style.top = '20px'
              })




      }

