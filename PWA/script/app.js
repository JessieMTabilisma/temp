// fetch data

// window.onload = function() {
//     fetch("data.json")
//     .then((response) => response.json())
//     .then((data) => {
//         let output = '<h1>Hi json</h1>'
//         console.log(data);
//     })
// }
//event trigger
var colorNav = document.querySelectorAll('main:target');
var colorSvg = document.querySelectorAll('.p_navi > a');
var pslogo = document.getElementById('pslogo');
var addtobag = document.getElementById('addtobag');
var storelocator = document.getElementById('storelocator');
    for(let i=0; i<colorSvg.length; i++){
        if(pslogo == colorSvg[i]){
            pslogo.classList.add('clickit');
        }else if(addtobag == colorSvg[i]){
            addtobag.classList.add('clickit');
        }else if(storelocator == colorSvg[i]){
            storelocator.classList.add('clickit');
        }else{
            console.log("there are no click events");
        }
    }
// svg trigger animation for pinesearch home logo
// var clicker = document.querySelector('#pslogo');
//     clicker.addEventListener('click', function(){
//     if(this.classList.contains('clickit')){
//         this.classList.remove('clickit');
//     }else{
//         this.classList.add('clickit');
//     }
// });
// // svg trigger animation for add to bag
// var clicker = document.querySelector('#addtobag');
// clicker.addEventListener('click', function(){
//     if(this.classList.contains('clickit')){
//         this.classList.remove('clickit');
//     }else{
//         this.classList.add('clickit');
//     }
// });
// // svg trigger animation for storelocator
// var clicker = document.querySelector('#storelocator');
//     clicker.addEventListener('click', function(){
//         if(this.classList.contains('clickit')){
//             this.classList.remove('clickit');
//         }else{
//             this.classList.add('clickit');
//         }
// });
// fiter search
//get input element

//register service worker
if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./serviceworker.js')
    .then(function(reg) {
        //when the registration is successful
        console.log('Registration succeeded. Scope is '+reg.scope);
    }).catch(function(error) {
        //when the registration fails
        console.log('Registration failed with '+ error);
    });
} 

var pineFilter = document.getElementById('searchBar');
pineFilter.addEventListener('keyup', filterProducts);


function filterProducts(){
  //get filter value
  var filterValue = document.getElementById('searchBar').value.toUpperCase();
  
  //get productList
  var prod = document.getElementById('productList');

  var mainContent = prod.querySelectorAll('div.p_products');

  //get filter option
  var filterButton = document.getElementById('filterOption')
  var filterChoice = filterButton.options[filterButton.selectedIndex].value;

  if (filterChoice == "1") {
    for(var i = 0; i< mainContent.length; i++){
      var me  = mainContent[i].getElementsByTagName('h4')[0];
      if(me.innerHTML.toUpperCase().indexOf(filterValue) > -1){
        mainContent[i].style.display = "";
      }else{
        mainContent[i].style.display = 'none';
      }
    }
  } else if (filterChoice == "2") {
    for(var i = 0; i< mainContent.length; i++){
      var me  = mainContent[i].getElementsByTagName('h6')[0];
      if(Number(filterValue) >= Number(me.innerHTML)){
        mainContent[i].style.display = "";
      }else{
        mainContent[i].style.display = 'none';
      }
    }
  } else if (filterChoice == "3") {
    for(var i = 0; i< mainContent.length; i++){
      var me  = mainContent[i].getElementsByTagName('h4')[0];
      if(me.innerHTML.toUpperCase().indexOf(filterValue) > -1){
        mainContent[i].style.display = "";
      }else{
        mainContent[i].style.display = 'none';
      }
    }
  }
  
}
// data 
var dataProducts = [
  {
      name: "alfajorcaramel",
      price: 250
  },
  {
      name: "camotechips",
      price: 40
  },
  {
      name: "chocoflakes",
      price: 150
  },
  {
      name: "chocoflakes2",
      price: 150
  },
  {
      name: "chocoflakes3",
      price: 150
  },
  {
      name: "chocomallows",
      price: 100
  },
  {
      name: "fudgebar",
      price: 100
  },
  {
      name: "lenguadegato",
      price: 150
  },
  {
      name: "meringue",
      price: 100
  },
  {
      name: "milkypeanutcrunch",
      price: 200
  },
  {
      name: "orangesampaloc",
      price: 120
  },
  {
      name: "peanutbrittle",
      price: 200
  },
  {
      name: "peanutbrittle2",
      price: 100
  },
  {
      name: "peanutbutter",
      price: 120
  },
  {
      name: "peanutgarlic",
      price: 100
  },
  {
      name: "pilinuts",
      price: 200
  },
  {
      name: "ricewine",
      price: 120
  },
  {
      name: "strawberryjam",
      price: 200
  },
  {
      name: "strawberryjam2",
      price: 200
  },
  {
      name: "strawberrywine",
      price: 120
  },
  {
      name: "tamarind",
      price: 100
  },
  {
      name: "ubecrinkles",
      price: 100
  },
  {
      name: "ubejam",
      price: 120
  }
];
