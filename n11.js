function changeContent() {
  let first = document.getElementById("addproduct");
  if (first.style.display === 'none') {
    first.style.display = 'block'
  } else {
    first.style.display = 'none'
  }

}

function changeContent1() {
  let second = document.getElementById("addproduct1");
  let third = document.getElementById("addproduct2");
  let tab = document.getElementById('circle5')
  let tab1 = document.getElementById('circle1')
  if (third.style.display === 'none') {
    third.style.display = 'block'
    tab.style.background = '#3758FF'
    tab1.style.color = '#ffffff'
    second.style.display = 'none'
  }

}

function changeContent11() {
  let second = document.getElementById("addproduct1");
  let third = document.getElementById("addproduct2");
  let tab = document.getElementById('circle5')
  let tab1 = document.getElementById('circle1')
  if (third.style.display === 'block') {
    third.style.display = 'none'
    second.style.display = 'block'
    tab.style.background = '#ffffff'
    tab1.style.color = '#3758FF'
  }

}

function changeConten2() {
  let third = document.getElementById("addproduct2");
  let four = document.getElementById("addproduct3");
  let tab2 = document.getElementById('circle6')
  let tab3 = document.getElementById('circle2')
  if (third.style.display === 'block') {
    third.style.display = 'none'
    four.style.display = 'block'
    tab2.style.background = '#3758FF'
    tab3.style.color = '#ffffff'
  }

}

function changeConten22() {
  let third = document.getElementById("addproduct2");
  let four = document.getElementById("addproduct3");
  let tab2 = document.getElementById('circle6')
  let tab3 = document.getElementById('circle2')
  if (third.style.display === 'none') {
    third.style.display = 'block'
    four.style.display = 'none'
    tab2.style.background = '#ffffff'
    tab3.style.color = '#3758FF'
  }

}

function changeConten3() {
  let first = document.getElementById("addproduct");
  let four = document.getElementById("addproduct3");
  let tab3 = document.getElementById('circle7')
  let tab4 = document.getElementById('circle3')
  if (first.style.display === 'none') {
    first.style.display = 'block'
    four.style.display = 'none'
    tab3.style.background = '#3758FF'
    tab4.style.color = '#ffffff'
  }

}

function changeConten33() {
  let first = document.getElementById("addproduct");
  let four = document.getElementById("addproduct3");
  let tab3 = document.getElementById('circle7')
  let tab4 = document.getElementById('circle3')
  if (first.style.display === 'block') {
    first.style.display = 'none'
    four.style.display = 'block'
    tab3.style.background = '#ffffff'
    tab4.style.color = '#3758FF'
  }

}