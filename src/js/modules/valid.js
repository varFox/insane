const valid = () => {

  //number --------------------------
  const number = document.querySelector('#phone');
  let pos = 0;
  number.addEventListener('keydown', (e) => {
      validNumber(e, number, pos);
    });
    number.addEventListener('focus', () => {
      if (pos == 0) {
        number.value = '+1 (';
        pos = 3;
      }
    });
    number.addEventListener('blur', () => {
      if (number.value.slice(-1) == '(') {
        number.value = '';
        pos = 0;
      }
    });
  const validNumber = (e, input, pos) => {
    pos = input.value.length;
    e.preventDefault();
    if (e.key.match(/[0-9]/) && pos < 17 && (pos == '12' || pos == '8')) {
      input.value += ' ' + e.key;
      pos = input.value.length;
    } else if (e.key.match(/[0-9]/) && pos < 17) {
      input.value += e.key;
      pos = input.value.length;
      if (pos == '7') {
        input.value += ') ';
      } else if (pos == '12' || pos == '13') {
        input.value += ' ';
      }
      pos = input.value.length;
    }
    if (e.key == 'Backspace') {
      if (pos == '10' || pos == '14' || pos == '8') {
        input.value = input.value.substring(0, pos - 2);
      } else if (pos > 4) {
        input.value = input.value.substring(0, pos - 1);
      }
      pos = input.value.length;
    }
    return pos;
  };
  //endNumber ----------------

  // email
  const email = document.querySelectorAll('.email');

  email.forEach(item => {
    item.addEventListener('input', () => {
        item.value = item.value.replace(/[а-я]/gi, '');
    });
  });

  // date

  const date = document.querySelector('#when');

  date.addEventListener('input', () => {
      date.value = date.value.replace(/[^./\d]/, '');    
  });
}

module.exports = valid;