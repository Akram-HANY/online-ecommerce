// open &close cart


var cart = document.querySelector('.cart');
function open_cart() {
    cart.classList.add("active")
}
function close_cart() {
    cart.classList.remove("active")
}

/*add items cart */


var all_products_json;
var items_in_cart = document.querySelector(".items_in_cart");
let product_cart = [];

function addToCart(id,btn){
    product_cart.push(all_products_json[id])
    btn.classList.add("active")
    console.log(product_cart);
    getCartItems()
}
function getCartItems(){
    let items_c = "";
    for (let i = 0; i < product_cart.length; i++) {
            items_c +=`
            
            <div class="item_cart">
                <img src="${product_cart[i].img}" alt="">
                <div class="content">
                    <h4>${product_cart[i].name}</h4>
                     <p 
                     class="price_cart">${product_cart[i].price}
                     </p>
                </div>
                <button onclick = "remove_from_cart(${i})" class="delete_item"><i class="bi bi-trash-fill"></i></button>
             </div>
            `     
              
    }

    items_in_cart.innerHTML = items_c

}
   
function remove_from_cart(index){
    product_cart.splice(index,1)
    getCartItems()
    
     addToCartButtons = document.querySelectorAll(".bi-cart-plus");
    for (let i = 0; i < addToCartButtons.length; i++) {
        addToCartButtons[i].classList.remove("active") 
        // adde just a comment       
    }
}