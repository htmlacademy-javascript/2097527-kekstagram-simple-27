const increaseScale = document.querySelector('.scale__control--bigger');
const decreaseScale = document.querySelector('.scale__control--smaller');
const scaleValue = document.querySelector('.scale__control--value');
const previewImgBlock = document.querySelector('.img-upload__preview');

increaseScale.addEventListener('click', ()=>{
  if (Number(scaleValue.value.replace(/\D+/g,'')) < 100)
  {
    const increasedValue = Number(scaleValue.value.replace(/\D+/g,'')) + 25;
    scaleValue.value = `${increasedValue}%`;
    previewImgBlock.style.transform = `scale(${increasedValue / 100})`;
  }
});

decreaseScale.addEventListener('click', ()=>{
  if (Number(scaleValue.value.replace(/\D+/g,'')) > 25)
  {
    const decreasedValue = Number(scaleValue.value.replace(/\D+/g,'')) - 25;
    scaleValue.value = `${decreasedValue}%`;
    previewImgBlock.style.transform = `scale(${decreasedValue / 100})`;
  }
});
