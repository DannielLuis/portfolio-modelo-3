//
const btn_sobre = document.getElementById("btn_sobre");
const btn_cursos = document.getElementById("btn_cursos");
const sobre = document.querySelector(".conteiner_sobre");
const cursos = document.querySelector(".conteiner_cursos");

btn_sobre.addEventListener("click", () => {
    sobre.classList.add("ativo");
    cursos.classList.remove("ativo");
});

btn_cursos.addEventListener("click", () => {
    sobre.classList.remove("ativo");
    cursos.classList.add("ativo");
});
