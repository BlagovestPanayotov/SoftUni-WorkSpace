function solve() {

   const products = document.querySelectorAll('.product');
   const outputArea = document.querySelector('textarea');

   const cart = [];

   let finalPrice = 0;

   Array.from(products).forEach(x => {
      const button = x.querySelector('.add-product');
      button.addEventListener('click', () => addPrice(x));
   });

   function addPrice(product) {
      const productName = product.querySelector('.product-title').textContent;
      const price = Number(product.querySelector('.product-line-price').textContent);
      if (!cart.includes(productName)) {
         cart.push(productName);
      }
      finalPrice += price;

      outputArea.value += `Added ${productName} for ${price.toFixed(2)} to the cart.\n`

   }

   const checkout = document.querySelector('.checkout');
   checkout.addEventListener('click', checkouting);

   function checkouting(ev) {
      const output = `You bought ${cart.join(', ')} for ${finalPrice.toFixed(2)}.`

      outputArea.value += output;
      ev.target.disabled = true;
      Array.from(products).forEach(x => {
         x.querySelector('.add-product').disabled = true;
      })
   }
}