const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const body = document.querySelector('body');

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);
};

const getSuccessMessage = () => {
  const sucessMessageFragment = document.createDocumentFragment();
  const successMessageItem = successMessageTemplate.cloneNode(true);
  sucessMessageFragment.appendChild(successMessageItem);
  body.appendChild(sucessMessageFragment);

  document.addEventListener('keydown', onSuccesMesEscKeydown);
  document.querySelector('.success__button').addEventListener('click', closeSuccessMesOnBtn);

  document.querySelector('.success').addEventListener('click', (evt) => {
    if (evt.target.className !== 'success__inner') {
      successMessageItem.remove();
      document.removeEventListener('keydown', onSuccesMesEscKeydown);
    }
  });

  function onSuccesMesEscKeydown (evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      successMessageItem.remove();
      document.removeEventListener('keydown', onSuccesMesEscKeydown);
    }
  }

  function closeSuccessMesOnBtn () {
    successMessageItem.remove();
    document.removeEventListener('keydown', onSuccesMesEscKeydown);
  }
};

export {showAlert, getSuccessMessage};
