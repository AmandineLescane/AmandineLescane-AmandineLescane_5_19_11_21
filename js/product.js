class Products {
    constructor(id, name, imageUrl, description, altTxt, price, colors){
    this.id = id;
    this.name = name; 
    this.imageUrl = imageUrl;
    this.description = description;
    this.altTxt = altTxt;
    this.price = price;
    this.colors = colors;
    }
}

/*obtention de l'id du produit*/
let params = new URLSearchParams(window.location.search);
let productId = params.get("id");

/*définition de l'adresse url de chaque produit grâce à l'id*/
const productUrl = `http://localhost:3000/api/products/${productId}`;
/*saisie des éléments à modifier dans le DOM*/
const headTitle = document.head.getElementsByTagName("title");
const title = document.getElementById("title");
const price = document.getElementById("price");
const description = document.getElementById("description");
const img = document.getElementsByClassName("item__img");
const colorsId = document.getElementById("colors");

/*affichage de la page produit grâce à l'adresse Url*/
    fetch(productUrl)
    .then(function(response) {
    return response.json();
}
)
/*Création d'une fonction pour afficher les détails du produit et d'une fonction pour l'ajouter au panier */
    .then(function(data) {
        productCart(data);
        productPages(data);
    })

/*affichage des éléments de la page produit*/
function productPages(data){
    headTitle[0].innerHTML = data.name;
    title.innerHTML = data.name;
    price.innerHTML = data.price; 
    description.innerHTML = data.description;
    img[0].innerHTML += `<img src="${data.imageUrl}" alt="${data.altTxt}">` 
    colorsId.innerHTML += `
    <option>${data.colors[0]}</option>
    <option>${data.colors[1]}</option>
    `
    if((data.colors).length === 3){
        colorsId.innerHTML += `
        <option>${data.colors[2]}</option>
        `
    }else if((data.colors).length === 4){
        colorsId.innerHTML += `
        <option>${data.colors[3]}</option>
    `
    }
} 

/*Ajout du produit et ses informations au panier*/ 
function productCart(data){
    
    let cartButton = document.getElementById("addToCart");

    let localCart = localStorage.getItem("canap");
    localCart = JSON.parse(localCart);
    localCart = [];
    

    cartButton.addEventListener("click", () => {
    
    let quantities = document.getElementById("quantity");
    let colorsOption = document.getElementById("colors");
        
    if(colorsOption.value != "" && quantities.value > 0){
            let newProduct = {
                productId,
                productName : data.name,
                productImg : data.imageUrl,
                productDescription : data.description,
                productTxt : data.altTxt,
                productPrice : data.price,
                productColors : colorsOption.value,
                productQuantity : quantities.value
            };
            localCart.push(newProduct);
            newProduct = JSON.stringify(localCart);
            localStorage.setItem("canap", newProduct);
            alert("Produit ajouté au panier")

            console.log(localCart);

        }else{
            alert("Veuillez choisir une couleur/ une quantité");
        }
    })
}

