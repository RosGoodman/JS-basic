"use strict"

class Cart {
   prodList = [];

   constructor() { }

   addProduct(product) {
      this.prodList.push(product);
   }

   removeProduct(product) {
      for (let i = 0; i < this.prodList.length(); i++) {
         if (prodList[i] == product.prodName) {
            delete this.prodList[i];
         }
      }
   }
}