const clickToShow = () => {
  const officeroldData = {
    1 : { 'class' : 'officer__card-item',
          'elem' : { 1 : { 'class' : 'card__counter',
                           'descr' : '01' },
                     2 : { 'class' : 'card__descr',
                           'descr' : 'First step with some text and explanation' } } },
    2 : { 'class' : 'officer__card-item',
          'elem' : { 1 : { 'class' : 'card__counter',
                           'descr' : '02' },
                     2 : { 'class' : 'card__descr',
                           'descr' : 'Second step with some text and explanation' } } },
    3 : { 'class' : 'officer__card-item',
          'elem' : { 1 : { 'class' : 'card__counter',
                           'descr' : '03', },
                     2 : { 'class' : 'card__descr',
                           'descr' : 'Third step with some text and explanation' } } } },
  officernewData = {
    1 : { 'class' : 'officer__card-item',
          'elem' : { 1 : { 'class' : 'card__counter',
                           'descr' : '01' },
                     2 : { 'class' : 'card__descr',
                           'descr' : 'First new step with some text and explanation' } } },
    2 : { 'class' : 'officer__card-item',
          'elem' : { 1 : { 'class' : 'card__counter',
                           'descr' : '02' },
                     2 : { 'class' : 'card__descr',
                           'descr' : 'Second new step with some text and explanation' } } },
    3 : { 'class' : 'officer__card-item',
          'elem' : { 1 : { 'class' : 'card__counter',
                           'descr' : '03', },
                     2 : { 'class' : 'card__descr',
                           'descr' : 'Third new step with some text and explanation' } } } };
  const officerOld = document.querySelector('.officerold'),
        officerNew = document.querySelector('.officernew'),
        infoCards = document.querySelector('.difference__info-cards');
  
  infoCards.addEventListener('click', event => {
    let target = event.target;
    if ((target.classList.contains('plus__content') || target.closest('.plus__content')) && target.closest('.officerold')) {
      addCard(officeroldData, officerOld);
    }
    if ((target.classList.contains('plus__content') || target.closest('.plus__content')) && target.closest('.officernew')) {
      addCard(officernewData, officerNew);
    }
  });

  const addCard = (data, officer) => {
    let int = officer.children.length - 1;
    if (int < 3) {
    let div = document.createElement('div');
    div.classList.add(data[1].class);
    div.innerHTML = `<div class="${data[int].elem[1].class}">${data[int].elem[1].descr}</div><div class="${data[int].elem[2].class}">${data[int].elem[2].descr}</div>`;
    officer.insertBefore(div, officer.lastElementChild);      
    } else {
      officer.lastElementChild.innerHTML = `<div class="${data[int].elem[1].class}">${data[int].elem[1].descr}</div><div class="${data[int].elem[2].class}">${data[int].elem[2].descr}</div>`;
    }

  };


};

module.exports = clickToShow;