document.querySelector('.menu__btn').onclick = function() {
    this.classList.toggle('button--active');

    let btnActive = document.querySelector('.menu__list');
    btnActive.classList.toggle('nav--active');
  
}