const form = (formName) => {
  const message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Мы с вами свяжемся',
    failure: 'Что-то пошло не так...'
  };

  const form = document.querySelectorAll(formName);


  form.forEach(item => {
    const input = item.querySelectorAll('input'),
      messageDiv = item.querySelector('.block_message');

    item.addEventListener('submit', (event) => {
      event.preventDefault();

      let formData = new FormData(item);
      let request = new XMLHttpRequest();
      request.open('POST', 'server.php');
      request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
      request.onreadystatechange = function () {
        if (request.readyState < 4) {
          messageDiv.textContent = message.loading;
        } else if (request.readyState === 4) {
          if (request.status == 200) {
            messageDiv.textContent = message.success;
            clearInput();
          } else {
            messageDiv.textContent = message.failure;
          }
        }
      }
      let jsonObject = {};

      for (let [key, value] of formData.entries()) {
        jsonObject[key] = value;
      }
      if (item.querySelector('select')) jsonObject[item.querySelector('select').id] = item.querySelector('select').value;
      request.send(JSON.stringify(jsonObject));


      const clearInput = () => {
        for (let i = 0; i < input.length; i++) {
          input[i].value = '';
        }
      }


    });
  });


};

module.exports = form;