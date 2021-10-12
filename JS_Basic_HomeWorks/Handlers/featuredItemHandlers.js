"use strict"

let divCartEl = document.querySelector('.cart');
let featuredItemsEl = document.querySelector('.featuredItems');

//обработка клика по товару (add)
featuredItemsEl.addEventListener('click', function (e) {

    if (e.target.localName == 'button') {
        //получаем артикул, по нему получаем весь продукт из списка в объекте productsObj
        let article = e.target.getAttribute('article');//получаем арт.
        let product = productsObj.getProductByArticle(article);

        //добавляем product в корзину
        cart.addProduct(product);
        //обновляем отображение корзины на странице
        refreshCart();
    }
});

//обработка клика по иконке удаления из корзины
divCartEl.addEventListener('click', (e) => {
    if (e.target.localName == 'img') {
        let article = e.target.getAttribute('article');
        let product = productsObj.getProductByArticle(article);

        cart.removeProduct(product);
        refreshCart();
    }
});

//обновить отображение корзины
function refreshCart() {
    //если есть удаляем старые элементы
    let oldCartProductsEls = document.querySelectorAll('.cartProduct');
    oldCartProductsEls.forEach(prodEl => {
        prodEl.remove();
    });
    //добавление в html
    let cartEl = document.querySelector('.cartHeader');

    //цикл с конца т.к. элементы будут вставляться в одно и тоже место
    for (let i = cart.prodInCartList.length - 1; i >= 0; i--) {
        cartEl.insertAdjacentHTML('afterend', getCartProductMurkup(cart.prodInCartList[i]));
    }

    //полная сумма заказа
    let totalPriceEl = document.querySelector('.cartTotalValue');
    totalPriceEl.textContent = getTotalPrice();

    //отображение кол-ва уникальных продуктов над иконкой
    let cartCount = document.querySelector('.cartCount');
    cartCount.textContent = cart.prodInCartList.length;
}

//получить полную сумму заказа
function getTotalPrice() {
    let sum = 0;
    for (let i = 0; i < cart.prodInCartList.length; i++) {
        let h = cart.prodInCartList[i][0].price;
        let k = cart.prodInCartList[i][1];
        sum += cart.prodInCartList[i][0].price * cart.prodInCartList[i][1];
    }
    return sum;
}

function getCartProductMurkup(productAndCount) {
    let prod = productAndCount[0];
    let count = productAndCount[1];

    return `
    <div class="cartProduct">
        <div>${prod.name}</div>
        <div>${count}</div>
        <div>$${prod.price}</div>
        <div>$${prod.price * count}</div>
        <img src="images/garbage.png" alt="" class="delCartProduct" article=${prod.article}>
    </div>`
}