const products = [
  {id:1,name:"Alojamientos para una escapada",cat:"Viajes",type:"travel",tag:"ALOJAMIENTO",desc:"Guía en preparación: ubicación, condiciones y necesidades del viaje.",fit:"Tema editorial; sin ofertas verificadas"},
  {id:2,name:"Material para empezar a correr",cat:"Deporte",type:"sport",tag:"CARRERA",desc:"Guía en preparación: uso, ajuste y criterios para comparar material.",fit:"Tema editorial; sin productos verificados"},
  {id:3,name:"Accesorios para entrenar al aire libre",cat:"Deporte",type:"sport",tag:"AIRE LIBRE",desc:"Selección en preparación para explorar necesidades de entrenamiento.",fit:"Tema editorial; sin productos verificados"},
  {id:4,name:"Ideas prácticas para viajar",cat:"Productos varios",type:"useful",tag:"VIAJE",desc:"Ideas de organización y artículos útiles, pendientes de investigación.",fit:"Tema editorial; sin productos verificados"},
  {id:5,name:"Pequeñas mejoras para casa",cat:"Productos varios",type:"useful",tag:"HOGAR",desc:"Guía en preparación para comparar soluciones de uso cotidiano.",fit:"Tema editorial; sin productos verificados"},
  {id:6,name:"Planifica una escapada con criterio",cat:"Viajes",type:"travel",tag:"PLANIFICACIÓN",desc:"Lista de aspectos que conviene revisar antes de reservar.",fit:"Tema editorial; sin enlaces activos"}
];
let filter = "Todos";
const grid = document.querySelector("#grid");
const search = document.querySelector("#search");
function render() {
  const q = search.value.trim().toLocaleLowerCase("es");
  const items = products.filter(p => (filter === "Todos" || p.cat === filter) &&
    `${p.name} ${p.cat} ${p.desc} ${p.fit}`.toLocaleLowerCase("es").includes(q));
  grid.innerHTML = items.map(p => `<article class="product"><div class="art ${p.type}"><span class="tag">EN PREPARACIÓN · ${p.tag}</span><div class="shape ${p.type}"></div></div><div class="product-info"><small>${p.cat} · ${p.tag}</small><h3>${p.name}</h3><p>${p.desc}</p><div class="product-meta"><span>Información pendiente</span><button disabled>Enlace pendiente</button></div></div></article>`).join("");
  document.querySelector("#empty").hidden = items.length > 0;
}
document.querySelectorAll("[data-filter]").forEach(button => button.addEventListener("click", () => {
  filter = button.dataset.filter;
  document.querySelectorAll("[data-filter]").forEach(item => item.classList.toggle("active", item === button));
  render();
}));
document.querySelectorAll("[data-cat]").forEach(link => link.addEventListener("click", () => {
  filter = link.dataset.cat;
  document.querySelectorAll("[data-filter]").forEach(item => item.classList.toggle("active", item.dataset.filter === filter));
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