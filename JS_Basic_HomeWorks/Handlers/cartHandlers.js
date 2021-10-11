"use strict"

let cartIconEl = document.querySelector('.cartIconWrap');
let cartEl = document.querySelector('.cart');

cartIconEl.addEventListener('click', (e) => {
   if (cartEl.style.display == 'block') {
      cartEl.style.display = 'none';
   } else {
      createdProdStringsInCart();
      cartEl.style.display = 'block';
   }
});

//загрузка корзины в отображение
function createdProdStringsInCart() {
   for (let i = 0; i < cartEl.prodInCartList.length; i++) {
      x = 0;
   }
}

/*//запись данных и доп.атрибута на кнопку(article для быстрого поиска в списке продуктов)
function getProductMurkup4(product) {
   return `
         <div class="featuredImgWrap">
            <img src=${product.img} alt="">
            <div class="featuredImgDark">
               <button article=${product.article}>
                  <img src="images/cart.svg" alt="">
                  Add to Cart
               </button>
            </div>
         </div>

         <div  class="featuredData">
            <div class="featuredName">
               ${product.name}
            </div>
            <div class="featuredText">
               ${product.featuredText}
            </div>
            <div class="featuredPrice">
               ${product.price}
            </div>
         </div>`
}*/