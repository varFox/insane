const showUpSlider = (cards, prev, next) => {

  const showCards = document.querySelector(cards),
    showBtnPrev = document.querySelector(prev),
    showBtnNext = document.querySelector(next);


  showBtnNext.addEventListener('click', () => {
    nextSlide();
  });
  showBtnPrev.addEventListener('click', () => {
    let activeCard = showCards.querySelector('.card-active');
    let div = document.createElement('div');
    div = showCards.lastElementChild;

    activeCard.classList.remove('card-active');
    showCards.insertBefore(div, showCards.children[0]);
    showCards.children[0].classList.add('card-active');
  });

  const nextSlide = () => {
    let activeCard = showCards.querySelector('.card-active');
    let div = document.createElement('div');
    div = activeCard;

    showCards.children[0].remove();
    showCards.appendChild(div);
    div.classList.remove('card-active');
    showCards.children[0].classList.add('card-active');
  };

  const timer = setInterval(() => {
    nextSlide();
  }, 4000);
};

module.exports = showUpSlider;