//
const btn_hamburger = document.querySelector(".btn-hamburger");
const btn_sobre = document.getElementById("btn_sobre");
const btn_cursos = document.getElementById("btn_cursos");
const sobre = document.querySelector(".conteiner_sobre");
const cursos = document.querySelector(".conteiner_cursos");

//const dataUrl = "site/admin"
const dataUrl = "./"

function updateUrl(newUrl){
    history.pushState(null, null, newUrl);
}

function btnClick(){
    btn_hamburger.classList.toggle("clicked");
}

btn_hamburger.addEventListener("click", btnClick);

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
