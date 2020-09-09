(async function loadData() {
    var iframe = document.getElementById("myiframe");  // One of the many ways to select your iframe
    iframe.src = "test.html";
}());
let Ana_Sayfa = document.getElementById("Ana_Sayfa");
Ana_Sayfa.onclick = function(){
    var iframe = document.getElementById("myiframe");  // One of the many ways to select your iframe
    iframe.src = "test.html";
    document.getElementById("Kuru").classList.remove("kt-menu__item--active");
    document.getElementById("Anna").classList.add("kt-menu__item--active");
    document.getElementById("Uru").classList.remove("kt-menu__item--active");
    document.getElementById("Sat").classList.remove("kt-menu__item--active");
    document.getElementById("Fat").classList.remove("kt-menu__item--active");
    document.getElementById("IL").classList.remove("kt-menu__item--active");
    document.getElementById("OP").classList.remove("kt-menu__item--active");
    document.getElementById("N").classList.remove("kt-menu__item--active");
    document.getElementById("He").classList.remove("kt-menu__item--active");
    document.getElementById("Tr").classList.remove("kt-menu__item--active");
    document.getElementById("My").classList.remove("kt-menu__item--active");
  }

let Kurulum = document.getElementById("Kurulum");
  Kurulum.onclick = function(){
    var iframe = document.getElementById("myiframe");  // One of the many ways to select your iframe
    iframe.src = "api.html";
    document.getElementById("Kuru").classList.add("kt-menu__item--active");
    document.getElementById("Anna").classList.remove("kt-menu__item--active");
    document.getElementById("Uru").classList.remove("kt-menu__item--active");
    document.getElementById("Sat").classList.remove("kt-menu__item--active");
    document.getElementById("Fat").classList.remove("kt-menu__item--active");
    document.getElementById("IL").classList.remove("kt-menu__item--active");
    document.getElementById("OP").classList.remove("kt-menu__item--active");
    document.getElementById("N").classList.remove("kt-menu__item--active");
    document.getElementById("He").classList.remove("kt-menu__item--active");
    document.getElementById("Tr").classList.remove("kt-menu__item--active");
    document.getElementById("My").classList.remove("kt-menu__item--active");
  }
let Ürünler = document.getElementById("Ürünler");
Ürünler.onclick = function(){
    var iframe = document.getElementById("myiframe");  // One of the many ways to select your iframe
    iframe.src = "index2.html";
    document.getElementById("Kuru").classList.remove("kt-menu__item--active");
    document.getElementById("Anna").classList.remove("kt-menu__item--active");
    document.getElementById("Uru").classList.add("kt-menu__item--active");
    document.getElementById("Sat").classList.remove("kt-menu__item--active");
    document.getElementById("Fat").classList.remove("kt-menu__item--active");
    document.getElementById("IL").classList.remove("kt-menu__item--active");
    document.getElementById("OP").classList.remove("kt-menu__item--active");
    document.getElementById("N").classList.remove("kt-menu__item--active");
    document.getElementById("He").classList.remove("kt-menu__item--active");
    document.getElementById("Tr").classList.remove("kt-menu__item--active");
    document.getElementById("My").classList.remove("kt-menu__item--active");
  }
  let Satın_Al = document.getElementById("Satın_Al");
  Satın_Al.onclick = function(){
    var iframe = document.getElementById("myiframe");  // One of the many ways to select your iframe
    iframe.src = "index3.html";
    document.getElementById("Kuru").classList.remove("kt-menu__item--active");
    document.getElementById("Anna").classList.remove("kt-menu__item--active");
    document.getElementById("Uru").classList.remove("kt-menu__item--active");
    document.getElementById("Sat").classList.add("kt-menu__item--active");
    document.getElementById("Fat").classList.remove("kt-menu__item--active");
    document.getElementById("IL").classList.remove("kt-menu__item--active");
    document.getElementById("OP").classList.remove("kt-menu__item--active");
    document.getElementById("N").classList.remove("kt-menu__item--active");
    document.getElementById("He").classList.remove("kt-menu__item--active");
    document.getElementById("Tr").classList.remove("kt-menu__item--active");
    document.getElementById("My").classList.remove("kt-menu__item--active");
  }
  let Fatura_Design = document.getElementById("Fatura_Design");
Fatura_Design.onclick = function(){
    var iframe = document.getElementById("myiframe");  // One of the many ways to select your iframe
    iframe.src = "index4.html";
    document.getElementById("Kuru").classList.remove("kt-menu__item--active");
    document.getElementById("Anna").classList.remove("kt-menu__item--active");
    document.getElementById("Uru").classList.remove("kt-menu__item--active");
    document.getElementById("Sat").classList.remove("kt-menu__item--active");
    document.getElementById("Fat").classList.add("kt-menu__item--active");
    document.getElementById("IL").classList.remove("kt-menu__item--active");
    document.getElementById("OP").classList.remove("kt-menu__item--active");
    document.getElementById("N").classList.remove("kt-menu__item--active");
    document.getElementById("He").classList.remove("kt-menu__item--active");
    document.getElementById("Tr").classList.remove("kt-menu__item--active");
    document.getElementById("My").classList.remove("kt-menu__item--active");
  }
  let ILTECH = document.getElementById("ILTECH");
  ILTECH.onclick = function(){
    var iframe = document.getElementById("myiframe");  // One of the many ways to select your iframe
    iframe.src = "iltechurunler.html";
    document.getElementById("Kuru").classList.remove("kt-menu__item--active");
    document.getElementById("Anna").classList.remove("kt-menu__item--active");
    document.getElementById("Uru").classList.remove("kt-menu__item--active");
    document.getElementById("Sat").classList.remove("kt-menu__item--active");
    document.getElementById("Fat").classList.remove("kt-menu__item--active");
    document.getElementById("IL").classList.add("kt-menu__item--active");
    document.getElementById("OP").classList.remove("kt-menu__item--active");
    document.getElementById("N").classList.remove("kt-menu__item--active");
    document.getElementById("He").classList.remove("kt-menu__item--active");
    document.getElementById("Tr").classList.remove("kt-menu__item--active");
    document.getElementById("My").classList.remove("kt-menu__item--active");
  }
  let OPENCART = document.getElementById("OPENCART");
  OPENCART.onclick = function(){
    var iframe = document.getElementById("myiframe");  // One of the many ways to select your iframe
    iframe.src = "opencarturunler.html";
    document.getElementById("Kuru").classList.remove("kt-menu__item--active");
    document.getElementById("Anna").classList.remove("kt-menu__item--active");
    document.getElementById("Uru").classList.remove("kt-menu__item--active");
    document.getElementById("Sat").classList.remove("kt-menu__item--active");
    document.getElementById("Fat").classList.remove("kt-menu__item--active");
    document.getElementById("IL").classList.remove("kt-menu__item--active");
    document.getElementById("OP").classList.add("kt-menu__item--active");
    document.getElementById("N").classList.remove("kt-menu__item--active");
    document.getElementById("He").classList.remove("kt-menu__item--active");
    document.getElementById("Tr").classList.remove("kt-menu__item--active");
    document.getElementById("My").classList.remove("kt-menu__item--active");
  }
  let N11 = document.getElementById("N11");
  N11.onclick = function(){
    var iframe = document.getElementById("myiframe");  // One of the many ways to select your iframe
    iframe.src = "urunler.html";
    document.getElementById("Kuru").classList.remove("kt-menu__item--active");
    document.getElementById("Anna").classList.remove("kt-menu__item--active");
    document.getElementById("Uru").classList.remove("kt-menu__item--active");
    document.getElementById("Sat").classList.remove("kt-menu__item--active");
    document.getElementById("Fat").classList.remove("kt-menu__item--active");
    document.getElementById("IL").classList.remove("kt-menu__item--active");
    document.getElementById("OP").classList.remove("kt-menu__item--active");
    document.getElementById("N").classList.add("kt-menu__item--active");
    document.getElementById("He").classList.remove("kt-menu__item--active");
    document.getElementById("Tr").classList.remove("kt-menu__item--active");
    document.getElementById("My").classList.remove("kt-menu__item--active");
  }
//   let Gittigidiyor = document.getElementById("Gittigidiyor");
//   Gittigidiyor.onclick = function(){
//     var iframe = document.getElementById("myiframe");  // One of the many ways to select your iframe
//     iframe.src = "test.html";
//   }
  let Hepsiburada = document.getElementById("Hepsiburada");
  Hepsiburada.onclick = function(){
    var iframe = document.getElementById("myiframe");  // One of the many ways to select your iframe
    iframe.src = "hburunler.html";
    document.getElementById("Kuru").classList.remove("kt-menu__item--active");
    document.getElementById("Anna").classList.remove("kt-menu__item--active");
    document.getElementById("Uru").classList.remove("kt-menu__item--active");
    document.getElementById("Sat").classList.remove("kt-menu__item--active");
    document.getElementById("Fat").classList.remove("kt-menu__item--active");
    document.getElementById("IL").classList.remove("kt-menu__item--active");
    document.getElementById("OP").classList.remove("kt-menu__item--active");
    document.getElementById("N").classList.remove("kt-menu__item--active");
    document.getElementById("He").classList.add("kt-menu__item--active");
    document.getElementById("Tr").classList.remove("kt-menu__item--active");
    document.getElementById("My").classList.remove("kt-menu__item--active");
  }
  let Trendyol = document.getElementById("Trendyol");
  Trendyol.onclick = function(){
    var iframe = document.getElementById("myiframe");  // One of the many ways to select your iframe
    iframe.src = "trendyolurunler.html";
    document.getElementById("Kuru").classList.remove("kt-menu__item--active");
    document.getElementById("Anna").classList.remove("kt-menu__item--active");
    document.getElementById("Uru").classList.remove("kt-menu__item--active");
    document.getElementById("Sat").classList.remove("kt-menu__item--active");
    document.getElementById("Fat").classList.remove("kt-menu__item--active");
    document.getElementById("IL").classList.remove("kt-menu__item--active");
    document.getElementById("OP").classList.remove("kt-menu__item--active");
    document.getElementById("N").classList.remove("kt-menu__item--active");
    document.getElementById("He").classList.remove("kt-menu__item--active");
    document.getElementById("Tr").classList.add("kt-menu__item--active");
    document.getElementById("My").classList.remove("kt-menu__item--active");
  }
  let My_profile = document.getElementById("My_profile");
  My_profile.onclick = function(){
    var iframe = document.getElementById("myiframe");  // One of the many ways to select your iframe
    iframe.src = "information.html";
    document.getElementById("Kuru").classList.remove("kt-menu__item--active");
    document.getElementById("Anna").classList.remove("kt-menu__item--active");
    document.getElementById("Uru").classList.remove("kt-menu__item--active");
    document.getElementById("Sat").classList.remove("kt-menu__item--active");
    document.getElementById("Fat").classList.remove("kt-menu__item--active");
    document.getElementById("IL").classList.remove("kt-menu__item--active");
    document.getElementById("OP").classList.remove("kt-menu__item--active");
    document.getElementById("N").classList.remove("kt-menu__item--active");
    document.getElementById("He").classList.remove("kt-menu__item--active");
    document.getElementById("Tr").classList.remove("kt-menu__item--active");
    document.getElementById("My").classList.add("kt-menu__item--active");
  }