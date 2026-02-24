document.addEventListener('DOMContentLoaded', function() {

    const quantityControls = document.querySelectorAll('.product__quantity-control');

    quantityControls.forEach(control => {
        control.addEventListener('click', function() {
            const quantityValue = this.closest('.product__quantity-controls').querySelector('.product__quantity-value');
            let currentValue = parseInt(quantityValue.innerText);
            
            if (this.classList.contains('product__quantity-control_dec')) {

                if (currentValue > 1) {
                    quantityValue.innerText = currentValue - 1;
                }
            } else if (this.classList.contains('product__quantity-control_inc')) {

                quantityValue.innerText = currentValue + 1;
            }
        });
    });

    const addButtons = document.querySelectorAll('.product__add');
    const cartProducts = document.querySelector('.cart__products');

    addButtons.forEach(button => {
        button.addEventListener('click', function() {
            const product = this.closest('.product');
            const productId = product.dataset.id;
            const productImage = product.querySelector('.product__image').src;
            const productQuantity = parseInt(product.querySelector('.product__quantity-value').innerText);

            const existingCartItem = document.querySelector(`.cart__product[data-id="${productId}"]`);
            
            if (existingCartItem) {

                const countElement = existingCartItem.querySelector('.cart__product-count');
                const currentCount = parseInt(countElement.innerText);
                countElement.innerText = currentCount + productQuantity;
            } else {

                const cartItem = document.createElement('div');
                cartItem.className = 'cart__product';
                cartItem.dataset.id = productId;
                
                cartItem.innerHTML = `
                    <img class="cart__product-image" src="${productImage}">
                    <div class="cart__product-count">${productQuantity}</div>
                `;
                
                cartProducts.appendChild(cartItem);
            }
        });
    });
});