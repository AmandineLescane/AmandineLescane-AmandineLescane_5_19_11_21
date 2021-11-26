fetch("http://localhost:3000/api/products")
    .then(function(response) {
        if (response.ok) {
        return response.json();
    }
})
    .then(function(value) {
        productDisplay(value);
    })
    .catch(function(error){

    });

class products {
    constructor(id, name, imageUrl, description, altTxt){
    this.id = id;
    this.name = name; 
    this.imageUrl = imageUrl;
    this.description = description;
    this.altTxt = altTxt;
    }
}

function productDisplay(value){
    for(products of value){
    
    const items = document.getElementById("items")

    items.innerHTML += `
    <a href="./product.html?id=${products._id}">
    <article>
            <img src="${products.imageUrl}" alt="${products.altTxt}">
            <h3 class="productName">${products.name}</h3>
            <p class="productDescription">${products.description}</p>
    </article>
    </a>`
    }
}