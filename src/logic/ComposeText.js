export function getTextClasses(strLength, intentions) {
  if (intentions === null || intentions === undefined || !areValidIntentions(strLength, intentions))
    return [{classes: 'normal', start: 0, end: strLength}];

  return composeFormatting(strLength, transformIntentions(strLength, intentions));
}

function transformIntentions(strLength, intentions) {
  var iterableIntentions = [{kind: 'normal', index: 0, start: true}, {kind: 'normal', index: strLength, start: false}];
  intentions.forEach((intention) => {
    iterableIntentions.push({
      kind: intention.kind,
      index: intention.index,
      start: true
    });
    iterableIntentions.push({
      kind: intention.kind,
      index: intention.index + intention.length,
      start: false
    });
  });

  return iterableIntentions.sort((first, second) => first.index - second.index);
}

function areValidIntentions(strLength, intentions) {
  return noIndexBelowZero(intentions) && noIndexBeyondStrLength(strLength, intentions)
}

function noIndexBeyondStrLength(strLength, intentions) {
  return Math.max.apply(intentions.map( (intention) => intention.index + intention.length)) <= strLength;
}

function noIndexBelowZero(intentions) {
  return intentions.filter((intention) => intention.index < 0).length === 0;
}

function composeFormatting(strLength, intentions) {
  var result = [];
  var currentClasses = new Set();
  var lastStartIndex = -1;
  var first = true;
  intentions.forEach((intention) => {
    if (intention.start) {
      if (!first && lastStartIndex !== intention.index) {
        result.push(getFormatting(currentClasses, lastStartIndex, intention.index));
      }
      lastStartIndex = intention.index;
      currentClasses.add(intention.kind);
      first = false;
    }
    else {
      result.push(getFormatting(currentClasses, lastStartIndex, intention.index));
      currentClasses.delete(intention.kind);
      lastStartIndex = intention.index;
    }
  });

  console.log(JSON.stringify(result));
  return result;
}

function getFormatting(currentClasses, start, end) {
  return {classes: Array.from(currentClasses).join(' '), start: start, end: end};
}
