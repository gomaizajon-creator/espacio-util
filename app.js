const products = [
  {id:1,name:"Cómo comparar alojamientos antes de reservar",cat:"Viajes",type:"travel",tag:"ALOJAMIENTO",desc:"Compara ubicación, coste total, condiciones y necesidades reales del viaje.",href:"guia-alojamiento.html"},
  {id:2,name:"Cómo elegir material para empezar a correr",cat:"Deporte",type:"sport",tag:"CARRERA",desc:"Criterios generales para elegir material según uso, comodidad y presupuesto.",href:"guia-correr.html"},
  {id:3,name:"Cómo comparar productos de uso diario",cat:"Productos varios",type:"useful",tag:"COMPRA CON CRITERIO",desc:"Una checklist para revisar necesidad, compatibilidad, coste y condiciones.",href:"guia-productos.html"}
];
let filter = "Todos";
const grid = document.querySelector("#grid");
const search = document.querySelector("#search");
function render() {
  const q = search.value.trim().toLocaleLowerCase("es");
  const items = products.filter(p => (filter === "Todos" || p.cat === filter) &&
    `${p.name} ${p.cat} ${p.desc}`.toLocaleLowerCase("es").includes(q));
  grid.innerHTML = items.map(p => `<article class="product"><a class="guide-product-link" href="${p.href}"><div class="art ${p.type}"><span class="tag">GUÍA PRÁCTICA · ${p.tag}</span><div class="shape ${p.type}"></div></div><div class="product-info"><small>${p.cat} · GUÍA</small><h3>${p.name}</h3><p>${p.desc}</p><div class="product-meta"><span>Lectura práctica</span><span class="guide-read">Leer guía ↗</span></div></div></a></article>`).join("");
  document.querySelector("#empty").hidden = items.length > 0;
}
document.querySelectorAll("[data-filter]").forEach(button => button.addEventListener("click", () => {
  filter = button.dataset.filter;
  document.querySelectorAll("[data-filter]").forEach(item => item.classList.toggle("active", item === button));
  render();
}));
search.addEventListener("input", render);
const menuButton = document.querySelector("#menu");
menuButton.addEventListener("click", () => {
  const nav = document.querySelector("#nav");
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});
document.querySelectorAll("nav a").forEach(link => link.addEventListener("click", () => {
  document.querySelector("#nav").classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));
document.querySelector("#year").textContent = new Date().getFullYear();
render();