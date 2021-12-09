/*importation du contenu de l'api*/
fetch("http://localhost:3000/api/products")
    .then(function(response) {
        if (response.ok) {
        return response.json();
    }
})
    .then(function(data) {
        productDisplay(data);
    })
    .catch(function(error){

    });

/*définition de la class products à partir des éléments de l'api*/
class products {
    constructor(id, name, imageUrl, description, altTxt){
    this.id = id;
    this.name = name; 
    this.imageUrl = imageUrl;
    this.description = description;
    this.altTxt = altTxt;
    this.price = price;
    this.colors = colors;
    }
}

/*création d'une fonction afin d'afficher tous les produits de l'api dans la page d'accueil*/
function productDisplay(data){
    for(products of data){
    
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