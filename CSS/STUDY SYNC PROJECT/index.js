const menu = document.querySelector(".menu_button");
const nav = document.querySelector(".nav");

menu.addEventListener("click",() => {
    nav.classList.toggle("active");
});