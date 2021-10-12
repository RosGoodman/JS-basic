"use strict"

/**Класс описывающий один продукт.**/
class Product {

   article = "";
   prodName = "";
   featuredText = "";
   prodPrice = 0;

   /**
    * Конструктор класста Product.
    * @param {string} article, артикул.
    * @param {string} name наименование.
    * @param {string} text текст отписания.
    * @param {number} price стоимость.
    */
   constructor(article, name, text, price) {
      this.article = article;
      this.prodName = name;
      this.featuredText = text;
      this.prodPrice = price;
   }
}

/**Класс описывающий список продуктов. */
class Products {
   prodList = [];

   constructor() { }

   /**
    * Добавить продукт в список.
    * @param {Product} product экземпляр класса Product.
    */
   addProducts(product) {
      this.prodList = this.prodList.concat(product);
   }

   /**
    * Получить продукт по артикулу.
    * @param {string} article ариткул.
    * @returns {Product} экземпляр класса Product.
    */
   getProductByArticle(article) {
      for (let i = 0; i < this.prodList.length; i++) {
         if (article == this.prodList[i].article) {
            return this.prodList[i];
         }
      }
   }
}