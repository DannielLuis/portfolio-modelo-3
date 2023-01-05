//
const dataUrl = "./"
const html1 = document.querySelector("html");
const navbar = document.querySelector(".navbar");
const btn_hamburger = document.querySelector(".btn-hamburger");
const menu_mobile = document.querySelector(".menu_mobile");

const link = document.querySelectorAll(".menu_mobile li");
/*const btn_sobre = document.getElementById("btn_sobre");
const btn_cursos = document.getElementById("btn_cursos");
const sobre = document.querySelector(".conteiner_sobre");
const cursos = document.querySelector(".conteiner_cursos");*/

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

function updateUrl(newUrl){
    history.pushState(null, null, newUrl);
}

function btnClick(){
    btn_hamburger.classList.toggle("clicked");
    menu_mobile.classList.toggle("active_menu");
}

/*
window.onload = function(){
    location.href = "index.html#sobre";
    updateUrl(dataUrl)
}*/
/*
window.addEventListener("load", () => {
    //location.href = "index.html#sobre";
    location.href = "index.html#projetos";
    updateUrl(dataUrl)
});*/

btn_hamburger.addEventListener("click", btnClick);

link[0].addEventListener('click', () => btnClick());
link[1].addEventListener('click', () => btnClick());
link[2].addEventListener('click', () => btnClick());

/*
btn_sobre.addEventListener("click", () => {
    sobre.classList.add("ativo");
    cursos.classList.remove("ativo");
});

btn_cursos.addEventListener("click", () => {
    sobre.classList.remove("ativo");
    cursos.classList.add("ativo");
});*/
