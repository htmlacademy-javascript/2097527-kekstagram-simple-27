const increaseScale = document.querySelector('.scale__control--bigger');
const decreaseScale = document.querySelector('.scale__control--smaller');
const scaleValue = document.querySelector('.scale__control--value');
const previewImgBlock = document.querySelector('.img-upload__preview');
const MAX_SCALE_VALUE = 100;
const MIN_SCALE_VALUE = 25;
const STEP_SCALE_VALUE = 25;

increaseScale.addEventListener('click', ()=>{
  const currentValue = Number(scaleValue.value.replace(/\D+/g,''));
  if (currentValue < MAX_SCALE_VALUE)
  {
    const increasedValue = Number(scaleValue.value.replace(/\D+/g,'')) + STEP_SCALE_VALUE;
    scaleValue.value = `${increasedValue}%`;
    previewImgBlock.style.transform = `scale(${increasedValue / 100})`;
  }
});

decreaseScale.addEventListener('click', ()=>{
  const currentValue = Number(scaleValue.value.replace(/\D+/g,''));
  if (currentValue > MIN_SCALE_VALUE)
  {
    const decreasedValue = Number(scaleValue.value.replace(/\D+/g,'')) - STEP_SCALE_VALUE;
    scaleValue.value = `${decreasedValue}%`;
    previewImgBlock.style.transform = `scale(${decreasedValue / 100})`;
  }
});
