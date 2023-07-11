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

let modalWindow = document.querySelector(".modal");
let modalWindowBody = document.querySelector(".modal__body")
let buyButtons = document.querySelectorAll(".buy");
let buttonModalAdd = document.querySelector(".modal__button");

//Функция по закрыванию и открыванию попапа
let closeModal = function () {
    modalWindow.classList.toggle("hide");
}

//Закрыть попап
buttonModalAdd.addEventListener("click", () => {
    closeModal();
})

//Закрыть попа через ескейп
document.addEventListener("keydown", (e) => {
    if (e.code === 'Escape' && !modalWindow.classList.contains('hide')) {
        closeModal();
    }
})
//Закрыть попап через мышку
document.addEventListener('click', (e) => {
    if (e.target === modalWindow) {
        closeModal();
    }
})


//Вызов попапа
for (let buyButton of buyButtons) {
    buyButton.addEventListener("click", () => {
        closeModal();
    })
}