//
const dataUrl = "./"
const html1 = document.querySelector("html");

const dataClick = document.querySelectorAll('[dataClick]')

const navbar = document.querySelector(".navbar");
const btn_hamburger = document.querySelector(".btn-hamburger");
const menu_mobile = document.querySelector(".menu_mobile");

const itensMenu = document.querySelectorAll(".menu li")
const link = document.querySelectorAll(".menu_mobile li");

const url = "./"
const btn1 = document.getElementById("btn1");

function myscroll(){
    if(html1.scrollTop > 50) {
        navbar.classList.add("navbar-bg");
    }else{
        navbar.classList.remove("navbar-bg");
    }
}

document.onscroll=myscroll

function updateUrl(newUrl){
    history.pushState(null, null, newUrl);
}

function myTime(tempo) {
    setTimeout(function(){
        updateUrl(dataUrl)
    }, tempo);
}

function btnClick(){
    btn_hamburger.classList.toggle("clicked");
    menu_mobile.classList.toggle("active_menu");
}

function abrirProjeto(url){
    const win = window.open(url, "blank");
    win.focus();
};

const myClick = () => {
    btn_hamburger.classList.remove("clicked");
    menu_mobile.classList.remove("active_menu");
};

dataClick[0].addEventListener("click", () => myClick());
dataClick[1].addEventListener("click", () => myClick());
dataClick[2].addEventListener("click", () => myClick());
dataClick[3].addEventListener("click", () => myClick());

btn_hamburger.addEventListener("click", btnClick);

itensMenu[0].addEventListener("click", () => myTime(15));
itensMenu[1].addEventListener("click", () => myTime(15));
itensMenu[2].addEventListener("click", () => myTime(15));
itensMenu[3].addEventListener("click", () => myTime(15));


link[0].addEventListener('click', () => {
    btnClick()
    myTime(15)
});
link[1].addEventListener('click', () => {
    btnClick()
    myTime(15)
});
link[2].addEventListener('click', () => {
    btnClick()
    myTime(15)
});
link[3].addEventListener('click', () => {
    btnClick()
    myTime(15)
});

btn1.addEventListener("click", () => {
    abrirProjeto(url)
}
);

