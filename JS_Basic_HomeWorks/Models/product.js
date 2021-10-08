"use strict"

class Product {

   prodName = "";
   featuredText = "";
   prodPrice = 0;

   constructor(name, text, price) {
      this.prodName = name;
      this.featuredText = text;
      this.prodPrice = price;
   }
}

class Products {
   prodList = [];
   constructor() { }

   addProducts(product) {
      this.prodList.push(product);
   }
}