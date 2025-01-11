let products = [
  { id: 1, name: 'Hot-Chocolate', price: 3.00 },
  { id: 2, name: 'Cappuccino', price: 2.00 },
  { id: 3, name: 'Espresso', price: 3.50 },
  { id: 4, name: 'Latte', price: 2.50 },
  { id: 5, name: 'Iced-Latte', price: 4.00 },
  { id: 6, name: 'Iced-Mocha', price: 4.50 },
  { id: 7, name: 'Caramel-Macchiato', price: 5.00 },
  { id: 8, name: 'Frappuccino', price: 5.50 }
];

// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add product to cart
function addToCart(productName) {
  const product = products.find(p => p.name.toLowerCase() === productName.toLowerCase());
  if (product) {
    // Check if product is already in the cart
    const existingProduct = cart.find(item => item.name === product.name);
    if (!existingProduct) {
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartCount();
      displayCart();
      alert(`${product.name} has been added to your cart!`);
    } else {
      alert(`${product.name} is already in your cart.`);
    }
  } else {
    alert('Product not found!');
  }
}

// Function to display cart items
function displayCart() {
  const cartItemsContainer = document.getElementById('cart-items');
  cartItemsContainer.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    const itemDiv = document.createElement('div');
    itemDiv.innerHTML = `
      ${item.name} - $${item.price.toFixed(2)}
      <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
    `;
    cartItemsContainer.appendChild(itemDiv);
    total += item.price;
  });

  const cartTotal = document.getElementById('cart-total');
  cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

// Function to remove items from cart
function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  displayCart();
}

// Function to update the cart count
function updateCartCount() {
  const cartCount = document.getElementById('cart-count');
  if (cartCount) {
    cartCount.textContent = cart.length;
  }
}

// Display cart items when the page loads
displayCart();

// Checkout button event handler
document.getElementById('checkout-button').addEventListener('click', function () {
  if (cart.length === 0) {
    alert('Your cart is empty!');
  } else {
    alert('Proceeding to checkout');
  }
});

 
  