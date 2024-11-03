 var swiper = new Swiper(".slide-Swp", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullests: true,
      clickable: true
    },
    autoplay:{
        delay:2500,
    },
    loop: true,
  });


/* sale-slider*/
  var swiper = new Swiper(".sale_section", {
    slidesPerView: 5,
    spaceBetween:30,
    autoplay:{
        delay:3000,
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
        },
    loop: true,
  });


  /*second product page */

  var swiper = new Swiper(".product_swipper", {
    slidesPerView: 4,
    spaceBetween:30,
    autoplay:{
        delay:3000,
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
        },
    loop: true,
  });
