// const cartItems = JSON.parse(localStorage.getItem("selectedMenuItems"));

// console.log(cartItems);

const homeHandle = () => {
  window.location.href = "landingPage.html";
};

const cartHandle = () => {
  window.location.href = "cart.html";
};

const menuHandle = () => {
  window.location.href = "menu.html";
};


document.addEventListener('DOMContentLoaded', () => {
    const cartItems = JSON.parse(localStorage.getItem("selectedMenuItems")) || [];
  
    const cartContainer = document.querySelector('.cart-items');
  
    const renderCartItems = () => {
      cartContainer.innerHTML = ''; // Clear the cart container
  
      cartItems.forEach((cartItem, index) => {
        const cartMenu = document.createElement("div");
        cartMenu.classList.add("cart-menu");
  
        const image = document.createElement("img");
        image.classList.add("cart-image");
        image.src = cartItem.image;
        cartMenu.appendChild(image);
  
        const cartTextContainer = document.createElement("div");
        cartTextContainer.classList.add("cart-text-container");
        cartMenu.appendChild(cartTextContainer);
  
        const title = document.createElement("h4");
        title.textContent = cartItem.title;
        cartTextContainer.appendChild(title);
  
        const price = document.createElement("h5");
        price.textContent = `$ ${cartItem.price * cartItem.quantity}`;
        cartTextContainer.appendChild(price);
  
        const quantityContainer = document.createElement("div");
        quantityContainer.classList.add("quantity-container");
        cartMenu.appendChild(quantityContainer);
  
        const minusImage = document.createElement("img");
        minusImage.src = '/icons/-.svg';
        minusImage.addEventListener('click', () => updateQuantity(index, -1));
        quantityContainer.appendChild(minusImage);
  
        const quantity = document.createElement("h5");
        quantity.textContent = cartItem.quantity;
        quantityContainer.appendChild(quantity);
  
        const plusImage = document.createElement("img");
        plusImage.src = '/icons/+.svg';
        plusImage.addEventListener('click', () => updateQuantity(index, 1));
        quantityContainer.appendChild(plusImage);
  
        const cancelImage = document.createElement("img");
        cancelImage.src = '/icons/cancel.svg';
        cancelImage.addEventListener('click', () => removeItem(index));
        cartMenu.appendChild(cancelImage);
  
        cartContainer.appendChild(cartMenu);
      });
  
      // Update the localStorage
      localStorage.setItem("selectedMenuItems", JSON.stringify(cartItems));
    };
  
    const updateQuantity = (index, change) => {
      if (cartItems[index].quantity + change > 0) {
        cartItems[index].quantity += change;
      }
      renderCartItems();
    };
  
    const removeItem = (index) => {
      cartItems.splice(index, 1);
      renderCartItems();
    };
  
    renderCartItems();
  });
  