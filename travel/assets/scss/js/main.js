let form = document.getElementById("form")
let namelast = document.getElementById("namelast")
let email = document.getElementById("email")
let password = document.getElementById("password")

async function postJSON() {
    try {
      const response = await fetch("https://655c839c25b76d9884fd6e12.mockapi.io/Namiq", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            namelast: namelast.value ,
            email: email.value ,
            password: password.value
        })
      });
  
      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
 form.addEventListener ("submit", (e)=> {
    e.preventDefault();
  postJSON();})

  const inp = document.getElementById('inp');
let cart = document.getElementById("cart");
const search = document.getElementById('search');
let loadBtn = document.getElementById("loadBtn");

let page = 1;
let limit = 3;
let db = [];

const renderProducts = async () => {
    try {
        const response = await axios.get(`https://655c839c25b76d9884fd6e12.mockapi.io/Cefer?page=${page}&limit=${limit}`);
        const data = response.data;
        db = data;
        const filterData = db.filter(item => item.title.toLowerCase().startsWith(inp.value.toLowerCase()));
      
        filterData.map((item) => {
            let div = document.createElement("div");
            div.className = "box";
            div.innerHTML = `
                <img src="${item.image}" alt="">
                <h3>${item.title}</h3>
                <span>${item.price}</span>
                <P>${item.description}</p>
                <button onclick="addToCart(${item.id})">$${item.price}</button>
            `;
            cart.appendChild(div);
        });
        page++;
    } catch (error) {
        console.log(error);
    }
};

loadBtn.addEventListener("click", renderProducts);

const addToCart = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(db.find((item) => item.id == id));
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(cart);
};

search.addEventListener('click', () => {
    page = 1; 
    renderProducts();
});
  