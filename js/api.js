import {showAlert} from './messages.js';
const failFormMessage = 'Не удалось отправить форму. Попробуйте ещё раз';
const failGetDataMessage = 'Не удалось получить данные с сервера. Попробуйте перезагрузить страницу';
const UrlGetData = 'https://27.javascript.pages.academy/kekstagram-simple/data';
const UrlSendData = 'https://27.javascript.pages.academy/kekstagram-simple';

const getData = (onSuccess) => {
  fetch(UrlGetData)
    .then((response) => response.json())
    .then((photos) => {
      onSuccess(photos);
    })
    .catch(() => {
      showAlert(failGetDataMessage);
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    UrlSendData,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail(failFormMessage);
      }
    })
    .catch(() => {
      onFail(failFormMessage);
    });
};

export {getData};
export {sendData};
