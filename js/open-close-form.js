import {sendData} from './api.js';
import {getSuccessMessage, getErrorMessage} from './messages.js';

const photoForm = document.querySelector('.img-upload__overlay');
const closePhotoFormBtn = document.querySelector('#upload-cancel');
const body = document.querySelector('body');
const uploadPhotoForm = document.querySelector('#upload-file');
const commentText = document.querySelector('.text__description');
const scaleInput = document.querySelector('.scale__control--value');
const effectInputNone = document.querySelector('#effect-none');
const previewImgBlock = document.querySelector('.img-upload__preview');
const sliderElement = document.querySelector('.effect-level__slider');
const form = document.querySelector('.img-upload__form');
const submitButton = document.querySelector('.img-upload__submit');

const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__text-error',
}, false);

const onPopupEscKeydown = (evt) => {
  if (evt.key === 'Escape' && !(document.querySelector('.error'))) {
    evt.preventDefault();
    closePhotoForm();
  }
};

const openPhotoForm = () => {
  photoForm.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
};

const setDefaultForm = () => {
  uploadPhotoForm.value = '';
  commentText.value = '';
  scaleInput.value = '100%';

  if (!effectInputNone.checked) {
    effectInputNone.checked = true;
  }
};

const setDefaultEffects = () => {
  previewImgBlock.style.filter = 'none';
  sliderElement.classList.add('visually-hidden');
};

function closePhotoForm () {
  photoForm.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
  setDefaultForm();
  setDefaultEffects();
}

uploadPhotoForm.addEventListener('change', () => {
  openPhotoForm();
});

closePhotoFormBtn.addEventListener('click', closePhotoForm);

const blockSubmitButton = () => {
  submitButton.disabled = true;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
};

const setUserFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(
        () => {
          onSuccess();
          unblockSubmitButton();
          getSuccessMessage();
        },
        () => {
          getErrorMessage();
          unblockSubmitButton();
        },
        new FormData(evt.target),
      );
    }
  });
};

export {setUserFormSubmit, closePhotoForm};
