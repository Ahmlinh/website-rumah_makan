const menuicon = document.getElementById("menuicon");
const listmenu = document.getElementById("listmenu");

menuicon.addEventListener("click", ()=> {
    listmenu.classList.toggle("hidden")
})

const gridcoulum = document.getElementById("gridcoulum");
const listconten = document.getElementById("listconten");

gridcoulum.addEventListener("click", ()=> {
    listconten.classList.toggle("grid")
})

const pllcoulum = document.getElementById("pllcoulum");
const listpll = document.getElementById("listpll");

pllcoulum.addEventListener("click", ()=> {
    listpll.classList.toggle("grid")
})