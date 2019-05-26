const hayHanson = () => {
  const hanson = document.querySelector('.hanson');

  hanson.style.opacity = '0';
  window.addEventListener('scroll', () => {
    if ((window.pageYOffset + hanson.getBoundingClientRect().bottom) >= window.pageYOffset && 
    (window.pageYOffset + hanson.getBoundingClientRect().top) < (window.pageYOffset + document.documentElement.clientHeight)) {
      setTimeout(() => {
        hanson.style.opacity = '1';
      }, 3000)
    } else {
      hanson.style.opacity = '0';
    }
  });

};

module.exports = hayHanson;