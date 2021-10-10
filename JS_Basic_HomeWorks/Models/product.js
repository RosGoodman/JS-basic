"use strict"

class Product {

   article = "";
   prodName = "";
   featuredText = "";
   prodPrice = 0;

   constructor(article, name, text, price) {
      this.article = article;
      this.prodName = name;
      this.featuredText = text;
      this.prodPrice = price;
   }
}

class Products {
   prodList = [];
   constructor() { }

   addProducts(product) {
      this.prodList = this.prodList.concat(product);
      this.prodList = this.prodList.concat(product);
   }

   //получить продукт по артикулу
   getProductByArticle(article) {
      for (let i = 0; i < this.prodList.length; i++) {
         if (article == this.prodList[i].article) {
            return this.prodList[i];
         }
      }
   }
}