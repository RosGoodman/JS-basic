"use strict"

let cartIconEl = document.querySelector('.cartIconWrap');
let cartEl = document.querySelector('.cart');

cartIconEl.addEventListener('click', (e) => {
   if (cartEl.style.display == 'block') {
      cartEl.style.display = 'none';
   } else {
      cartEl.style.display = 'block';
   }
});