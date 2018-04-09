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

/** SERVICE WORKER */
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

const products = [
    {
        name: "Alfajor Caramel",
        price: 250,
        prodImg: "./products/alfajorcaramel.jpg",
        prodID: "alfajorcaramel",
        description: "Savour the flavor of caramel.",
		location: ["Public Market", "Maharlika", "Governor Pack Road", 
		"Athletic Bowl", "Mines View", 
		"Good Shepherd", "Wright Park"]
    },
    {
        name: "Camote Chips",
        price: 40,
        prodImg: "./products/camotechips.jpg",
        prodID: "camotechips",
        description: "Simply the best camote chips.",
		location: ["Public Market", "Maharlika", "SM", 
		"Governor Pack Road", "Athletic Bowl", "Mines View", 
		"Lourdes Grotto", "Good Shepherd", "Wright Park",
		"Porta Vaga Mall"]
    },
    {
        name: "Choco Flakes",
        price: 100,
        prodImg: "./products/chocoflakes.jpg",
        prodID: "chocoflakes",
        description: "One of the well known delicacies in the City of Pines.",
		location: ["Public Market", "Maharlika", "SM", 
		"Governor Pack Road", "Athletic Bowl", "Mines View", 
		"Lourdes Grotto", "Good Shepherd", "Wright Park",
		"Porta Vaga Mall"]
    },
    {
        name: "Milky Chocoflakes",
        price: 100,
        prodImg: "./products/chocoflakes2.jpg",
        prodID: "milkychocoflakes",
        description: "The Crunchiest and Milkiest choco flakes in town 'Mika'san Choc'o Flakes'.",
		location: ["Public Market", "Maharlika", "SM", 
		"Governor Pack Road", "Athletic Bowl", "Mines View", 
		"Lourdes Grotto", "Good Shepherd", "Wright Park",
		"Porta Vaga Mall"]
    },
    {
        name: "Chocolate Flakes",
        price: 100,
        prodImg: "./products/chocoflakes3.jpg",
        prodID: "choco flakes",
        description: "The Crunchiest and chocolatey choco flakes in town 'Mika'san Choc'o Flakes'.",
		location: ["Public Market", "Maharlika", "SM", 
		"Governor Pack Road", "Athletic Bowl", "Mines View", 
		"Lourdes Grotto", "Good Shepherd", "Wright Park",
		"Porta Vaga Mall"]
    },
    {
        name: "Choco Mallows",
        price: 120,
        prodImg: "./products/chocomallows.jpg",
        prodID: "chocomallows",
        description: "Choco mallows that will certainly bring back childhood memories.",
		location: ["Public Market", "Maharlika", "SM", 
		"Governor Pack Road", "Athletic Bowl", "Mines View", 
		"Lourdes Grotto", "Good Shepherd", "Wright Park",
		"Porta Vaga Mall"]
    },
    {
        name: "Fudge Bar",
        price: 100,
        prodImg: "./products/fudgebar.jpg",
        prodID: "fudgebar",
        description: "Fudgiest bar on town that will surely give you a taste you won't forget.",
		location: ["Public Market", "Maharlika", "SM", 
		"Governor Pack Road", "Athletic Bowl", "Mines View", 
		"Lourdes Grotto", "Good Shepherd", "Wright Park",
		"Porta Vaga Mall"]
	},
    {
        name: "Lengua de Gato",
        price: 150,
        prodImg: "./products/lenguadegato.jpg",
        prodID: "lenguadegato",
        description: "Simply the best Lengua in the City of Pines.",
    	location: ["Public Market", "Maharlika", "SM", 
		"Governor Pack Road", "Athletic Bowl", "Mines View", 
		"Lourdes Grotto", "Good Shepherd", "Wright Park",
		"Porta Vaga Mall"]
	},
    {
        name: "Meringue",
        price: 160,
        prodImg: "./products/meringue.jpg",
        prodID: "meringue",
        description: "Meringue perfection at its finest",
    	location: ["Public Market", "Maharlika", "SM", 
		"Governor Pack Road", "Athletic Bowl", "Mines View", 
		"Lourdes Grotto", "Good Shepherd", "Wright Park",
		"Porta Vaga Mall"]
	},
    {
        name: "Peanut Crunch",
        price: 180,
        prodImg: "./products/milkypeanutcrunch.jpg",
        prodID: "peanutcrunch",
        description: "Milky Peanut Crunch that will give a milky and nutty feeling with just one bite.",
    	location: ["Public Market", "Maharlika", "SM", 
		"Governor Pack Road", "Athletic Bowl", "Mines View", 
		"Lourdes Grotto", "Good Shepherd", "Wright Park",
		"Porta Vaga Mall"]
	},
    {
        name: "Orange Sampaloc",
        price: 70,
        prodImg: "./products/orangesampaloc.jpg",
        prodID: "orangesampaloc",
        description: "A sweet and tangy taste that will definetly give you that energy boost.",
    	location: ["Public Market", "Maharlika", "SM", 
		"Governor Pack Road", "Athletic Bowl", "Mines View", 
		"Good Shepherd", "Wright Park"]
	},
    {
        name: "Peanut Brittle (crash version)",
        price: 200,
        prodImg: "./products/peanutbrittle.jpg",
        prodID: "peanutbrittle2",
        description: "Peanut Brittle that will give you a sweet and nutty experience.",
    	location: ["Public Market", "Maharlika", "SM", 
		"Governor Pack Road", "Athletic Bowl", "Mines View", 
		"Lourdes Grotto", "Good Shepherd", "Wright Park",
		"Porta Vaga Mall"]
	},
    {
        name: "Peanut Brittle",
        price: 100,
        prodImg: "./products/peanutbrittle.jpg",
        prodID: "peanutbrittle",
        description: "Peanut Brittle that will give you a sweet and nutty taste that is unforgettable.",
    	location: ["Public Market", "Maharlika", "SM", 
		"Governor Pack Road", "Athletic Bowl", "Mines View", 
		"Lourdes Grotto", "Good Shepherd", "Wright Park",
		"Porta Vaga Mall"]
	},
    {
        name: "Peanut Butter",
        price: 120,
        prodImg: "./products/peanutbutter.jpg",
        prodID: "peanutbutter",
        description: "Peanut butter that will surely make you want to come back for more.",
    	location: ["Public Market", "Maharlika", "SM", 
		"Governor Pack Road", "Athletic Bowl", "Mines View", 
		"Lourdes Grotto", "Good Shepherd", "Wright Park",
		"Porta Vaga Mall"]
	},
    {
        name: "Toasted Peanuts with Garlic Chips",
        price: 100,
        prodImg: "./products/peanutgarlic.jpg",
        prodID: "toastedpeanuts",
        description: "Garlic Chips' that will surely give a nutty experience.",
    	location: ["Public Market", "Maharlika", "SM", 
		"Governor Pack Road", "Athletic Bowl", "Mines View", 
		"Lourdes Grotto", "Good Shepherd", "Wright Park",
		"Porta Vaga Mall"]
	},
    {
        name: "Pili Nuts",
        price: 200,
        prodImg: "./products/pilinuts.jpg",
        prodID: "pilinuts",
        description: "The crispiest pili is Ashley's Pili",
    	location: ["Public Market", "Maharlika", "SM", 
		"Governor Pack Road", "Athletic Bowl", "Mines View", 
		"Lourdes Grotto", "Good Shepherd", "Wright Park",
		"Porta Vaga Mall"]
	},
    {
        name: "Rice Wine",
        price: 500,
        prodImg: "./products/ricewine.jpg",
        prodID: "ricewine",
        description: "The strawberry wine that stays sharp ‘til the bottom of the glass.",
    	location: ["Public Market", "Maharlika", "SM", 
		"Governor Pack Road", "Athletic Bowl", "Mines View", 
		"Lourdes Grotto", "Good Shepherd", "Wright Park",
		"Porta Vaga Mall"]
	},
    {
        name: "Straberry Jam",
        price: 200,
        prodImg: "./products/strawberryjam.jpg",
        prodID: "strawberryjam",
        description: "Cooked with love comes another product which will surely catch your taste buds.",
    	location: ["Public Market", "Maharlika", "SM", 
		"Governor Pack Road", "Athletic Bowl", "Mines View", 
		"Lourdes Grotto", "Good Shepherd", "Wright Park",
		"Porta Vaga Mall"]
	},
    {
        name: "Strawberry Jam La Trinidad",
        price: 200,
        prodImg: "./products/strawberryjam2.jpg",
        prodID: "strawberryjam2",
        description: "Made with La Trinidad's Sweet Strawberries in a jar.",
    	location: ["Public Market", "Maharlika", "SM", 
		"Governor Pack Road", "Athletic Bowl", "Mines View", 
		"Good Shepherd", "Wright Park",
		"Porta Vaga Mall"]
	},
    {
        name: "Strawberry Wine",
        price: 100,
        prodImg: "./products/strawberrywine.jpg",
        prodID: "strawberrywine",
        description: "The strawberry wine that stays sharp ‘til the bottom of the glass.",
    	location: ["Public Market", "Maharlika", "SM", 
		"Governor Pack Road", "Athletic Bowl", "Mines View",
		"Good Shepherd", "Wright Park",
		"Porta Vaga Mall"]
	},
    {
        name: "Sweet Tamarind",
        price: 100,
        prodImg: "./products/tamarind.jpg",
        prodID: "sweettamarind",
        description: "A local dessert for everyone.",
    	location: ["Public Market", "Maharlika", "SM", 
		"Governor Pack Road", "Athletic Bowl", "Mines View", 
		"Lourdes Grotto", "Good Shepherd", "Wright Park",
		"Porta Vaga Mall"]
	},
    {
        name: "Ube Crinkles",
        price: 100,
        prodImg: "./products/ubecrinkles.jpg",
        prodID: "ubecrinkles",
        description: "Ube Crinkles that will definitly bring you to paradise.",
    	location: ["Public Market", "Maharlika", "SM", 
		"Governor Pack Road", "Athletic Bowl", "Mines View", 
		"Lourdes Grotto", "Good Shepherd", "Wright Park",
		"Porta Vaga Mall"]
	},
    {
        name: "Ube Jam (Good Shepherd)",
        price: 100,
        prodImg: "./products/ubejam.jpg",
        prodID: "ubejam",
        description: " Freshly harvested Yam, cooked with love Ube Jam.",
    	location: ["Public Market", "Maharlika", "SM", 
		"Governor Pack Road", "Athletic Bowl", "Mines View", 
		"Lourdes Grotto", "Good Shepherd", "Wright Park",
		"Porta Vaga Mall"]
	}
   
]

/** INDEXEDDB */
window.indexedDB = window.indexedDB || window.mozIndexedDB ||
    window.webkitIndexedDB || window.msIndexedDB;

//will alert if browser doesn't support indexedDB
if(!window.indexedDB) {
    alert("Your browser does not support IndexedDB");
}

//global variables for database, transaction, store, and index
var request = window.indexedDB.open("productsdb", 13),
    database,
    transaction,
    store,
    index;

//creates store
request.onupgradeneeded = function(e) {
    let database = request.result,
        store = database.createObjectStore("productList", {
            keyPath: "prodID"}); //creates an index for product name for querying
};

//error handling
request.onerror = function(e) {
    console.log("There was an error: "+e.target.errorCode);
}

request.onsuccess = function(e) {
    database = request.result;
    transaction = database.transaction(["productList"], ["readwrite"]); //readwrite allows database query and update
    store = transaction.objectStore("productList");

    //error handling
    database.oneerror = function(e) {
        console.log("There was an error: "+e.target.errorCode);
    }

    for(i in products) {
        store.add(products[i]);
    }

    transaction.onsuccess = function(e) {
        alert("Sucess!");
        database.close();
    }
}

/** POPULATE HTML */
function productTemplate(baguioProd){
    return `
        <div class="p_products-pr">
            <div class="prod-img">
                <img class="prod-photo" src="${baguioProd.prodImg}" style="width:100%; height:100%">
            </div>
            <div class="prod-des">
                <h4>
                    <strong>${baguioProd.name}</strong>
                </h4>
                <br>
                <p>
                    ${baguioProd.description}
                </p>
                <br>
                <h5>Price-Range: <h6>${baguioProd.price}</h6></h5>
                <button type="button" name="button" class="p_addBag" value="${baguioProd.prodID}">Add to Bag</button>
            </div>
        </div>
    `
}

document.getElementById('p_products').innerHTML = `
    ${
         products.map(productTemplate).join('')
    }
`

/** FILTER FEATURE */
var pineFilter = document.getElementById('searchBar');
pineFilter.addEventListener('keyup', filterProducts);

function filterProducts(){
  //get filter value
  var filterValue = document.getElementById('searchBar').value.toUpperCase();
  //get productList
  var prod = document.getElementById('productList');

  var mainContent = prod.querySelectorAll('div.p_products-pr');

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
/** ADD TO BAG */
const addToBagButtons = document.getElementsByClassName('p_addBag');
const addToBagContainer = document.getElementById('wrapper-addtobag');

var addToBag = function() {
    var value = this.value;
    database = request.result;
    transaction = database.transaction(["productList"], ["readwrite"]);
    const records = [];

    transaction.oncomplete = function(e) {
        //console.log("Transaction complete.");
        //console.log(value.toString());
    }

    transaction.onerror = function(e) {
        console.log("Transaction error.");
    }

    store = transaction.objectStore("productList");
    var r = value.toString();
    var storeRequest = store.get(r);

    //algo:
    //store selected product on new object store
    //query all objects on object store and put in html elements
    
    storeRequest.onsuccess = function(e) {
        //var record = storeRequest.result
        console.log(storeRequest);
        //console.log(record.name);

        var cart =
         `<div class="cart">
              <span id="removeItem" onclick="removeItemCart();">&times;</span>
              <img src="${storeRequest.result.prodImg}" alt="" class="cart-image">
              <div class="cart-description">
                <h4 class="cart-title_products">${storeRequest.result.name}</h4>
                <label for="quantity" id="quan_desP">Qty: </label>
                  <select>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                  </select>
              </div>`;
        addToBagContainer.innerHTML = cart;
        document.body.appendChild(addToBagContainer.firstChild);
    }
}

for (var j = 0; j < addToBagButtons.length; j++) {
    addToBagButtons[j].addEventListener('click', addToBag, false);
}



/** Store locator */
	var clicker = document.querySelector('#mark');
	clicker.addEventListener('click', function(){
	 this.classList.toggle('clickit');
	});