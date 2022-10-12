function randomInteger(min, max) {
  if (min >= 0 && max >= 0) {
    if (min > max) {
      [min,max] = [max,min];
    }
    const RAND = min + Math.random() * (max + 1 - min);
    return Math.floor(RAND);
  }
  return NaN;
}
randomInteger(1, 10);

const inputComment = '32131';
function lengthComment(comment,maxLength) {
  if (comment.length <= maxLength && typeof inputComment === 'string') {
    return true;
  }
  return false;
}
lengthComment (inputComment, 120);
