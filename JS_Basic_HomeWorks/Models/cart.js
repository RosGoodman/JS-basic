"use strict"

class Cart {
   //массив (product, count)
   prodInCartList = [];

   constructor() { }

   //добавить 1 продукт в корзину, если уже есть - увеличить кол-во
   addProduct(product) {
      this.prodInCartList.forEach(prod => {
         if (prod[0] == product) {
            prod[1]++;
            //увеличится ли кол-во?
            return;
            //если конец массива - add prod
         } else if (prod[0] == this.prodInCartList[this.prodInCartList.length]) {
            this.prodInCartList = this.prodInCartList.concat([product, 1]);
         }
      });
   }

   //удалить полностью продукт из корзины
   removeProduct(product) {
      this.prodInCartList.forEach(prod => {
         if (prod[0] == prod) {
            //в корзине не может быть одинаковых значений - slice подходит
            this.prodInCartList.slice(prod, 1);
         }
      });
   }
}