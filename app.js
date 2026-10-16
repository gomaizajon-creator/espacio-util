const products = [
  {id:1,name:"Soporte ajustable para portátil",cat:"Soportes",type:"stand",tag:"ERGONOMÍA",desc:"Eleva la pantalla y ayuda a liberar espacio en el escritorio.",fit:"Para escritorios compactos"},
  {id:2,name:"Lámpara de escritorio regulable",cat:"Iluminación",type:"lamp",tag:"ILUMINACIÓN",desc:"Una opción regulable para adaptar la luz a tu rutina.",fit:"Para trabajar y estudiar"},
  {id:3,name:"Auriculares para llamadas",cat:"Audio",type:"audio",tag:"AUDIO",desc:"Prioriza comodidad, micrófono y compatibilidad con tus dispositivos.",fit:"Para videollamadas"},
  {id:4,name:"Alfombrilla de escritorio",cat:"Soportes",type:"mat",tag:"ORGANIZACIÓN",desc:"Delimita la zona de trabajo y protege la superficie.",fit:"Para ordenar el escritorio"},
  {id:5,name:"Micrófono USB compacto",cat:"Audio",type:"audio",tag:"AUDIO",desc:"Alternativa para mejorar la voz en reuniones y grabaciones.",fit:"Para reuniones y contenido"},
  {id:6,name:"Soporte de sobremesa",cat:"Soportes",type:"stand",tag:"ESPACIO",desc:"Una forma sencilla de organizar dispositivos y accesorios.",fit:"Para escritorios pequeños"}
];
let filter = "Todos";
const grid = document.querySelector("#grid");
const search = document.querySelector("#search");
function render() {
  const q = search.value.trim().toLocaleLowerCase("es");
  const items = products.filter(p => (filter === "Todos" || p.cat === filter) &&
    `${p.name} ${p.cat} ${p.desc} ${p.fit}`.toLocaleLowerCase("es").includes(q));
  grid.innerHTML = items.map(p => `<article class="product"><div class="art ${p.type}"><span class="tag">DEMO · ${p.tag}</span><div class="shape ${p.type}"></div></div><div class="product-info"><small>${p.cat} · ${p.tag}</small><h3>${p.name}</h3><p>${p.desc}</p><div class="product-meta"><span>Precio por verificar</span><button disabled>Enlace pendiente</button></div></div></article>`).join("");
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