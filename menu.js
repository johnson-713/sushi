const menuItems = [
  {
    title: "Smashed Avo",
    image: "/images/smashed-avo.png",
    price: 20,
    id: 0,
    quantity: 1,
  },
  {
    title: "Ying & Yang",
    image: "/images/ying-yang.png",
    price: 20,
    id: 1,
    quantity: 1,
  },
  {
    title: "Pancakes",
    image: "/images/pancakes.png",
    price: 20,
    id: 2,
    quantity: 1,
  },
  {
    title: "Huevos Rancheros",
    image: "/images/huevos-rancheros.png",
    price: 20,
    id: 3,
    quantity: 1,
  },
  {
    title: "Rancheros",
    image: "/images/rancheros.png",
    price: 20,
    id: 4,
    quantity: 1,
  },
  {
    title: "Veg Burger",
    image: "/images/burg-veg.png",
    price: 20,
    id: 5,
    quantity: 1,
  },
  {
    title: "Egg Burger",
    image: "/images/burg-egg.png",
    price: 20,
    id: 6,
    quantity: 1,
  },
  {
    title: "Burrito",
    image: "/images/burrito.png",
    price: 20,
    id: 7,
    quantity: 1,
  },
];

const menuContainer = document.querySelector(".menu-container");

menuItems.map((menuItem) => {
  const menuCard = document.createElement("div");
  menuCard.classList.add("menu-card"); // Add a class for styling

  const image = document.createElement("img");
  image.src = menuItem.image;
  menuCard.appendChild(image);

  const title = document.createElement("h3");
  title.textContent = menuItem.title;
  menuCard.appendChild(title);

  menuCard.addEventListener("click", () => {
    // Get existing stored items (if any)
    const storedItemsString = localStorage.getItem("selectedMenuItems");
    let storedItems = [];
    if (storedItemsString) {
      storedItems = JSON.parse(storedItemsString);
    }

    // Add the newly selected item
    storedItems.push(menuItem);

    // Store the updated array in localStorage
    localStorage.setItem("selectedMenuItems", JSON.stringify(storedItems));
  });

  menuContainer.appendChild(menuCard);
});

const homeHandle = () => {
  window.location.href = "landingPage.html";
}


const cartHandle = () => {
  window.location.href = "cart.html";
}

const menuHandle = () => {
  window.location.href = "menu.html";
}