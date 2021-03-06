const showVideo = () => {

  const modules = document.querySelectorAll('.module__video-item');

  for (let i = 0; i < modules.length; i++) {
    modules[i].addEventListener('click', event => {

      if (event.target.classList.contains('play__circle') &&
        !event.target.classList.contains('closed') && modules[i + 1] &&
        modules[i + 1].querySelector('.closed')) {
        
        document.querySelector('.close').addEventListener('click', () => {
          if (modules[i + 1].querySelector('.closed')) {
            let cont = event.target.parentElement.innerHTML;
            modules[i + 1].querySelector('.play').innerHTML = cont;
            modules[i + 1].style.cssText = 'filter: none; -webkit-filter: none; opacity: 1';
          }
        });
      }
    });
  }
};

module.exports = showVideo;