import {renderUsersPhoto} from './generate-img.js';
import './open-close-form.js';
import './scale-img.js';
import './effects-img.js';
import './effects-img-slider.js';
import {getData} from './api.js';

getData((photos) => {
  renderUsersPhoto(photos);
});
