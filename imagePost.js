let index = 0;
let imageBig = document.getElementById('img');
let imgs = new Array();
let arr_keys = ['id','url'];
let obj_img = {

  images:[

  ]
}
// function imgsrc() {
//   console.log(imgs);
//   index++;index%=imgs.length;
//   imageBig.style.backgroundImage = "url(" + imgs[index] + ")";
// }
let step4 = document.getElementById('step4');
let id =1;
let m =0;
function dispImg (input,label_cart,label,image,div){
  imgs.push(label + ".png")
  document.getElementById(input).addEventListener("change", function () {
    if (this.files[0]) {
      let arr_val = [id,'http://51.68.195.202:9393/images/' + this.files[0].name];
      let obj = {
        'id':'',
        'url':''
      }
      obj.id = arr_val[0];
      obj.url = arr_val[1];
      obj_img.images.push(obj);
      id++;
      // for(let i = 0;i<arr_keys.length;i++){
      //   obj_img.images.push({'id':i});
      // }
      // [arr_keys[i]] : arr_val[i]
  // obj_img.images[obj_img.images.length].push({'id':15,'url':'awdawdawd'});

      // var formdata = new FormData();
      //   formdata.append("photo", this.files[0], this.files[0].name);

      //   var requestOptions = {
      //     method: 'POST',
      //     body: formdata,
      //     redirect: 'follow'
      //   };

      //   fetch("http://51.68.195.202:9393/cgi-bin/upload.cgi", requestOptions)
      //     .then(response => response.text())
      //     .then(result => console.log(result))
      //     .catch(error => console.log('error', error));

      var fr = new FileReader();

      fr.addEventListener("load", function () {
        arr = [];
        arr.push(1);
        document.getElementById(div).style.display='block';
        document.getElementById(image).style.display = 'none';
        document.getElementById(label).style.backgroundImage = "url()";
        document.getElementById(label_cart).style.display = 'block';
        // document.getElementById("img").style.backgroundImage = "url(" + fr.result + ")";
        document.getElementById(label_cart).src = fr.result;
        // document.getElementById(label_cart).style.background = "linear-gradient(0deg, rgba(236, 237, 243, 0.59), rgba(236, 237, 243, 0.59))";

        document.getElementById("img").src = fr.result;


        let buttons = step4.getElementsByClassName("btnImg");
        for(let button of buttons){
            button.style.display = "inline"
        }

      }, false);

      fr.readAsDataURL(this.files[0]);
    }
  });
}

function getData(){
  console.log(obj_img)
};

function deleteImg(label,image,div){
  document.getElementById(image).style.display = 'block';
  document.getElementById(div).style.display='none';
  document.getElementById(label).style.backgroundImage = "url(/src/assets/images/Vector.png)";
}

function refreshImg(){
  console.log(1521211)
}



