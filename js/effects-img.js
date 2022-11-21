const fieldsetEffects = document.querySelector('.img-upload__effects');
const previewImgBlock = document.querySelector('.img-upload__preview');
let previousEffect = '';

const effects = {
  'effect-none' : 'none',
  'effect-chrome' : 'chrome',
  'effect-sepia' : 'sepia',
  'effect-marvin' : 'marvin',
  'effect-phobos' : 'phobos',
  'effect-heat' : 'heat',
};

const onEffectChange = (evt) => {
  previewImgBlock.classList.remove(`effects__preview--${previousEffect}`);
  if (evt.target.matches('input[type="radio"]')) {
    previewImgBlock.classList.add(`effects__preview--${effects[evt.target.id]}`);
    previousEffect = effects[evt.target.id];
  }
};

fieldsetEffects.addEventListener('change', onEffectChange);
