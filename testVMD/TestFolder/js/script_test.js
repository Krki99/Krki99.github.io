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
    img: 'images/espreso.jpeg'
  },
  {
    id: 2,
    category: 'coffee',
    name_en: 'Cappuccino',
    name_sr: 'Kapućino',
    price: 200,
    img: 'images/cappuccino.jpeg'
  },
  {
    id: 3,
    category: 'tea',
    name_en: 'Green Tea',
    name_sr: 'Zeleni Čaj',
    price: 180,
    img: 'images/green_tea.jpg'
  },
  {
    id: 4,
    category: 'dessert',
    name_en: 'NEsto slatko na engleskom za test',
    name_sr: 'NEsto slatko na srpskom za test',
    price: 180,
    img: 'https://source.unsplash.com/400x300/?tea'
  }

  ,
  {
    id: 5,
    category: 'dessert',
    name_en: 'NEsto slatko na engleskom za test',
    name_sr: 'NEsto slatko na srpskom za test',
    price: 180,
    img: 'https://source.unsplash.com/400x300/?tea'
  }
  ,
  {
    id: 6,
    category: 'dessert',
    name_en: 'NEsto slatko na engleskom za test',
    name_sr: 'NEsto slatko na srpskom za test',
    price: 180,
    img: 'https://source.unsplash.com/400x300/?tea'
  }
  ,
  {
    id: 7,
    category: 'dessert',
    name_en: 'NEsto slatko na engleskom za test',
    name_sr: 'NEsto slatko na srpskom za test',
    price: 180,
    img: 'https://source.unsplash.com/400x300/?tea'
  }
  ,
  {
    id: 48,
    category: 'dessert',
    name_en: 'NEsto slatko na engleskom za test',
    name_sr: 'NEsto slatko na srpskom za test',
    price: 180,
    img: 'https://source.unsplash.com/400x300/?tea'
  }
  ,
  {
    id: 9,
    category: 'dessert',
    name_en: 'NEsto slatko na engleskom za test',
    name_sr: 'NEsto slatko na srpskom za test',
    price: 180,
    img: 'https://source.unsplash.com/400x300/?tea'
  }
  ,
  {
    id: 10,
    category: 'dessert',
    name_en: 'NEsto slatko na engleskom za test',
    name_sr: 'NEsto slatko na srpskom za test',
    price: 180,
    img: 'https://source.unsplash.com/400x300/?tea'
  }
  ,
  {
    id: 11,
    category: 'dessert',
    name_en: 'NEsto slatko na engleskom za test',
    name_sr: 'NEsto slatko na srpskom za test',
    price: 180,
    img: 'https://source.unsplash.com/400x300/?tea'
  }
  ,
  {
    id: 12,
    category: 'dessert',
    name_en: 'NEsto slatko na engleskom za test',
    name_sr: 'NEsto slatko na srpskom za test',
    price: 180,
    img: 'https://source.unsplash.com/400x300/?tea'
  }
  ,
  {
    id: 111,
    category: 'dessert',
    name_en: 'NEsto slatko na engleskom za test',
    name_sr: 'NEsto slatko na srpskom za test',
    price: 180,
    img: 'https://source.unsplash.com/400x300/?tea'
  }
  ,
  {
    id: 112,
    category: 'dessert',
    name_en: 'NEsto slatko na engleskom za test',
    name_sr: 'NEsto slatko na srpskom za test',
    price: 180,
    img: 'https://source.unsplash.com/400x300/?tea'
  }
  ,
  {
    id: 211,
    category: 'dessert',
    name_en: 'NEsto slatko na engleskom za test',
    name_sr: 'NEsto slatko na srpskom za test',
    price: 180,
    img: 'https://source.unsplash.com/400x300/?tea'
  }
  ,
  {
    id: 212,
    category: 'dessert',
    name_en: 'NEsto slatko na engleskom za test',
    name_sr: 'NEsto slatko na srpskom za test',
    price: 180,
    img: 'https://source.unsplash.com/400x300/?tea'
  }
  ,
  {
    id: 110,
    category: 'dessert',
    name_en: 'NEsto slatko na engleskom za test',
    name_sr: 'NEsto slatko na srpskom za test',
    price: 180,
    img: 'https://source.unsplash.com/400x300/?tea'
  }
  ,
  {
    id: 111,
    category: 'dessert',
    name_en: 'NEsto slatko na engleskom za test',
    name_sr: 'NEsto slatko na srpskom za test',
    price: 180,
    img: 'https://source.unsplash.com/400x300/?tea'
  }
  ,
  {
    id: 112,
    category: 'dessert',
    name_en: 'NEsto slatko na engleskom za test',
    name_sr: 'NEsto slatko na srpskom za test',
    price: 180,
    img: 'https://source.unsplash.com/400x300/?tea'
  }
  ,
  {
    id: 1111,
    category: 'dessert',
    name_en: 'NEsto slatko na engleskom za test',
    name_sr: 'NEsto slatko na srpskom za test',
    price: 180,
    img: 'https://source.unsplash.com/400x300/?tea'
  }
  ,
  {
    id: 1112,
    category: 'dessert',
    name_en: 'NEsto slatko na engleskom za test',
    name_sr: 'NEsto slatko na srpskom za test',
    price: 180,
    img: 'https://source.unsplash.com/400x300/?tea'
  }
  ,
  {
    id: 1211,
    category: 'dessert',
    name_en: 'NEsto slatko na engleskom za test',
    name_sr: 'NEsto slatko na srpskom za test',
    price: 180,
    img: 'https://source.unsplash.com/400x300/?tea'
  }
  ,
  {
    id: 1212,
    category: 'dessert',
    name_en: 'NEsto slatko na engleskom za test',
    name_sr: 'NEsto slatko na srpskom za test',
    price: 180,
    img: 'https://source.unsplash.com/400x300/?tea'
  },
  {
    id: 1999,
    category: 'coffee',
    name_en: 'Mnogo dugi naziv za probu vrapovanja teksta',
    name_sr: 'Mnogo dugi naziv za probu vrapovanja teksta',
    price: 200,
    img: 'images/cappuccino.jpeg'
  },

];

const langData = {
  en: { cart: 'Cart', order: 'Order' },
  sr: { cart: 'Korpa', order: 'Poruči' }
};

const categoryNames = { // dodavanje kategorije i imena za njih, uglavnom je lako dodavanje drugih jezika na principu en: 'vrednost', bitno je da se poklapa kod za jezik
  coffee: { en: 'Coffee', sr: 'Kafa' },
  tea: { en: 'Tea', sr: 'Čaj' },
  dessert: { en: 'Dessert', sr: 'Dezert' }
};



// deo za obradu


let currentLang = 'sr';
let cart = [];
let tableId = '';
let cartTotalValue = 0;

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
    btn.textContent = categoryNames[cat][currentLang] || cat;
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
  cart.forEach((item, index) => {
    total += item.price * item.qty;
    const li = document.createElement('li');

    const itemName = document.createElement('span');
    itemName.textContent = `${item[`name_${currentLang}`]} x${item.qty}`;

    const buttonGroup = document.createElement('div');
    buttonGroup.className = 'btn-group';

    const btnPlus = document.createElement('button');
    btnPlus.textContent = '+';
    btnPlus.className = 'addMoreBtn';

    const btnMinus = document.createElement('button');
    btnMinus.textContent = '-';
    btnMinus.className = 'removeBtn';

    // Add event listeners for buttons
    btnPlus.addEventListener('click', () => {
      cart[index].qty += 1;
      updateCart();
    });

    btnMinus.addEventListener('click', () => {
      cart[index].qty -= 1;
      if (cart[index].qty <= 0) {
        cart.splice(index, 1); // Remove item from cart
      }
      updateCart();
    });

    buttonGroup.appendChild(btnPlus);
    buttonGroup.appendChild(btnMinus);

    li.appendChild(itemName);
    li.appendChild(buttonGroup);

    cartItems.appendChild(li);
  });
  cartTotalValue = total;
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
  renderCategories(); // re-renders category names
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
    tableNumber: tableId,
    items: cart,
    total: cartTotalValue
  };

  placeOrder(orderData);
});

window.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  tableId = params.get('table') || '';
  document.getElementById('table-id').value = tableId; // optional if input used
});

window.onload = () => {
  translateLabels();
  renderCategories();
  renderMenu(getCategories()[0]);
};

function placeOrder(orderData) {

  console.log('total:', orderData.total);
  // Pozivanje globalne funkcije postavljene iz modula
  if (window.sendOrder) {
    window.sendOrder(orderData);
  } else {
    alert("Order function not available yet.");
  }
}