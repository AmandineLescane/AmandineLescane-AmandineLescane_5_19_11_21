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
    for( i = 0; i < productCart.length; i++){

    console.log("what");

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
                    <p class="deleteItem">Supprimer</p>
                </div>
                </div>
                </div>
    </article>
    `;
    }
}

    if(i == productCart.length){
    recapProduct.innerHTML = cartArray;
    } else{
    alert("Le panier est vide");
    }