import * as ComposeText from './ComposeText';

test('unsortedFormatting_sortFormatting_sortedFormatting', () => {
  const unsorted = [
    {kind: 'zip', index: 15, start: true},
    {kind: 'zip', index: 20, start: false},
    {kind: 'zop', index: 1, start: true},
    {kind: 'zop', index: 10, start: false}];
  const sorted = ComposeText.sortFormatting(unsorted);
  [1, 10, 15, 20].forEach((expectedIndex, i) => {
    expect(sorted[i].index).toBe(expectedIndex);
  });
});

test('invalidIntentions_getTextClasses_defaultTextClasses', () => {
  const intentions = [{kind: 'blah', index: -1, length: 2}];
  const strLength = 5;
  const expected = [{classes: 'normal', start: 0, end: 5}];
  expect(ComposeText.getTextClasses(strLength, intentions)).toMatchObject(expected);
});

test('intentions_intentionToFormatting_formatting', () => {
  const intentions = [{kind: 'blah', index: 5, length: 3}];
  const strLength = 10;
  const expected = [
    {kind: 'normal', index: 0, start: true},
    {kind: 'normal', index: 10, start: false},
    {kind: 'blah', index: 5, start: true},
    {kind: 'blah', index: 8, start: false}
  ];
  expect(ComposeText.intentionToFormatting(strLength, intentions)).toMatchObject(expected);
});

test('classes_getTextClass_objectWithClasses', () => {
  const [class1, class2] = ['blah', 'blip'];
  const classes = new Set([class1, class2]);
  const start = 0;
  const end = 10;
  const result = ComposeText.getTextClass(classes, start, end)
  expect(result.classes).toContain(class1);
  expect(result.classes).toContain(class2);
  expect(result.start).toBe(start);
  expect(result.end).toBe(end);
});
