"use strict"

/**Класс описывающий корзину продуктов. */
class Cart {
   //массив [(product, count), (product, count), ...]
   prodInCartList = [];

   constructor() { }

   /**
    * Добавить продукт в список корзины.
    * @param {Product} product экземпляр класса Product.
    * @returns .
    */
   addProduct(product) {

      if (this.prodInCartList.length == 0) {
         this.prodInCartList.push([product, 1]);
         return;
      }

      for (let i = 0; i < this.prodInCartList.length; i++) {
         if (this.prodInCartList[i][0] == product) {
            this.prodInCartList[i][1]++;
            //увеличится ли кол-во?
            return;
         }
         if (i == this.prodInCartList.length - 1) {
            let n = [product, 1];
            this.prodInCartList.push([product, 1]);
            return;
         }
      }
   }

   /**
    * Удалить полностью продукт из корзины
    * @param {Product} product экземпляр класса Product.
    * @returns 
    */
   removeProduct(product) {
      for (let i = 0; i < this.prodInCartList.length; i++) {
         //многомерный массив, по этому prod[0]. Сравниваем только product
         if (this.prodInCartList[i][0] == product) {
            this.prodInCartList.splice(i, 1);
            return;
         }
         if (i == this.prodInCartList.length) {
            console.log("Element not found.");
            return;
         }
      };
   }
}