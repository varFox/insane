const showUpSlider = () => {

  const showCards = document.querySelector('.showup__content-card'),
        showBtnPrev = document.querySelector('.slick-prev.showup__btn'),
        showBtnNext = document.querySelector('.slick-next.showup__btn');
        

  showBtnNext.addEventListener('click', () => {
      let activeCard = showCards.querySelector('.card-active');
      let div = document.createElement('div');
      div = activeCard;
      
      showCards.children[0].remove();
      showCards.appendChild(div);
      div.classList.remove('card-active');
      showCards.children[0].classList.add('card-active'); 
  });
  showBtnPrev.addEventListener('click', () => {
    let activeCard = showCards.querySelector('.card-active');
      let div = document.createElement('div');
      div = showCards.lastElementChild;

      activeCard.classList.remove('card-active');
      showCards.insertBefore(div, showCards.children[0]);
      showCards.children[0].classList.add('card-active');
  });
};

module.exports = showUpSlider;