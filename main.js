document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".page-header-nav-mobile");
    hamburger.addEventListener("click", function () {
        console.log(menu);
        menu.classList.toggle("page-header-nav-mobile-open");
        console.log(hamburger);
    })
})