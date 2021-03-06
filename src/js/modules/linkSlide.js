const linkSlide = () => {
  const itemsSlide = document.querySelector('.showup__content-slider'),
        plus = document.querySelector('.plus');

  itemsSlide.addEventListener('click', event => {
    let target = event.target;
    if (target.classList.contains('card') || target.closest('.card')) {
      let card;
      target.classList.contains('card') ? card = target : card = target.closest('.card');
      card.href = `http://insane/modules.html#${card.classList[1].replace('card__', '')}`;
    }
  });
  plus.addEventListener('click', () => {
    window.location.href = 'http://insane/modules.html#1';
  });

};

module.exports = linkSlide;