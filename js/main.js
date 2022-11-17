import {renderUsersPhoto} from './generate-img.js';
import {setUserFormSubmit, closePhotoForm} from './open-close-form.js';
import './scale-img.js';
import './effects-img.js';
import './effects-img-slider.js';
import {getData} from './api.js';

getData((photos) => {
  renderUsersPhoto(photos);
});

setUserFormSubmit(closePhotoForm);
