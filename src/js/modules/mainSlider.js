const mainSlider = (home, next, prev) => {
  const arrowsNext = document.querySelectorAll(next),
        logo = document.querySelector(home);

  for (let i = 0; i < arrowsNext.length; i++) {
    arrowsNext[i].addEventListener('click', (event) => {
      event.preventDefault();
      (i == arrowsNext.length - 1) ? window.scrollTo(0, 0) : window.scrollTo(0, window.innerHeight * (i + 1));
      
    });
  }

  logo.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo(0, 0);
  });

  if (prev) {
    const arrowsPrev = document.querySelectorAll(prev);

    for (let i = 0; i < arrowsPrev.length; i++) {
      arrowsPrev[i].addEventListener('click', (event) => {
        event.preventDefault();
        (i == 0) ? window.scrollTo(0, window.innerHeight * (arrowsPrev.length - 1)) : window.scrollTo(0, window.innerHeight * (i - 1));
        
      });
    }
  }
};

module.exports = mainSlider;