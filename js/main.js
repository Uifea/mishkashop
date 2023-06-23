const btnClose = document.querySelector('.close-menu');
const btnOpen = document.querySelector('.open-menu');
const navList = document.querySelector('.page-header__navigation-list');
const navCatalog = document.querySelector('.catalog');
const navKnitting = document.querySelector('.knitting');
const navSearch = document.querySelector('.search');
const navCart = document.querySelector('.cart');


btnOpen.addEventListener("click", () => {
    btnOpen.classList.toggle("hide");
    btnClose.classList.toggle("hide");
    navList.style.height = "unset";
    navSearch.style.opacity = "1";
    navCart.style.opacity = "1";
})

btnClose.addEventListener("click", () => {
    btnOpen.classList.toggle("hide");
    btnClose.classList.toggle("hide");
    navList.style.height = "80px";
    navSearch.style.opacity = "0";
    navCart.style.opacity = "0";
})

let delButton = 10;