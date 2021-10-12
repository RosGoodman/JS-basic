"use strict"

class Cart {
   //массив (product, count)
   prodInCartList = [];

   constructor() { }

   //добавить 1 продукт в корзину, если уже есть - увеличить кол-во
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
         if (i == this.prodInCartList.length) {
            let n = [product, 1];
            this.prodInCartList.push([product, 1]);
         }
      }
   }

   //удалить полностью продукт из корзины
   removeProduct(product) {
      for (let i = 0; i < this.prodInCartList.length; i++) {
         //многомерный массив, по этому prod[0]. Сравниваем только product
         if (prod[0] == product) {
            this.prodInCartList = this.prodInCartList.splice(i, 1);
            return;
         }
         if (i == this.prodInCartList.length) {
            console.log("Element not found.");
         }
      };
   }
}