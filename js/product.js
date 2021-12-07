
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
getProduct();

function getProduct(){
    fetch(productUrl)
    .then(function(response) {
    return response.json();
}
)
    .then(function(value) {
        console.log("ok");
        productPages(value);
    })
    .catch(function(error){

    });
}
/*affichage des éléments de la page produit*/
function productPages(value){
    headTitle[0].innerHTML = value.name;
    title.innerHTML = value.name;
    price.innerHTML = value.price; 
    description.innerHTML = value.description;
    img[0].innerHTML += `<img src="${value.imageUrl}" alt="${value.altTxt}">` 
    colorsId.innerHTML += `
    <option>${value.colors[0]}</option>
    <option>${value.colors[1]}</option>
    `
    if((value.colors).length === 3){
        colorsId.innerHTML += `
        <option>${value.colors[2]}</option>
        `
    }else if((value.colors).length === 4){
        colorsId.innerHTML += `
        <option>${value.colors[3]}</option>
    `
    }
    
}
