import {getRandomArrayElement, getRandomInteger} from './utils.js';
import {LIKES_COUNT_MIN, LIKES_COUNT_MAX, COMMENTS_COUNT_MIN, COMMENTS_COUNT_MAX, PHOTO_COUNT, DESCRIPTIONS} from './constants.js';

const createPhoto = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger (LIKES_COUNT_MIN, LIKES_COUNT_MAX),
  comments: getRandomInteger (COMMENTS_COUNT_MIN,COMMENTS_COUNT_MAX),
});

const getPhoto = () => Array.from({ length: PHOTO_COUNT }, (_, photoIndex) => createPhoto(photoIndex + 1));

export {getPhoto};
