let product = document.getElementById("basketcont");

function getProducts() {
  product.innerHTML = ``;
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  console.log(cart)
  cart.map((item, index) => {
    let div = document.createElement("div") ;
    div.className = "box" ;
    div.innerHTML= `
    <img src="${item.image}" alt="">
    <h3>${item.title}</h3>
    <p>${item.price}</p>
    <button onclick="removeItem(${index})">Remove</button>
    `;

    product.appendChild(div);
  });
}

function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  getProducts();
}
getProducts()