const products = [
    {
        name: "alfajorcaramel",
        price: 250,
        prodImg: "./products/alfajorcaramel.jpg"
    },
    {
        name: "camotechips",
        price: 40,
        prodImg: "./products/camotechips.jpg"
    },
    {
        name: "chocoflakes",
        price: 100,
        prodImg: "./products/chocoflakes.jpg"
    },
    {
        name: "milky chocoflakes",
        price: 100,
        prodImg: "./products/chocoflakes2.jpg"
    },
    {
        name: "chocolate flakes",
        price: 100,
        prodImg: "./products/chocoflakes3.jpg"
    },
    {
        name: "choco mallows",
        price: 120,
        prodImg: "./products/chocomallows.jpg"
    },
    {
        name: "fudge bar",
        price: 100,
        prodImg: "./products/fudgebar.jpg"
    },
    {
        name: "lengua de gato",
        price: 150,
        prodImg: "./products/lenguadegato.jpg"
    },
    {
        name: "meringue",
        price: 160,
        prodImg: "./products/meringue.jpg"
    },
    {
        name: "peanut crunch",
        price: 180,
        prodImg: "./products/milkypeanutcrunch.jpg"
    },
    {
        name: "orange sampaloc",
        price: 70,
        prodImg: "./products/orangesampaloc.jpg"
    },
    {
        name: "peanut brittle (crash version)",
        price: 200,
        prodImg: "./products/peanutbrittle.jpg"
    },
    {
        name: "peanut brittle",
        price: 100,
        prodImg: "./products/peanutbrittle.jpg"
    },
    {
        name: "peanut butter",
        price: 120,
        prodImg: "./products/peanutbutter.jpg"
    },
    {
        name: "toasted peanuts with garlic chips",
        price: 100,
        prodImg: "./products/peanutgarlic.jpg"
    },
    {
        name: "pili nuts",
        price: 200,
        prodImg: "./products/pilinuts.jpg"
    },
    {
        name: "rice wine",
        price: 500,
        prodImg: "./products/ricewine.jpg"
    },
    {
        name: "straberry jam",
        price: 200,
        prodImg: "./products/strawberryjam.jpg"
    },
    {
        name: "strawberry jam la trinidad",
        price: 200,
        prodImg: "./products/strawberryjam2.jpg"
    },
    {
        name: "strawberry wine",
        price: 100,
        prodImg: "./products/strawberrywine.jpg"
    },
    {
        name: "sweet tamarind",
        price: 100,
        prodImg: "./products/tamarind.jpg"
    },
    {
        name: "ube crinkles",
        price: 100,
        prodImg: "./products/ubecrinkles.jpg"
    },
    {
        name: "ube jam",
        price: 100,
        prodImg: "./products/ubejam.jpg"
    }
    
]

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
                    Description: Are you a sweet tooth kind of person? Well don't miss a chance to try 'Alfajor Caramel' its so caramely you'll have a happy belly.
                </p>
                <br>
                <h5>Price-Range: ₱${baguioProd.price}</h5>
                <button type="button" name="button" class="p_addBag" id="alfajorcaramel">Add to Bag</button>
            </div>
        </div>
    `
}

document.getElementById('p_products').innerHTML = `
        ${
            products.map(productTemplate).join('')
        }
`