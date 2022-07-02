let popupBg = document.querySelector('.popup__bg');
let popup = document.querySelector('.popup');
let openPopupButton = document.querySelector('.footer__button_detailed');
let closePopupButton = document.querySelector('.popup__close');

openPopupButton.addEventListener('click',(e) => {
    e.preventDefault();
    popupBg.classList.add('active');
    popup.classList.add('active');
});

closePopupButton.addEventListener('click',() => {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
});

document.addEventListener('click', (e) => {
    if(e.target === popupBg) {
        popupBg.classList.remove('active');
        popup.classList.remove('active');
    }
});