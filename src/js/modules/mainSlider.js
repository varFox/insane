const mainSlider = () => {
  const arrows = document.querySelectorAll('.sidecontrol__controls a'),
        logo = document.querySelector('.sidecontrol a');

  for (let i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener('click', (event) => {
      event.preventDefault();
      (i == arrows.length - 1) ? window.scrollTo(0, 0) : window.scrollTo(0, window.innerHeight * (i + 1));
      
    });
  }

  logo.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo(0, 0);
  });

};

module.exports = mainSlider;