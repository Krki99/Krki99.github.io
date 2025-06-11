const products = [
  //  {
  //   id: 1,                      // Bitno je da bude unikatan TODO: mozda nekako moze da se napravi da bude auto increment ali otom potom
  //   category: 'coffee',         // Nebitno je sta je, i na kom je jeziku, kasnije se setuje kroz kod
  //   name_en: 'Espresso',        // za dodavanje jos jezika potrebno je dodati atribute sa imenom, i vrednosti kao i vrednost jezika u HTML-u
  //   name_sr: 'Espreso',         
  //   price: 150,                // cena
  //   img: 'images/espreso.jpeg' // Ne mora da bude 400x300 ali je pozeljno 
  // },
  {
    id: 1,
    category: 'coffee',
    name_en: 'Espresso',
    name_sr: 'Espreso',
    price: 150,
    img: 'https://source.unsplash.com/400x300/?espresso'
  },
  {
    id: 2,
    category: 'coffee',
    name_en: 'Cappuccino',
    name_sr: 'Kapućino',
    price: 200,
    img: 'https://source.unsplash.com/400x300/?cappuccino'
  },
  {
    id: 3,
    category: 'tea',
    name_en: 'Green Tea',
    name_sr: 'Zeleni Čaj',
    price: 180,
    img: 'https://source.unsplash.com/400x300/?tea'
  }
];

const langData = {
  en: { cart: 'Cart', order: 'Order' },
  sr: { cart: 'Korpa', order: 'Poruči' }
};

let currentLang = 'en';
let cart = [];

const categoriesContainer = document.getElementById('categories');
const menuContainer = document.getElementById('menu-items');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartCount = document.getElementById('cart-count');
const cartSidebar = document.getElementById('cart-sidebar');
const cartBtn = document.getElementById('cart-button');
const closeCartBtn = document.getElementById('close-cart');
const orderBtn = document.getElementById('order-btn');

function getCategories() {
  return [...new Set(products.map(p => p.category))];
}

function renderCategories() {
  categoriesContainer.innerHTML = '';
  getCategories().forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'category-btn';
    btn.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
    btn.onclick = () => renderMenu(cat);
    categoriesContainer.appendChild(btn);
  });
}

function renderMenu(category) {
  menuContainer.innerHTML = '';
  products.filter(p => p.category === category).forEach(item => {
    const div = document.createElement('div');
    div.className = 'menu-item';
    div.innerHTML = `
      <img src="${item.img}" alt="${item.name_en}" />
      <div class="menu-info">
        <h3>${item[`name_${currentLang}`]}</h3>
        <p>${item.price} RSD</p>
        <button onclick="addToCart(${item.id})">+ Add</button>
      </div>
    `;
    menuContainer.appendChild(div);
  });
}

function addToCart(id) {
  const item = products.find(p => p.id === id);
  const existing = cart.find(ci => ci.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...item, qty: 1 });
  }
  updateCart();
}

function updateCart() {
  cartItems.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    total += item.price * item.qty;
    const li = document.createElement('li');
    li.textContent = `${item[`name_${currentLang}`]} x${item.qty}`;
    cartItems.appendChild(li);
  });
  cartTotal.textContent = `${total} RSD`;
  cartCount.textContent = cart.reduce((a, b) => a + b.qty, 0);
}

function translateLabels() {
  document.querySelector('[data-lang="cart"]').textContent = langData[currentLang].cart;
  document.querySelector('[data-lang="order"]').textContent = langData[currentLang].order;
}

document.getElementById('language-switcher').addEventListener('change', (e) => {
  currentLang = e.target.value;
  translateLabels();
  renderCategories();
  renderMenu(getCategories()[0]);
  updateCart();
});

cartBtn.addEventListener('click', () => {
  cartSidebar.classList.add('visible');
});

closeCartBtn.addEventListener('click', () => {
  cartSidebar.classList.remove('visible');
});

orderBtn.addEventListener('click', () => {
  const orderData = {
    items: cart,
    total: cart.reduce((sum, item) => sum + item.price * item.qty, 0),
    language: currentLang
  };

  fetch('https://example.com/api/order', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(orderData)
  })
  .then(res => res.ok ? alert(currentLang === 'en' ? 'Order sent!' : 'Porudžbina poslata!') : alert('Error'))
  .catch(() => alert('Error'));
});

window.onload = () => {
  translateLabels();
  renderCategories();
  renderMenu(getCategories()[0]);
};
