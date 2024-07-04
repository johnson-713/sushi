const homeHandle = () => {
  window.location.href = "landingPage.html"
}

const menuHandle = () => {
  window.location.href = "menu.html"
}

document.addEventListener("DOMContentLoaded", () => {
  const cartItems = JSON.parse(localStorage.getItem("selectedMenu"))

  const cartContainer = document.querySelector(".cart-container")

  const renderItems = () => {
    cartContainer.innerHTML = ""

    cartItems.map((cartItem, index) => {
      const cartMenu = document.createElement("div")
      cartMenu.classList.add("cart-menu")

      const image = document.createElement("img")
      image.classList.add("cart-menu-image")
      image.src = cartItem.image
      cartMenu.appendChild(image)

      const textContainer = document.createElement("div")
      textContainer.classList.add("cart-menu-text-container")
      cartMenu.appendChild(textContainer)


      const title = document.createElement("p")
      title.classList.add("cart-menu-title")
      title.textContent = cartItem.title
      textContainer.appendChild(title)

      const price = document.createElement("p")
      price.textContent = `$ ${cartItem.price * cartItem.quantity}`
      textContainer.appendChild(price)


      const quantityContainer = document.createElement("div")
      quantityContainer.classList.add("cart-menu-quantity-container")
      cartMenu.appendChild(quantityContainer)


      const minus = document.createElement("img")
      minus.src = "/icons/-.svg" 
      minus.addEventListener("click", () => changeQuantity(index, -1))
      quantityContainer.appendChild(minus)

      const quantity = document.createElement("p")
      quantity.classList.add("cart-quantity")
      quantity.textContent = cartItem.quantity
      quantityContainer.appendChild(quantity)

      const plus = document.createElement("img")
      plus.src = "/icons/+.svg"
      plus.addEventListener("click", () => changeQuantity(index, 1))
      quantityContainer.appendChild(plus)

      const cancel = document.createElement("img")
      cancel.src = "/icons/cancel.svg"
      cancel.addEventListener("click", () => removeItem(index))
      cartMenu.appendChild(cancel)

      cartContainer.appendChild(cartMenu)

      localStorage.setItem("selectedMenu", JSON.stringify(cartItems))
    })
  }

  const changeQuantity = (index, change) => {
    if(cartItems[index].quantity + change > 0) {
      cartItems[index].quantity += change
    }
    renderItems()
  }

  const removeItem = (index) => {
    cartItems.splice(index, 1)
    renderItems()
  }

  renderItems()

})