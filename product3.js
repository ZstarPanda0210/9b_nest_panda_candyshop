// Get all add-to-cart buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Add event listener to each button
addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});

// Function to add product to cart
function addToCart(event) {
  // Get product details
  const product = event.target.closest('.product');
  const productName = product.querySelector('h3').textContent;
  const productPrice = product.querySelector('.price').textContent;

  // Create cart item
  const cartItem = document.createElement('div');
  cartItem.classList.add('cart-item');
  cartItem.innerHTML = `
    <p class="cart-item-name">${productName}</p>
    <p class="cart-item-price">${productPrice}</p>
  `;

  // Add cart item to cart
  const cart = document.querySelector('.cart');
  cart.appendChild(cartItem);

  // Update cart total
  updateCartTotal();
}

// Function to update cart total
function updateCartTotal() {
  // Get all cart items
  const cartItems = document.querySelectorAll('.cart-item');

  // Calculate total price
  let total = 0;
  cartItems.forEach(item => {
    const price = item.querySelector('.cart-item-price').textContent.replace('$', '');
    total += parseFloat(price);
  });

  // Update cart total in DOM
  const cartTotal = document.querySelector('.cart-total');
  cartTotal
