// Elements
const productList = document.getElementById("product-list");
const productModal = document.getElementById("product-modal");
const modalTitle = document.getElementById("modal-title");
const modalImages = document.getElementById("modal-images");
const modalDescription = document.getElementById("modal-description");
const modalPrice = document.getElementById("modal-price");
const addToCartBtn = document.getElementById("add-to-cart-btn");
const closeModalBtn = document.getElementById("close-modal");

const cartBtn = document.getElementById("cart-btn");
const cartCard = document.getElementById("cart-card");
const cartItemsList = document.getElementById("cart-items");
const checkoutBtn = document.getElementById("checkout-btn");
const closeCartBtn = document.getElementById("close-cart-btn");

const darkModeToggle = document.getElementById("dark-mode-toggle");

const langEnBtn = document.getElementById("lang-en");
const langSrBtn = document.getElementById("lang-sr");
const langBtns = document.querySelectorAll(".lang-btn");

const contactOrderSection = document.getElementById("contact-order");
const orderSummaryTextarea = document.getElementById("order-summary");

const nameInput = document.getElementById("name");
const prefixSelect = document.getElementById("prefix");
const phoneInput = document.getElementById("phone");

// Site name element for language toggle (optional to change)
const siteNameEl = document.getElementById("site-name");

// Cart state
let cart = [];
let selectedProduct = null;
let currentLang = "sr"; // default Serbian

// Sample products
const products = [
  {
    id: 1,
    name: { en: "Laser Cut Owl", sr: "Laser Izrezana Sova" },
    description: {
      en: "Beautiful owl laser cut design for decoration.",
      sr: "Lepa sova izrezana laserski za dekoraciju.",
    },
    price: 1500,
    images: [
      "https://i.ibb.co/1JrJ2Gp/owl1.jpg",
      "https://i.ibb.co/x7Xx6FT/owl2.jpg",
      "https://i.ibb.co/y8rRXLn/owl3.jpg",
    ],
  },
  {
    id: 2,
    name: { en: "Laser Cut Flower", sr: "Laser Izrezani Cvijet" },
    description: {
      en: "Elegant flower cut perfect for gifts.",
      sr: "Elegantni cvet za poklone.",
    },
    price: 1200,
    images: [
      "https://i.ibb.co/vYCxJPV/flower1.jpg",
      "https://i.ibb.co/vzNPLDt/flower2.jpg",
    ],
  },
  {
    id: 3,
    name: { en: "Laser Cut Keychain", sr: "Laser Izrezani Privjesak" },
    description: {
      en: "Unique keychain with laser cut patterns.",
      sr: "Jedinstveni privjesak sa laserskim dezenima.",
    },
    price: 800,
    images: [
      "https://i.ibb.co/Gxg1LXb/keychain1.jpg",
      "https://i.ibb.co/tCmzFvt/keychain2.jpg",
      "https://i.ibb.co/tCqH1rF/keychain3.jpg",
    ],
  },
];

// UTILITIES

function translatePage(lang) {
  document.querySelectorAll("[data-en]").forEach((el) => {
    if (lang === "en") {
      el.textContent = el.dataset.en;
    } else {
      el.textContent = el.dataset.sr;
    }
  });
  // Translate site name if desired
  siteNameEl.textContent = lang === "en" ? "LaserCut" : "LaserCut";
}

function updateLanguageButtons() {
  langBtns.forEach((btn) => {
    btn.classList.toggle("selected", btn.id === `lang-${currentLang}`);
  });
}

// PRODUCT LIST RENDERING
function renderProducts() {
  productList.innerHTML = "";
  products.forEach((prod) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-pressed", "false");
    card.setAttribute("aria-label", `${prod.name[currentLang]}, price ${prod.price} RSD`);

    const img = document.createElement("img");
    img.src = prod.images[0];
    img.alt = prod.name[currentLang];
    card.appendChild(img);

    const info = document.createElement("div");
    info.className = "product-info";

    const nameEl = document.createElement("div");
    nameEl.className = "product-name";
    nameEl.textContent = prod.name[currentLang];

    const priceEl = document.createElement("div");
    priceEl.className = "product-price";
    priceEl.textContent = prod.price + " RSD";

    info.appendChild(nameEl);
    info.appendChild(priceEl);
    card.appendChild(info);

    card.addEventListener("click", () => openProductModal(prod));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openProductModal(prod);
      }
    });

    productList.appendChild(card);
  });
}

// MODAL HANDLING

function openProductModal(product) {
  selectedProduct = product;
  modalTitle.textContent = product.name[currentLang];
  modalDescription.textContent = product.description[currentLang];
  modalPrice.textContent = product.price + " RSD";
  modalImages.innerHTML = "";

  product.images.forEach((src, index) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = product.name[currentLang] + " image " + (index + 1);
    if (index === 0) img.classList.add("selected");
    img.tabIndex = 0;
    img.addEventListener("click", () => {
      document.querySelectorAll("#modal-images img").forEach((im) => im.classList.remove("selected"));
      img.classList.add("selected");
      // Update main modal image if needed (here all images visible horizontally)
    });
    modalImages.appendChild(img);
  });

  productModal.classList.remove("hidden");
  productModal.focus();
}

function closeProductModal() {
  productModal.classList.add("hidden");
  selectedProduct = null;
}

closeModalBtn.addEventListener("click", closeProductModal);
productModal.addEventListener("click", (e) => {
  if (e.target === productModal) closeProductModal();
});
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !productModal.classList.contains("hidden")) {
    closeProductModal();
  }
});

// CART HANDLING

function updateCartCount() {
  document.getElementById("cart-count").textContent = cart.length;
}

function renderCart() {
  cartItemsList.innerHTML = "";
  if (cart.length === 0) {
    cartItemsList.innerHTML = `<li data-en="Cart is empty" data-sr="Korpa je prazna">Korpa je prazna</li>`;
    translatePage(currentLang);
    return;
  }
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name[currentLang]} - ${item.price} RSD`;

    const removeBtn = document.createElement("button");
    removeBtn.className = "remove-btn";
    removeBtn.textContent = "×";
    removeBtn.setAttribute("aria-label", currentLang === "en" ? `Remove ${item.name.en}` : `Ukloni ${item.name.sr}`);
    removeBtn.addEventListener("click", () => {
      removeFromCart(item.id);
    });

    li.appendChild(removeBtn);
    cartItemsList.appendChild(li);
  });
}

function addToCart(product) {
  // Prevent duplicates
  if (cart.some((item) => item.id === product.id)) return;
  cart.push(product);
  updateCartCount();
  renderCart();
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  updateCartCount();
  renderCart();
}

// Dark mode toggle logic fix
function initDarkMode() {
  // Load dark mode from localStorage if exists
  const darkModePref = localStorage.getItem("darkMode");
  if (darkModePref === "enabled") {
    document.body.classList.add("dark-mode");
    darkModeToggle.checked = true;
  } else {
    document.body.classList.remove("dark-mode");
    darkModeToggle.checked = false;
  }
}

darkModeToggle.addEventListener("change", () => {
  if (darkModeToggle.checked) {
    document.body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled");
  } else {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "disabled");
  }
});

// Cart button toggles cart card visibility
cartBtn.addEventListener("click", () => {
  cartCard.classList.toggle("hidden");
});

// Close cart button closes cart card
closeCartBtn.addEventListener("click", () => {
  cartCard.classList.add("hidden");
});

// Add to cart button in modal
addToCartBtn.addEventListener("click", () => {
  if (selectedProduct) {
    addToCart(selectedProduct);
    closeProductModal();
  }
});

// Checkout button behavior: close cart, scroll to contact, fill order summary
checkoutBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    alert(currentLang === "en" ? "Your cart is empty." : "Vaša korpa je prazna.");
    return;
  }
  cartCard.classList.add("hidden");
  contactOrderSection.scrollIntoView({ behavior: "smooth" });

  let orderText = "";
  cart.forEach((item) => {
    orderText += `- ${item.name[currentLang]} (${item.price} RSD)\n`;
  });
  orderSummaryTextarea.value = orderText;
});

// Language switching
langEnBtn.addEventListener("click", () => {
  currentLang = "en";
  translatePage("en");
  updateLanguageButtons();
  renderProducts();
  renderCart();
});
langSrBtn.addEventListener("click", () => {
  currentLang = "sr";
  translatePage("sr");
  updateLanguageButtons();
  renderProducts();
  renderCart();
});

// On load
document.addEventListener("DOMContentLoaded", () => {
  initDarkMode();
  translatePage(currentLang);
  updateLanguageButtons();
  renderProducts();
  renderCart();
});
