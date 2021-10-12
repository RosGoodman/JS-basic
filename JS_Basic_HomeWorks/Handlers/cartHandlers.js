"use strict"

let cartIconEl = document.querySelector('.cartIconWrap');
let cartEl = document.querySelector('.cart');

/** Обработка клика по иконке корзины. */
cartIconEl.addEventListener('click', (e) => {
   if (cartEl.style.display == 'block') {
      cartEl.style.display = 'none';
   } else {
      cartEl.style.display = 'block';
   }
});