"use strict"

class Cart {
   //массив (product, count)
   prodInCartList = [];

   constructor() { }

   //добавить 1 продукт в корзину, если уже есть - увеличить кол-во
   addProduct(product) {
      for (let i = 0; i < this.prodInCartList.length; i++) {
         if (this.prodInCartList[i][0] == product) {
            this.prodInCartList[i][1]++;
            //увеличится ли кол-во?
            return;
         }
         //если конец массива - add prod
         this.prodInCartList = this.prodInCartList.concat([product, 1]);
         console.log(this.prodInCartList);
         return;
      }
      if (this.prodInCartList.length == 0) {
         this.prodInCartList = this.prodInCartList.concat([product, 1]);
      }
      console.log(this.prodInCartList);
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