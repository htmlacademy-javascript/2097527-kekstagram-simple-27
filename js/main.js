function randomInteger(min, max) {
  if (min >= 0 && max >= 0) {
    if (min > max) {
      [min,max] = [max,min];
    }
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  return (0 / 0);
}
randomInteger(1, 10);

function lengthComment(comment,maxLength) {
  if (comment.length <= maxLength) {
    return true;
  }
  return false;
}
lengthComment ('sjnfjsnfsef', 120);
