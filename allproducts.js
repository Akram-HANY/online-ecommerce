document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:2024/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data received:", data);
        const productsDev = document.getElementById("products_dev");
        productsDev.innerHTML = ""; // Clear existing content
  
        // Use a document fragment to improve performance
        const fragment = document.createDocumentFragment();
  
        data.forEach((product) => {
          // Check if the product has an old_price (i.e., it's on sale)
          const hasDiscount = product.old_price && !isNaN(product.old_price);
  
          // Calculate discount percentage only if old_price exists
          const percentDisc = hasDiscount
            ? Math.floor(((product.old_price - product.price) / product.old_price) * 100)
            : null; // Set to null if no discount
  
          const productHTML = `
            <div class="product swiper-slide">
              <div class="icons">
                <span>
                  <i onclick="addToCart(${product.id}, this)" class="fa-solid fa-cart-shopping"></i>
                </span>
                <span><i class="fa-solid fa-heart"></i></span>
                <span><i class="fa-solid fa-share-nodes"></i></span>
              </div>
              ${
                hasDiscount
                  ? `<span class="sale_present">%${percentDisc}</span>`
                  : "" // Hide the discount span if there's no sale
              }
              <div class="img_product">
                <img src="${product.img}" alt="${product.name}">
                <img class="img_hover" src="${product.img_hover}" alt="${product.name}">
              </div>
              <h3 class="name_product">
                <a href="#">${product.name}</a>
              </h3>
              <div class="stars">
                ${'<i class="bi bi-star-fill"></i>'.repeat(5)}
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
  
          // Create a temporary container to hold the HTML
          const tempDiv = document.createElement("div");
          tempDiv.innerHTML = productHTML.trim();
          fragment.appendChild(tempDiv.firstChild);
        });
  
        // Append all products at once
        productsDev.appendChild(fragment);
      })
      .catch((error) => {
        console.error("Error fetching or processing data:", error);
      });
  });
console.log("allproducts.js loaded");
 