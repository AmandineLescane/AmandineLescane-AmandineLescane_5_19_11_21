/*class products {
    constructor(colors, id, name, price, imageUrl, description, altTxt){
    this.colors = colors;
    this.id = id;
    this.name = name;
    this.price = price; 
    this.imageUrl = imageUrl;
    this.description = description;
    this.altTxt = altTxt;
    }
}
*/

let params = new URLSearchParams(window.location.search);
let productId = params.get("id");


const productUrl = `http://localhost:3000/api/products/${productId}`;
const headTitle = document.head.getElementsByTagName("title");
const title = document.getElementById("title");
const price = document.getElementById("price");
const description = document.getElementById("description");
const img = document.getElementsByClassName("item__img");

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

function productPages(value){
    {
    headTitle[0].innerHTML = value.name;
    title.innerHTML = value.name;
    price.innerHTML = value.price; 
    description.innerHTML = value.description;
    img[0].innerHTML += `<img src="${value.imageUrl}" alt="${value.altTxt}">`
    } 

}
