function getRandomInteger(min, max) {
  if (min >= 0 && max >= 0) {
    if (min > max) {
      [min,max] = [max,min];
    }
    const RAND = min + Math.random() * (max + 1 - min);
    return Math.floor(RAND);
  }
  return NaN;
}

function lengthComment(comment,maxLength) {
  if (comment.length <= maxLength && typeof inputComment === 'string') {
    return true;
  }
  return false;
}

const getRandomArrayElement = function(array) {
  return array[getRandomInteger(0, array.length - 1)];
};

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

export {getRandomArrayElement, getRandomInteger, lengthComment, showAlert};
