const orderNumber = document.getElementById("orderId");

const order = JSON.parse(localStorage.getItem("order"));
console.log(order);

orderNumber.innerHTML = `${order}`;

localStorage.clear();