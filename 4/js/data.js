import {getRandomArrayElement, getRandomInteger} from './util';

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

export {getPhoto};
