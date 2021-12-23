let productCart = localStorage.getItem("canap");
productCart = JSON.parse(productCart);


let recapProduct = document.getElementById("cart__items");
let cartArray = [];

if(productCart == 0 || productCart === null){
    const quantityTotal = document.getElementById("totalQuantity");
    quantityTotal.innerHTML = "0";
    const priceTotal = document.getElementById("totalPrice");
    priceTotal.innerHTML = "0";
    alert("Le panier est vide")

} else {
    for(i = 0; i < productCart.length; i++){

    let finalPrice = ((productCart[i]).productQuantity)*((productCart[i]).productPrice);

    cartArray += `
    <article class="cart__item" data-id=${productCart.productId}>
                <div class="cart__item__img">
                    <img src="${(productCart[i]).productImg}" alt="${productCart.productTxt}">
                </div>
                <div class="cart__item__content">
                <div class="cart__item__content__description">
                    <h2>${(productCart[i]).productName}</h2>
                    <p>${(productCart[i]).productColors}</p>
                    <p>${finalPrice}€</p>
                </div>
                <div class="cart__item__content__settings">
                <div class="cart__item__content__settings__quantity">
                    <p>Qté : </p>
                    <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${(productCart[i]).productQuantity}">
                </div>
                <div class="cart__item__content__settings__delete">
                    <button class="deleteItem">Supprimer</button>
                </div>
                </div>
                </div>
    </article>
    `;
    }
}
    if(i == productCart.length){
    recapProduct.innerHTML =cartArray;
    } else {
    alert("Le panier est vide");
}

let deleteProduct = Array.from(document.querySelectorAll(".deleteItem"));

for (let j=0; j< deleteProduct.length; j++ )[
    deleteProduct[j].addEventListener("click",(event) => {
        event.preventDefault();
        
        let idToDelete = productCart[j].productId && productCart[j].productColors ;

        productCart = productCart.filter(obj => obj.productId && obj.productColors !== idToDelete);
        
        localStorage.setItem("canap", JSON.stringify(productCart))
        
        alert("Le produit a été supprimé");
        
        window.location.href = "cart.html";
    })
]


let selectQuantity = Array.from(document.querySelectorAll(".itemQuantity"));

for (let k=0; k < selectQuantity.length; k++ )[
    selectQuantity[k].addEventListener("change", () => {
    
        productCart[k].productQuantity = parseInt(selectQuantity[k].value);
        
        localStorage.setItem("canap", JSON.stringify(productCart));
        
        window.location.href = "cart.html";
    })
]

let totalPrice = []

for (let l=0; l < productCart.length; l++){
    let cartPrice = ((productCart[l]).productQuantity)*((productCart[l]).productPrice);

    totalPrice.push(cartPrice);
}
const addition = (accumulator, currentValue) => accumulator + currentValue;
const finalCartPrice = totalPrice.reduce(addition, 0);
const totalHtml = document.getElementById("totalPrice");
totalHtml.innerHTML = finalCartPrice;

let totalQuantity = [];

for (let m=0; m < productCart.length; m++){
    let cartQuantity = parseInt(productCart[m].productQuantity);

    totalQuantity.push(cartQuantity);
}
const finalCartQuantity = totalQuantity.reduce(addition);
const totalProductHtml = document.getElementById("totalQuantity");
totalProductHtml.innerHTML = finalCartQuantity;


const regExpName = /[A-Z][a-zéèêàçï-]+$/;
const regExpadress = /[0-9]+\s[a-z]+\s[a-zéèêçàï\s\-]+$/;
const regExpEmail = /[a-z0-9\.\-\_]+@[a-z]+\.[a-z]{2,3}$/;

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const address = document.getElementById("address");
const city = document.getElementById("city");
const email = document.getElementById("email");

firstName.addEventListener("input", (event) => {
    event.preventDefault();
    if(regExpName.test(firstName.value) == false || firstName.value == ""){
        document.getElementById("firstNameErrorMsg").innerHTML = "Entrée invalide";
    }else{
        document.getElementById("firstNameErrorMsg").innerHTML ="";
        info.push(firstName.value);
    }
});

lastName.addEventListener("input", (event) => {
    event.preventDefault();
    if(regExpName.test(lastName.value) == false || lastName.value == ""){
        document.getElementById("lastNameErrorMsg").innerHTML = "Entrée invalide";
    }else{
        document.getElementById("lastNameErrorMsg").innerHTML ="";
        info.push(lastName.value);
    }
});

address.addEventListener("input", (event) => {
    event.preventDefault();
    if(regExpadress.test(address.value) == false || address.value == ""){
        document.getElementById("addressErrorMsg").innerHTML = "Entrée invalide";
    }else{
        document.getElementById("addressErrorMsg").innerHTML ="";
        info.push(address.value);
    }
});

city.addEventListener("input", (event) => {
    event.preventDefault();
    if(regExpName.test(city.value) == false || city.value == ""){
        document.getElementById("cityErrorMsg").innerHTML = "Entrée invalide";
    }else{
        document.getElementById("cityErrorMsg").innerHTML = "";
        info.push(city.value);
    }
});

email.addEventListener("input", (event) => {
    event.preventDefault();
    if(regExpEmail.test(email.value) == false || email.value == ""){
        document.getElementById("emailErrorMsg").innerHTML = "Entrée invalide";
    }else{
        document.getElementById("emailErrorMsg").innerHTML = "";
        info.push(email.value);
    }
});


let info = []

let orderBtn = document.getElementById("order");

orderBtn.addEventListener("click", (event)=> {
    event.preventDefault();
    
    let newContact = {
        firstName: firstName.value,
        lastName: lastName.value,
        address: address.value,
        city: city.value,
        email: email.value,
    };

    if  ((info[0] !== undefined) &
        (info[1] !== undefined) &
        (info[2] !== undefined) &
        (info[3] !== undefined) &
        (info[4] !== undefined))
    {
        let items = [];
        productCart.forEach((orderBtn) =>{
        items.push(orderBtn.productId);
        });
        
        let sendOrder = {newContact , items};
        console.log(sendOrder);
        
        const promise1 = fetch(`http://localhost:3000/api/products/order`,{
            method: "POST",
            headers: {
                "Accept" : "application/json",
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(sendOrder),
        })
        console.log(promise1);

    }else{
        alert("Formulaire incomplet")
    }
});

