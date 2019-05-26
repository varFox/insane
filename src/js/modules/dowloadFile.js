const dowloadFile = () => {
  const download = document.querySelectorAll('.download');

  download.forEach(item => {
    item.addEventListener('click', () => {
      let f = document.createElement('a');
      f.setAttribute('href', '/files/photoshop_kocbyru.pdf');
      f.setAttribute('dowload', 'dowload');
      f.setAttribute('target', '_blank');
      f.click();
    });
  });

};

module.exports = dowloadFile;