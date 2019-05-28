let button = document.querySelector(".mobile-menu__btn"),
    btnIcon = document.querySelector(".mobile-menu__icon"),
    container = document.querySelector(".mobile-menu__container");


button.addEventListener("click", ()=>{
    container.classList.toggle('open');
    btnIcon.classList.toggle('openBtn');
    
});