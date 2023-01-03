//
const html1 = document.querySelector("html");
const navbar = document.querySelector(".navbar");
const btn_hamburger = document.querySelector(".btn-hamburger");
const menu_mobile = document.querySelector(".menu_mobile");
const link1 = document.querySelector(".link-1");
const link2 = document.querySelector(".link-2");
const link3 = document.querySelector(".link-3");
const btn_sobre = document.getElementById("btn_sobre");
const btn_cursos = document.getElementById("btn_cursos");
const sobre = document.querySelector(".conteiner_sobre");
const cursos = document.querySelector(".conteiner_cursos");

//console.log(html1.scrollTop);

function myscroll(){
    //console.log(html1.scrollTop);
    if(html1.scrollTop > 50) {
        //alert("Maior que 60")
        navbar.classList.add("navbar-bg");
    }else{
        navbar.classList.remove("navbar-bg");
    }
}

document.onscroll=myscroll

//const dataUrl = "site/admin"
const dataUrl = "./"

function updateUrl(newUrl){
    history.pushState(null, null, newUrl);
}

function btnClick(){
    btn_hamburger.classList.toggle("clicked");
    menu_mobile.classList.toggle("active_menu");
}

btn_hamburger.addEventListener("click", btnClick);

link1.addEventListener('click', () => {
    btnClick()
});
link2.addEventListener('click', () => {
    btnClick()
});
link3.addEventListener('click', () => {
    btnClick()
});
/*
window.onload = function(){
    location.href = "index.html#projetos";
    updateUrl(dataUrl)
}*/
/*
window.addEventListener("load", () => {
    //alert("Testando")
    location.href = "index.html#projetos";
});*/

btn_sobre.addEventListener("click", () => {
    sobre.classList.add("ativo");
    cursos.classList.remove("ativo");
});

btn_cursos.addEventListener("click", () => {
    sobre.classList.remove("ativo");
    cursos.classList.add("ativo");
});
