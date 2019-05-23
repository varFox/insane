const showUpSlider = () => {

  const showBtns = document.querySelector('.showup__info-btns'),
        showCards = document.querySelector('.showup__content-card');
        

  showBtns.addEventListener('click', event => {
    let target = event.target;

    if (target.classList.contains('slick-next')) bindSlides();
    if (target.classList.contains('slick-prev')) bindSlides();
  });
  

  const bindSlides = () => {
    let activeCard = showCards.querySelector('.card-active');
    let div = document.createElement('div');
    div = activeCard;
    
    showCards.children[0].remove();
    showCards.appendChild(div);
    div.classList.remove('card-active');
    showCards.children[0].classList.add('card-active');
  } 
};

module.exports = showUpSlider;