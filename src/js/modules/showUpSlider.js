const showUpSlider = (cards, prev, next, classActive, bul, animate) => {

  const showCards = document.querySelector(cards),
    showBtnPrev = document.querySelector(prev),
    showBtnNext = document.querySelector(next);

  showBtnNext.addEventListener('click', () => {
    nextSlide();
  });
  showBtnPrev.addEventListener('click', () => {
    let activeCard = showCards.querySelector(`.${classActive}`);
    let div = document.createElement('div');

    div = showCards.lastElementChild;
    activeCard.classList.remove(classActive);

    showCards.insertBefore(div, showCards.children[0]);
    showCards.children[0].classList.add(classActive);
  });

  const nextSlide = () => {
    let activeCard = showCards.querySelector(`.${classActive}`);
    let div = document.createElement('div');
    div = activeCard;
    if (animate) {
      if (showCards == document.querySelector('.feed__slider-cards')) {
        showCards.children[0].classList.remove('animate');
        showCards.children[1].classList.add('animate');
      }
      
      showCards.children[0].classList.add('out-animate');
      
      showCards.classList.add('show_slide');
      setTimeout(() => {
        showCards.children[0].remove();
        showCards.appendChild(div);
        div.classList.remove(classActive);
        showCards.children[0].classList.add(classActive);
        showCards.lastElementChild.classList.remove('out-animate');
        showCards.classList.remove('show_slide');
      }, 500);

    } else {
      showCards.removeChild(showCards.children[0]);

      // showCards.children[0].remove();
      showCards.appendChild(div);
      div.classList.remove(classActive);
      showCards.children[0].classList.add(classActive);
    }

  };
  if (bul) {
    setInterval(() => {
      nextSlide();
    }, 4000);
  }

};

module.exports = showUpSlider;

