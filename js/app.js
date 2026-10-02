const WHATSAPP = "992554448417";
const INSTAGRAM = "suhaybbb.10";

const products = [
  {
    id: "afshan",
    name: "Afshan",
    brand: "Rasasi",
    gender: "woman",
    tag: "Нав",
    hit: false,
    images: ["images/afshan.jpg"],
    size: "100 мл · Eau de Parfum",
    notes: "Атри занонаи шарқӣ бо бӯи гул, ванилин ва ҳезум. Қуттии арғувонӣ-тиллоӣ, сарпӯши кабуди ҷавоҳирмонанд.",
    extra: "Барои ҳаррӯза ва шом. Бӯй 6–8 соат мемонад.",
  },
  {
    id: "love",
    name: "While in Love Forever",
    brand: "Rasasi",
    gender: "woman",
    tag: "Романтик",
    hit: true,
    images: ["images/while-in-love.png"],
    size: "100 мл · Eau de Parfum",
    notes: "Атри ишқӣ бо нотаҳои гул, мушк ва ҳезуми гарм. Қуттии тиллоӣ-сурх — тӯҳфаи зебо.",
    extra: "Беҳтарин интихоб барои ҷашн ва санаҳои муҳим.",
  },
  {
    id: "salvo",
    name: "Salvo Intense",
    brand: "Maison Alhambra",
    gender: "man",
    tag: "Қавӣ",
    hit: true,
    images: ["images/salvo-intense.png"],
    size: "100 мл · Eau de Parfum",
    notes: "Атри мардонаи шадид: бергамот, ҳапалӯ ва амбра. Шишаи кабуди шабона, бӯи тоза ва ҷаззоб.",
    extra: "Барои кор, вохӯрӣ ва шабҳои шаҳр.",
  },
  {
    id: "hawas",
    name: "Hawas Ice For Him",
    brand: "Rasasi",
    gender: "man",
    tag: "Хит",
    hit: true,
    images: ["images/hawas-ice.png", "images/hawas-ice-ad.jpg"],
    size: "100 мл · Eau de Parfum",
    notes: "Хунукӣ, ях ва тозагӣ. Нотаҳои ситрус, оби баҳр ва мушк. Яке аз фурӯштатарин атрҳои Rasasi.",
    extra: "Дар гармӣ аъло кор мекунад. Бӯй то 10 соат.",
  },
  {
    id: "hawas-fire",
    name: "Hawas Fire For Him",
    brand: "Rasasi",
    gender: "man",
    tag: "Fire",
    hit: true,
    price: 20,
    images: ["images/hawas-fire.png"],
    size: "100 мл · Eau de Parfum",
    notes: "Атри мардонаи гарм ва оташин. Нотаҳо: салвияи фаронсавӣ, минерал, ясминии мисрӣ, баҳр, амбра ва амбрагис. Шишаи сурх-сиёҳ бо сарпӯши сиёҳ.",
    extra: "Барои шом ва рӯзҳои сард. Бӯй қавӣ ва дароз мемонад.",
  },
  {
    id: "yumn-f",
    name: "Yumn Pour Femme",
    brand: "Rasasi",
    gender: "woman",
    tag: "Занона",
    hit: false,
    images: ["images/yumn-femme.png", "images/yumn-femme-2.png"],
    size: "100 мл · Eau de Parfum",
    notes: "Градиенти кабуд-фирӯза ва тилло. Бӯи гулҳои шарқӣ, ванилин ва чӯбҳои хушбӯй.",
    extra: "Намуди боҳашамат — барои тӯҳфа беҳтарин аст.",
  },
  {
    id: "yumn-m",
    name: "Yumn Pour Homme",
    brand: "Rasasi",
    gender: "man",
    tag: "Мардона",
    hit: false,
    images: ["images/yumn-homme.png"],
    size: "100 мл · Eau de Parfum",
    notes: "Градиенти арғувон-норанҷӣ. Бӯи гарм, ҳапалӯ, чарм ва амбра. Қувват ва услуб.",
    extra: "Барои марди боэътимод ва ҷаззоб.",
  },
  {
    id: "nafaeis-f",
    name: "Nafaeis Al Shaghaf Pour Femme",
    brand: "Rasasi",
    gender: "woman",
    tag: "Люкс",
    hit: false,
    images: ["images/nafaeis.png"],
    size: "100 мл · Eau de Parfum",
    notes: "Версияи занона: моеъи тиллоӣ, сарпӯши тиллоӣ. Бӯи гул, заъфарон ва ҳезуми қиматбаҳо.",
    extra: "Ҷуфт бо версияи мардона — тӯҳфаи ҷуфт.",
  },
  {
    id: "nafaeis-m",
    name: "Nafaeis Al Shaghaf Pour Homme",
    brand: "Rasasi",
    gender: "man",
    tag: "Люкс",
    hit: false,
    images: ["images/nafaeis.png"],
    size: "100 мл · Eau de Parfum",
    notes: "Версияи мардона: моеъи кабуд, сарпӯши нуқра. Бӯи тоза, ҳезум ва мушк.",
    extra: "Ҳамроҳ бо Pour Femme як ҷуфти зебо месозад.",
  },
  {
    id: "shuhrah",
    name: "Shuhrah Pour Homme Elixir",
    brand: "Rasasi",
    gender: "man",
    tag: "Elixir",
    hit: true,
    images: ["images/shuhrah.png"],
    size: "100 мл · Eau de Parfum",
    notes: "Elixir — консентратсияи баланд. Шишаи кобалтӣ, сарпӯши тиллоӣ. Бӯи амиқ, шарқӣ ва ҷаззоб.",
    extra: "Барои шом ва рӯзҳои махсус. Бӯй хеле дароз мемонад.",
  },
  {
    id: "rumz-9325-elle",
    name: "Rumz Al Rasasi 9325 Pour Elle",
    brand: "Rasasi",
    gender: "woman",
    tag: "Нав",
    hit: true,
    price: 19,
    images: ["images/rumz-9325-elle.jpg"],
    size: "100 мл · Eau de Parfum",
    notes: "Атри занона бо тарҳи зебра ва штрих-код. Pour Elle — қуттии сафед-сиёҳ, шишаи шаффоф бо сарпӯши сафед.",
    extra: "Барои тӯҳфа ва рӯзҳои махсус. Нарх 19$.",
  },
];

const PRICE = 15;

function priceOf(p) {
  return Number(p && p.price) || PRICE;
}
function oldPriceOf(p) {
  const n = priceOf(p);
  if (n === 20) return 50;
  if (n === 19) return 45;
  return 45;
}
let cart = [];
try { cart = JSON.parse(localStorage.getItem("rasasi-cart") || "[]") || []; } catch (e) { cart = []; }
let activeProduct = null;
let qty = 1;
let audioCtx = null;

function playClick(kind) {
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === "suspended") audioCtx.resume();
    const t = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = "triangle";
    if (kind === "buy") {
      osc.frequency.setValueAtTime(523, t);
      osc.frequency.exponentialRampToValueAtTime(784, t + 0.12);
      osc.frequency.exponentialRampToValueAtTime(1046, t + 0.22);
    } else {
      osc.frequency.setValueAtTime(880, t);
      osc.frequency.exponentialRampToValueAtTime(1320, t + 0.07);
    }
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(0.14, t + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.22);
    osc.connect(gain).connect(audioCtx.destination);
    osc.start(t);
    osc.stop(t + 0.24);
  } catch (e) {}
}

function spawnSparkles() {
  const box = document.getElementById("sparkles");
  if (!box) return;
  for (let i = 0; i < 18; i++) {
    const s = document.createElement("span");
    s.className = "sparkle";
    s.style.left = Math.random() * 100 + "%";
    s.style.bottom = "-8px";
    s.style.animationDelay = Math.random() * 4 + "s";
    s.style.animationDuration = 2.8 + Math.random() * 3 + "s";
    box.appendChild(s);
  }
}

const grid = document.getElementById("productGrid");
const modal = document.getElementById("productModal");
const overlay = document.getElementById("overlay");
const cartDrawer = document.getElementById("cartDrawer");
const checkoutDrawer = document.getElementById("checkoutDrawer");
const toast = document.getElementById("toast");

function money(n) {
  return n + "$";
}

function renderGrid(filter = "all") {
  const list = products.filter((p) => {
    if (filter === "all") return true;
    if (filter === "hit") return p.hit;
    return p.gender === filter;
  });
  grid.innerHTML = list
    .map(
      (p) => `
      <article class="card reveal" data-id="${p.id}">
        <div class="card-img">
          <span class="tag ${p.hit ? "hit" : ""}">${p.tag}</span>
          <img src="${p.images[0]}" alt="${p.name}" />
          <div class="card-cta">Дидан ва харидан</div>
        </div>
        <div class="card-body">
          <div class="brand">${p.brand}</div>
          <h3>${p.name}</h3>
          <div class="price-row">
            <div>
              <span class="old">${oldPriceOf(p)}$</span>
              <span class="now"> ${priceOf(p)}$</span>
            </div>
            <span class="mini">Даставка ҳаст</span>
          </div>
        </div>
      </article>`
    )
    .join("");
}

function openProduct(id) {
  const p = products.find((x) => x.id === id);
  if (!p) return;
  activeProduct = p;
  qty = 1;
  modal.innerHTML = `
    <button class="close" id="closeModal">✕</button>
    <div class="product-view">
      <div class="product-photo"><img id="mainPhoto" src="${p.images[0]}" alt="${p.name}" /></div>
      <div class="product-info">
        <div class="brand">${p.brand} · ${p.size}</div>
        <h2>${p.name}</h2>
        <div class="price-row">
          <div><span class="old">${oldPriceOf(p)}$</span> <span class="now">${priceOf(p)}$</span></div>
        </div>
        <div class="thumbs">
          ${p.images.map((src, i) => `<img src="${src}" data-src="${src}" class="${i === 0 ? "active" : ""}" alt="${p.name}">`).join("")}
        </div>
        <p class="notes">${p.notes}</p>
        <p class="notes">${p.extra}</p>
        <div class="delivery-box">Даставка ҳаст — ба шаҳр ва ноҳияҳо мерасонем. Пардохт ҳангоми гирифтан.</div>
        <div class="qty">
          <button type="button" data-q="-1">−</button>
          <strong id="qtyVal">1</strong>
          <button type="button" data-q="1">+</button>
        </div>
        <div style="display:grid;gap:10px">
          <button class="buy-btn" id="buyNow">Харидани атр — ${priceOf(p)}$</button>
          <button class="ghost-btn" id="addCart">Ба сабад илова кун</button>
        </div>
      </div>
    </div>`;
  show(modal);
}

function show(el) {
  overlay.classList.add("show");
  el.classList.add("show");
  document.body.style.overflow = "hidden";
}

function hideAll() {
  overlay.classList.remove("show");
  modal.classList.remove("show");
  cartDrawer.classList.remove("show");
  checkoutDrawer.classList.remove("show");
  document.body.style.overflow = "";
}

function saveCart() {
  try { localStorage.setItem("rasasi-cart", JSON.stringify(cart)); } catch (e) {}
  document.getElementById("cartCount").textContent = cart.reduce((s, i) => s + i.qty, 0);
}

function addToCart(product, count, open = false) {
  const found = cart.find((i) => i.id === product.id);
  if (found) found.qty += count;
  else cart.push({ id: product.id, name: product.name, img: product.images[0], qty: count, price: priceOf(product) });
  saveCart();
  renderCart();
  toast.textContent = `${product.name} ба сабад илова шуд`;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1800);
  if (open) {
    modal.classList.remove("show");
    show(cartDrawer);
  }
}

function renderCart() {
  const box = document.getElementById("cartItems");
  if (!cart.length) {
    box.innerHTML = "<p class='notes'>Сабад холӣ аст. Атрро интихоб кунед.</p>";
    document.getElementById("cartTotal").textContent = "0$";
    return;
  }
  box.innerHTML = cart
    .map(
      (i) => `
      <div class="cart-item">
        <img src="${i.img}" alt="${i.name}" />
        <div>
          <strong>${i.name}</strong>
          <p>${i.qty} × ${i.price}$</p>
        </div>
        <button class="ghost-btn" data-del="${i.id}">✕</button>
      </div>`
    )
    .join("");
  const total = cart.reduce((s, i) => s + i.qty * i.price, 0);
  document.getElementById("cartTotal").textContent = money(total);
}

function orderText(form) {
  const lines = cart.length
    ? cart.map((i) => `• ${i.name} × ${i.qty}`).join("\n")
    : `• ${form.product?.value || "Атр"}`;
  const picked = products.find((x) => x.name === form.product?.value);
  const total = cart.length ? cart.reduce((s, i) => s + i.qty * i.price, 0) : priceOf(picked);
  const note = form.note?.value ? `\nЭзоҳ: ${form.note.value}` : "";
  return `Салом! Мехоҳам атр харам (Rasasi).\n${lines}\nҶамъ: ${total}$\nНом: ${form.name.value}\nТелефон: ${form.phone.value}\nСуроға: ${form.address.value}${note}\nДаставка ҳаст.`;
}

function waLink(text) {
  return `https://api.whatsapp.com/send?phone=${WHATSAPP}&text=${encodeURIComponent(text)}`;
}

function isInAppBrowser() {
  return /Instagram|FBAN|FBAV|FB_IAB|Line\/|Twitter|TikTok/i.test(navigator.userAgent);
}

function openWhatsApp(text) {
  const url = waLink(text);
  const btn = document.getElementById("waContinue");
  if (btn) btn.href = url;
  if (isInAppBrowser()) {
    window.location.href = url;
    return;
  }
  const w = window.open(url, "_blank");
  if (!w) window.location.href = url;
}

document.getElementById("waFloat").href = waLink("Салом! Мехоҳам атр харам. Даставка ҳаст?");
const footerWa = document.getElementById("footerWa");
if (footerWa) footerWa.href = waLink("Салом! Мехоҳам атр харам. Даставка ҳаст?");
const ig = `https://instagram.com/${INSTAGRAM}`;
["igFloat", "footerIg"].forEach((id) => {
  const el = document.getElementById(id);
  if (el) el.href = ig;
});

function fillExtras() {
  const byId = (id) => products.find((p) => p.id === id);
  const show = document.getElementById("showcaseImg");
  const why = document.getElementById("whyImg");
  const gal = document.getElementById("gallery");
  if (show) show.src = byId("nafaeis-f").images[0];
  if (why) why.src = byId("hawas").images[1] || byId("hawas").images[0];
  const heroBg = document.querySelector(".hero-bg");
  if (heroBg) {
    heroBg.style.backgroundImage = `linear-gradient(180deg, rgba(7,8,12,.28), rgba(7,8,12,.86)), url("${byId("shuhrah").images[0]}")`;
    heroBg.style.backgroundSize = "cover";
    heroBg.style.backgroundPosition = "center 58%";
    heroBg.style.backgroundRepeat = "no-repeat";
  }
  if (gal) {
    const pics = products.map((p) => `<img src="${p.images[0]}" alt="${p.name}">`).join("");
    gal.innerHTML = pics + pics;
  }
}

function fillSelect() {
  const sel = document.getElementById("quickProduct");
  sel.innerHTML = products.map((p) => `<option value="${p.name}">${p.name} — ${priceOf(p)}$</option>`).join("");
}

function tick() {
  const now = new Date();
  const end = new Date();
  end.setHours(23, 59, 59, 999);
  let s = Math.max(0, Math.floor((end - now) / 1000));
  const h = String(Math.floor(s / 3600)).padStart(2, "0");
  s %= 3600;
  const m = String(Math.floor(s / 60)).padStart(2, "0");
  const sec = String(s % 60).padStart(2, "0");
  document.getElementById("timer").innerHTML = `<span>${h}</span>:<span>${m}</span>:<span>${sec}</span>`;
}

grid.addEventListener("click", (e) => {
  const card = e.target.closest(".card");
  if (card) openProduct(card.dataset.id);
});

document.querySelectorAll(".filter").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderGrid(btn.dataset.filter);
  });
});

overlay.addEventListener("click", hideAll);

modal.addEventListener("click", (e) => {
  if (e.target.id === "closeModal") hideAll();
  if (e.target.dataset.src) {
    const main = document.getElementById("mainPhoto");
    main.classList.remove("swap");
    void main.offsetWidth;
    main.src = e.target.dataset.src;
    main.classList.add("swap");
    modal.querySelectorAll(".thumbs img").forEach((img) => img.classList.toggle("active", img === e.target));
  }
  if (e.target.dataset.q) {
    qty = Math.max(1, qty + Number(e.target.dataset.q));
    document.getElementById("qtyVal").textContent = qty;
  }
  if (e.target.id === "addCart") addToCart(activeProduct, qty);
  if (e.target.id === "buyNow") {
    addToCart(activeProduct, qty);
    modal.classList.remove("show");
    show(checkoutDrawer);
  }
});

document.getElementById("cartBtn").addEventListener("click", () => {
  renderCart();
  show(cartDrawer);
});
document.getElementById("mobileCart").addEventListener("click", () => {
  renderCart();
  show(cartDrawer);
});
document.getElementById("checkoutBtn").addEventListener("click", () => {
  if (!cart.length) return;
  cartDrawer.classList.remove("show");
  show(checkoutDrawer);
});
document.getElementById("cartItems").addEventListener("click", (e) => {
  const id = e.target.dataset.del;
  if (!id) return;
  cart = cart.filter((i) => i.id !== id);
  saveCart();
  renderCart();
});

function finishOrder(form, viaWhatsApp = true) {
  const text = orderText(form);
  document.getElementById("checkoutForm").hidden = true;
  document.getElementById("successBox").hidden = false;
  cart = [];
  saveCart();
  renderCart();
  if (viaWhatsApp) openWhatsApp(text);
  setTimeout(() => {
    document.getElementById("checkoutForm").hidden = false;
    document.getElementById("checkoutForm").reset();
    document.getElementById("successBox").hidden = true;
    document.getElementById("quickForm").reset();
  }, 20000);
}

document.getElementById("checkoutForm").addEventListener("submit", (e) => {
  e.preventDefault();
  finishOrder(e.target);
});

document.getElementById("quickForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = e.target.product.value;
  const p = products.find((x) => x.name === name);
  if (p) addToCart(p, 1);
  finishOrder(e.target);
  show(checkoutDrawer);
});

document.getElementById("menuBtn").addEventListener("click", () => {
  document.getElementById("navLinks").classList.toggle("open");
});
document.querySelectorAll(".nav-links a").forEach((a) => {
  a.addEventListener("click", () => document.getElementById("navLinks").classList.remove("open"));
});

const header = document.getElementById("siteHeader");
window.addEventListener("scroll", () => {
  if (header) header.classList.toggle("scrolled", window.scrollY > 24);
}, { passive: true });

renderGrid();
fillSelect();
fillExtras();
saveCart();
renderCart();
tick();
setInterval(tick, 1000);
spawnSparkles();

document.addEventListener("click", (e) => {
  const hit = e.target.closest("button, .buy-btn, .ghost-btn, .card, .filter, .icon-btn, .whatsapp-float, .gallery img");
  if (!hit) return;
  playClick(hit.classList.contains("buy-btn") || hit.id === "buyNow" ? "buy" : "click");
});
