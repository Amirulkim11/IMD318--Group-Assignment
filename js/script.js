
let cart = [];
let total = 0;

function addToCart(name, price){
  cart.push({name,price});
  total += price;
  updateCart();
}

function updateCart(){
  const cartDiv = document.getElementById("cart-items");
  cartDiv.innerHTML = "";

  cart.forEach((item,index)=>{
    cartDiv.innerHTML += `
      <div class="cart-item">
        ${item.name} - RM${item.price.toFixed(2)}
        <button onclick="removeItem(${index})">x</button>
      </div>
    `;
  });

  document.getElementById("total").innerText = total.toFixed(2);
}

function removeItem(index){
  total -= cart[index].price;
  cart.splice(index,1);
  updateCart();
}

function pay(){
  if(cart.length === 0){
    alert("Cart is empty!");
    return;
  }
  alert("Payment successful!\nTotal: RM " + total.toFixed(2));
  cart = [];
  total = 0;
  updateCart();
}
function fakeSubmit() {
    alert("✅ Message sent successfully!");
    document.querySelector(".wide-form").reset();
    return false; // stop page from reloading
}

