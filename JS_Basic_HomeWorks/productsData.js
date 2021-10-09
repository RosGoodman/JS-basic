const products = [
   {
      name: "ELLERY X M'O CAPSULE",
      text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: 52.00,
      img: "images/featured/1.jpg"
   },
   {
      name: "ELLERY X M'O CAPSULE",
      text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: 52.00,
      img: "images/featured/2.jpg"
   },
   {
      name: "ELLERY X M'O CAPSULE",
      text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: 52.00,
      img: "images/featured/3.jpg"
   },
   {
      name: "ELLERY X M'O CAPSULE",
      text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: 52.00,
      img: "images/featured/4.jpg"
   },
   {
      name: "ELLERY X M'O CAPSULE",
      text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: 52.00,
      img: "images/featured/5.jpg"
   },
   {
      name: "ELLERY X M'O CAPSULE",
      text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: 52.00,
      img: "images/featured/6.jpg"
   }
];

//загрузка в модель
function loadingProducts() {

   products.forEach(item => {
      let prod = new Product();

      prod.name = item.name;
      prod.featuredText = item.text;
      prod.price = item.price;
      prod.img = item.img;

      productList.addProducts(prod);
   });
}

//создание элементов на странице
function createdProdElements(prodList) {
   let featuredItemEls = document.querySelectorAll('.featuredItem');
   const prodItem = document.createElement('div');

   //перебор эл, а не мессива продуктов т.к. прод-в может быть больше, чем места на странице
   for (let i = 0; i < featuredItemEls.length; i++) {
      let pr = new Product();
      let pr = prodList[i];
      featuredItemEls[i].insertAdjacentHTML('afterbegin', getProductMurkup(prodList[i]));
   }
}

function getProductMurkup(product) {
   return `
   <div class="featuredImgWrap">
      <img src=${product.img} alt="">
      <div class="featuredImgDark">
         <button>
            <img src="images/cart.svg" alt="">
            Add to Cart
         </button>
      </div>
   </div>

   <div class="featuredData">
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