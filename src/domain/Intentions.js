export function areValidIntentions(strLength, intentions) {
  return intentions !== null && intentions !== undefined &&
    noIndexBelowZero(intentions) && noIndexBeyondStrLength(strLength, intentions)
}

export function noIndexBeyondStrLength(strLength, intentions) {
  return Math.max.apply(Math, intentions.map( (intention) => intention.index + intention.length)) <= strLength;
}

export function noIndexBelowZero(intentions) {
  return intentions.filter((intention) => intention.index < 0).length === 0;
}
