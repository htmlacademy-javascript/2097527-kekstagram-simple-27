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

const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__text-error',
});

const onPopupEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePhotoForm();
  }
};

function openPhotoForm () {
  photoForm.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
}

function closePhotoForm () {
  photoForm.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
  setDefaultForm();
  setDefaultEffects();
}

function setDefaultForm () {
  uploadPhotoForm.value = '';
  commentText.value = '';
  scaleInput.value = '100%';

  if (!effectInputNone.checked) {
    effectInputNone.checked = true;
  }
}

function setDefaultEffects () {
  previewImgBlock.style.filter = 'none';
  sliderElement.classList.add('visually-hidden');
}

uploadPhotoForm.addEventListener('change', () => {
  openPhotoForm();
});

closePhotoFormBtn.addEventListener('click', closePhotoForm);

const onFormValid = (evt) => {
  const isValid = pristine.validate();
  if (!isValid) {
    evt.preventDefault();
  }
};

form.addEventListener('submit', onFormValid);
