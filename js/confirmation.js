const orderNumber = document.getElementById("orderId");

const param = new URL(document.location).searchParams;
const orderId = param.get("orderId");

orderNumber.textContent = orderId;

localStorage.clear();