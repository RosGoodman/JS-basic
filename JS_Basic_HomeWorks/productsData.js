"use strict"

const productsData = [
   {
      article: 11111,
      name: "ELLERY X M'O CAPSULE",
      text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: 52.00,
      img: "images/featured/1.jpg"
   },
   {
      article: 11112,
      name: "ELLERY X M'O CAPSULE",
      text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: 52.00,
      img: "images/featured/2.jpg"
   },
   {
      article: 11113,
      name: "ELLERY X M'O CAPSULE",
      text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: 52.00,
      img: "images/featured/3.jpg"
   },
   {
      article: 11114,
      name: "ELLERY X M'O CAPSULE",
      text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: 52.00,
      img: "images/featured/4.jpg"
   },
   {
      article: 11115,
      name: "ELLERY X M'O CAPSULE",
      text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: 52.00,
      img: "images/featured/5.jpg"
   },
   {
      article: 11116,
      name: "ELLERY X M'O CAPSULE",
      text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: 52.00,
      img: "images/featured/6.jpg"
   }
];

//загрузка в модель
//вернуть список
function loadingProducts() {
   let prodList = [];

   productsData.forEach(item => {
      let prod = new Product();

      prod.article = item.article;
      prod.name = item.name;
      prod.featuredText = item.text;
      prod.price = item.price;
      prod.img = item.img;

      prodList.push(prod);
   });
   return prodList;
}

//создание элементов на странице
function createdProdElements(productsObj) {
   let featuredItemEls = document.querySelectorAll('.featuredItem');
   const prodItem = document.createElement('div');

   //перебор эл, а не мессива продуктов т.к. прод-в может быть больше, чем места на странице
   for (let i = 0; i < featuredItemEls.length; i++) {
      featuredItemEls[i].id = productsObj.prodList[i].article;
      featuredItemEls[i].insertAdjacentHTML('afterbegin', getProductMurkup(productsObj.prodList[i]));
   }
}

//запись данных и доп.атрибута на кнопку(article для быстрого поиска в списке продуктов)
function getProductMurkup(product) {
   return `
   <div class="featuredImgWrap">
      <img src=${product.img} alt="">
      <div class="featuredImgDark">
         <button article=${product.article}>
            <img src="images/cart.svg" alt="">
            Add to Cart
         </button>
      </div>
   </div>

   <div  class="featuredData">
      <div class="featuredName">
         ${product.name}
      </div>
      <div class="featuredText">
         ${product.featuredText}
      </div>
      <div class="featuredPrice">
         ${product.price}
      </div>
   </div>`
}