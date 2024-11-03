document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:2024/products")
    .then((response) => response.json())
    .then((data) => {
      console.log("data is: ", data);
      const productsList = document.getElementById("products_list");
      all_products_json = data
      productsList.innerHTML = ""; // Clear existing content

      // Iterate over each product and construct HTML
      data.forEach((product) => {
        const productHTML = `
                <div class="product swiper-slide">
                    <div class="icons">
                        <span><i onclick ="addToCart(${product.id},this)" class="bi bi-cart-plus"></i></span>     
                        <span><i class="bi bi-heart-fill"></i></span>
                        <span><i class="bi bi-share"></i></span>
                    </div>
                    <span class="sale_present">%10</span>
                    <div class="img_product">
                        <img src="${product.img}" alt="${product.name}">
                        <img class="img_hover" src="${
                          product.img_hover
                        }" alt="${product.name}">
                    </div>
                    <h3 class="name_product">
                        <a href="#">${product.name}</a>
                    </h3>
                    <div class="stars">
                        ${'<i class="bi bi-star-fill"></i>'.repeat(
                          5
                        )} <!-- You can customize the stars as needed -->
                    </div>
                    <div class="price">
                        <p><span>$${product.price}</span></p>
                        ${
                          product.old_price
                            ? `<p class="old_price">$${product.old_price}</p>`
                            : ""
                        }
                    </div>
                </div>
            `;
        productsList.innerHTML += productHTML; // Append the product HTML
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});
