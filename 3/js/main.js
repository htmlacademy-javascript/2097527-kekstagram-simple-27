const LIKES_COUNT_MIN = 15;
const LIKES_COUNT_MAX = 200;
const COMMENTS_COUNT_MIN = 0;
const COMMENTS_COUNT_MAX = 200;
const PHOTO_COUNT = 25;

const DESCRIPTIONS = [
  'Это невероятно!',
  'Замечательная работа',
  'Топ',
];

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
const inputComment = '32131';
function lengthComment(comment,maxLength) {
  if (comment.length <= maxLength && typeof inputComment === 'string') {
    return true;
  }
  return false;
}
lengthComment (inputComment, 120);

const getRandomArrayElement = function(array) {
  return array[getRandomInteger(0, array.length - 1)];
};


const createPhoto = function (index) {
  return {
    id: index,
    url: `photos/${index}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInteger (LIKES_COUNT_MIN, LIKES_COUNT_MAX),
    comments: getRandomInteger (COMMENTS_COUNT_MIN,COMMENTS_COUNT_MAX)
  };
};

const getPhoto = function () {
  return Array.from({ length: PHOTO_COUNT }, (_, photoIndex) => createPhoto(photoIndex + 1));
};

getPhoto();
