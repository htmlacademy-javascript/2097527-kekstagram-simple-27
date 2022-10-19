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

export {getRandomArrayElement, getRandomInteger, lengthComment};
