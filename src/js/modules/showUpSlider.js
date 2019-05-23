const showUpSlider = () => {

  const showBtns = document.querySelector('.showup__info-btns'),
        showCards = document.querySelector('.showup__content-card');
        

  showBtns.addEventListener('click', event => {
    let target = event.target;

    if (target.classList.contains('slick-next')) {
      let activeCard = showCards.querySelector('.card-active');
      let div = document.createElement('div');
      div = activeCard;
      
      showCards.children[0].remove();
      showCards.appendChild(div);
      div.classList.remove('card-active');
      showCards.children[0].classList.add('card-active');      
    }
    if (target.classList.contains('slick-prev')) {
      let div = document.createElement('div');
      div = showCards.lastElementChild;

      showCards.classList.remove('.card-active');
      showCards.insertBefore(div, showCards.children[0]);
      showCards.children[0].classList.add('.card-active');
    }
  });
};

module.exports = showUpSlider;