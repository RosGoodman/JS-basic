"use strict"

let featuredItemsEl = document.querySelector('.featuredItems');

featuredItemsEl.addEventListener('click', function (e) {

    if (e.target.localName == 'button') {
        let article = e.target.getAttribute('article');//получаем арт.
        let product = productsObj.getProductByArticle(article);

        cart.addProduct(product);
        //<img src="images/garbage.png" alt="">
        //получить артикул, добавить в корзину, в строки в корзине добавить артикул
    }
});