const sliderElement = document.querySelector('.effect-level__slider');
const sliderValue = document.querySelector('.effect-level__value');
const previewImgBlock = document.querySelector('.img-upload__preview');
const fieldsetEffects = document.querySelector('.img-upload__effects');

sliderElement.classList.add('visually-hidden');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 10,
  step: 0.1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

fieldsetEffects.addEventListener('change', (evt) => {
  switch(evt.target.id) {
    case 'effect-none' :
      sliderElement.classList.add('visually-hidden');
      if (previewImgBlock.classList.contains('effects__preview--none')) {
        previewImgBlock.style.filter = 'none';
      }
      break;
    case 'effect-chrome' :
    case 'effect-sepia' :
      sliderElement.classList.remove('visually-hidden');
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start: 1,
        step: 0.1,
      });
      break;
    case 'effect-marvin' :
      sliderElement.classList.remove('visually-hidden');
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 100,
        },
        start: 100,
        step: 1,
      });
      break;
    case 'effect-phobos' :
      sliderElement.classList.remove('visually-hidden');
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3,
        },
        start: 3,
        step: 0.1,
      });
      break;
    case 'effect-heat' :
      sliderElement.classList.remove('visually-hidden');
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 1,
          max: 3,
        },
        start: 3,
        step: 0.1,
      });
      break;
  }
});

sliderElement.noUiSlider.on('update', () => {
  sliderValue.value = sliderElement.noUiSlider.get();
  if (previewImgBlock.classList.contains('effects__preview--chrome')) {
    previewImgBlock.style.filter = `grayscale(${sliderValue.value})`;
  }
  if (previewImgBlock.classList.contains('effects__preview--sepia')) {
    previewImgBlock.style.filter = `sepia(${sliderValue.value})`;
  }
  if (previewImgBlock.classList.contains('effects__preview--marvin')) {
    previewImgBlock.style.filter = `invert(${sliderValue.value}%)`;
  }
  if (previewImgBlock.classList.contains('effects__preview--phobos')) {
    previewImgBlock.style.filter = `blur(${sliderValue.value}px)`;
  }
  if (previewImgBlock.classList.contains('effects__preview--heat')) {
    previewImgBlock.style.filter = `brightness(${sliderValue.value})`;
  }
});
