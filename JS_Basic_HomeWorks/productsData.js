const products = {
   prod1: {
      name: "ELLERY X M'O CAPSULE",
      text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: 52.00,
      img: "images/featured/1.jpg"
   },
   prod2: {
      name: "ELLERY X M'O CAPSULE",
      text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: 52.00,
      img: "images/featured/2.jpg"
   },
   prod3: {
      name: "ELLERY X M'O CAPSULE",
      text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: 52.00,
      img: "images/featured/3.jpg"
   },
   prod4: {
      name: "ELLERY X M'O CAPSULE",
      text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: 52.00,
      img: "images/featured/4.jpg"
   },
   prod5: {
      name: "ELLERY X M'O CAPSULE",
      text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: 52.00,
      img: "images/featured/5.jpg"
   },
   prod6: {
      name: "ELLERY X M'O CAPSULE",
      text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: 52.00,
      img: "images/featured/6.jpg"
   }
};

//загрузка в модель
function loadingProducts() {
   let prod = new Product();

   products.forEach(item => {
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
   const prodItem = document.createElement()

   featuredItemEls.forEach(item => {
      item.insertAdjacentHTML('')
   });
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