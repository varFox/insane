const playVideo = () => {
  const overlay = document.querySelector('.overlay');

  document.body.addEventListener('click', event => {
    let target = event.target;

    if (target.classList.contains('play__circle') && !target.classList.contains('closed')) bindModal('flex', target.parentElement.dataset.url);
    if (target.classList.contains('close')) bindModal('', 'none');
  });

  const bindModal = (display, url) => {
    overlay.style.display = display;
    overlay.querySelector('iframe').src = url;
  };

};

module.exports = playVideo;