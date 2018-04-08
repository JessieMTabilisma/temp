//for cross-browser compatibility
window.indexedDB = window.indexedDB || window.mozIndexedDB ||
    window.webkitIndexedDB || window.msIndexedDB;

//will alert if browser doesn't support indexedDB
if(!window.indexedDB) {
    alert("Your browser does not support IndexedDB");
}

//global variables for database, transaction, store, and index
var request = window.indexedDB.open("productsdb", 1),
    database,
    transaction,
    store,
    index;

//creates store
request.onupgradeneeded = function(e) {
    let database = request.result,
        store = database.createObjectStore("products", {
            keyPath: "prodID"}),
        index = store.createIndex("productName", "productName"); //creates an index for product name for querying
};

//error handling
request.onerror = function(e) {
    console.log("There was an error: "+e.target.errorCode);
}

request.onsuccess = function(e) {
    database = request.result;
    transaction = database.transaction("products", "readwrite"); //readwrite allows database query and update
    store = transaction.objectStore("products");
    index = store.index("productName");

    //error handling
    database.oneerror = function(e) {
        console.log("There was an error: "+e.target.errorCode);
    }

    //store population
    store.put({prodID: 1, productName: "Alfajor Caramel", price: 250});
    store.put({prodID: 2, productName: "Camote Chips", price: 40});
    store.put({prodID: 3, productName: "Choco Flakes", price: 100});
    store.put({prodID: 4, productName: "Milky Choco Flakes", price: 100});
    store.put({prodID: 5, productName: "Milky Choco Flakes 2", price: 100});
    store.put({prodID: 6, productName: "Choco Mallows", price: 120});
    store.put({prodID: 7, productName: "Fudge Bar", price: 100});
    store.put({prodID: 8, productName: "Lengua de Gato", price: 150});
    store.put({prodID: 9, productName: "Fudge Bar", price: 100});
    store.put({prodID: 10, productName: "Meringue", price: 160});
    store.put({prodID: 11, productName: "Peanut Crunch", price: 180});
    store.put({prodID: 12, productName: "Orange Sampaloc", price: 70});
    store.put({prodID: 13, productName: "Peanut Brittle", price: 200});
    store.put({prodID: 14, productName: "Peanut Brittle 2", price: 100});
    store.put({prodID: 15, productName: "Peanut Butter", price: 120});
    store.put({prodID: 16, productName: "Toasted Peanuts with Garlic Chips", price: 100});
    store.put({prodID: 17, productName: "Pili Nuts", price: 200});
    store.put({prodID: 18, productName: "Rice Wine", price: 500});
    store.put({prodID: 19, productName: "Strawberry Jam", price: 200});
    store.put({prodID: 20, productName: "Strawberry Wine", price: 420});
    store.put({prodID: 21, productName: "Sweet Tamarind", price: 100});
    store.put({prodID: 22, productName: "Ube Crinkles", price: 100});
    store.put({prodID: 23, productName: "Ube Jam", price: 200});
    
    transaction.oncomplete = function(e) {
        alert("All done!");
        database.close();
    };
}

