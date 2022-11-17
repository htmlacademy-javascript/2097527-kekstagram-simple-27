import {showAlert} from './utils.js';

const getData = (onSuccess) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => response.json())
    .then((photos) => {
      onSuccess(photos);
    })
    .catch(() => {
      showAlert('Не удалось получить данные с сервера. Попробуйте перезагрузить страницу');
    });
};

export {getData};
