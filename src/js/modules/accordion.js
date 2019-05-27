const accordion = () => {

  document.body.addEventListener('click', event => {
    let target = event.target;
    if (target.classList.contains('plus') || target.closest('.plus')) {
      let lorem =  target.closest('.module__info').querySelector('.module__lorem')
      lorem.classList.contains('accordion-show') ? lorem.classList.remove('accordion-show') : lorem.classList.add('accordion-show');
    }
  });

};

module.exports = accordion;