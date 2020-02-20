import {areValidIntentions} from './Intentions';

export function getTextClasses(strLength, intentions) {
  if (!areValidIntentions(strLength, intentions))
    return [{classes: 'normal', start: 0, end: strLength}];

  return composeFormatting(strLength, intentionsToFormatting(strLength, intentions));
}

export function sortFormatting(formatting) {
  return formatting.sort((first, second) => first.index - second.index);
}

export function intentionsToFormatting(strLength, intentions) {
  var formatting = [{kind: 'normal', index: 0, start: true}, {kind: 'normal', index: strLength, start: false}];
  intentions.forEach((intention) => {
    formatting.push(getStartFormatting(intention));
    formatting.push(getEndFormatting(intention));
  });

  return formatting;
}

export function getStartFormatting(intention) {
  return {kind: intention.kind, index: intention.index, start: true};
}

export function getEndFormatting(intention) {
  return {kind: intention.kind, index: intention.index + intention.length, start: false};
}

export function composeFormatting(strLength, formatting) {
  var result = [];
  var currentClasses = new Set();
  var lastStartIndex = -1;
  var first = true;
  sortFormatting(formatting).forEach((intention) => {
    if (intention.start) {
      if (!first && lastStartIndex !== intention.index) {
        result.push(getTextClass(currentClasses, lastStartIndex, intention.index));
      }
      lastStartIndex = intention.index;
      currentClasses.add(intention.kind);
      first = false;
    }
    else {
      result.push(getTextClass(currentClasses, lastStartIndex, intention.index));
      currentClasses.delete(intention.kind);
      lastStartIndex = intention.index;
    }
  });

  return result;
}

export function getTextClass(currentClasses, start, end) {
  return {classes: Array.from(currentClasses).join(' '), start: start, end: end};
}
