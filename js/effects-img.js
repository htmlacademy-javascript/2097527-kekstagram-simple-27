const fieldsetEffects = document.querySelector('.img-upload__effects');
const previewImgBlock = document.querySelector('.img-upload__preview');
let boof = '';

const effects = {
  'effect-none' : 'none',
  'effect-chrome' : 'chrome',
  'effect-sepia' : 'sepia',
  'effect-marvin' : 'marvin',
  'effect-phobos' : 'phobos',
  'effect-heat' : 'heat'
};

function onEffectChange(evt) {
  previewImgBlock.classList.remove(`effects__preview--${boof}`);
  if (evt.target.matches('input[type="radio"]')) {
    previewImgBlock.classList.add(`effects__preview--${effects[evt.target.id]}`);
    boof = effects[evt.target.id];
  }
}

fieldsetEffects.addEventListener('change', onEffectChange);
