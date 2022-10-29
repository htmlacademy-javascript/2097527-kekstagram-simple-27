import { getPhoto } from './data.js';

const userPhotos = document.querySelector('.pictures__title');
userPhotos.classList.remove('visually-hidden');

const picturesList = document.querySelector('.pictures');
const picturesGenTemplate = document.querySelector('#picture').content.querySelector('.picture');

const picturesGen = getPhoto();

const picturesListFragment = document.createDocumentFragment();

picturesGen.forEach(({url, comments, likes}) => {
  const picturesItem = picturesGenTemplate.cloneNode(true);
  picturesItem.querySelector('.picture__img').src = url;
  picturesItem.querySelector('.picture__likes').textContent = likes;
  picturesItem.querySelector('.picture__comments').textContent = comments;
  picturesListFragment.appendChild(picturesItem);
});

picturesList.appendChild(picturesListFragment);
