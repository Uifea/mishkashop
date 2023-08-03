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

function init() {
    let map = new ymaps.Map('map-contact', {
        center: [59.93863106417265,30.323036499999905],
        zoom: 17
    });

    let placemark = new ymaps.Placemark([59.93863106417265,30.323036499999905], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'images/map-pin.png',
        iconImageSize: [68, 90],
        iconImageOffset: [-30, -60]
    });

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

    map.geoObjects.add(placemark);
}

ymaps.ready(init);
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