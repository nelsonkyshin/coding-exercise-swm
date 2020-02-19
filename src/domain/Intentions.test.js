import React from 'react';
import {noIndexBelowZero, noIndexBeyondStrLength, areValidIntentions} from './Intentions';

test('intentionIndexEqualTo0_callNoIndexBelowZero_true', () => {
  const intentions = [{kind: '', index: 0, length: 10}];
  expect(noIndexBelowZero(intentions)).toBe(true);
});

test('intentionIndexLessThan0_callNoIndexBelowZero_false', () => {
  const intentions = [{kind: '', index: -1, length: 10}];
  expect(noIndexBelowZero(intentions)).toBe(false);
});

test('intentionIndexGreaterThanStrLen_callNoIndexBeyondStrLength_false', () => {
  const intentions = [{kind: '', index: 0, length: 10}];
  const strLength = 1;
  expect(noIndexBeyondStrLength(strLength, intentions)).toBe(false);
});

test('intentionIndexLessThanStrLen_callNoIndexBeyondStrLength_true', () => {
  const intentions = [{kind: '', index: 0, length: 10}];
  const strLength = 10;
  expect(noIndexBeyondStrLength(strLength, intentions)).toBe(true);
});

test('validIntentions_callAreValidIntentions_true', () => {
  const intentions = [{kind: '', index: 0, length: 10}, {kind: 'blah', index: 5, length: 20}];
  const strLength = 50;
  expect(areValidIntentions(strLength, intentions)).toBe(true);
});

test('emptyIntentions_callAreValidIntentions_true', () => {
  const intentions = [];
  const strLength = 1;
  expect(areValidIntentions(strLength, intentions)).toBe(true);
});

test('invalidIntentions_callAreValidIntentions_false', () => {
  const intentions = [{kind: '', index: -5, length: 10}, {kind: 'blah', index: 5, length: 20}];
  const strLength = 1;
  expect(areValidIntentions(strLength, intentions)).toBe(false);
});

test('intentionsNull_callAreValidIntentions_false', () => {
  const intentions = null;
  const strLength = 1;
  expect(areValidIntentions(strLength, intentions)).toBe(false);
});

test('intentionsUndefined_callAreValidIntentions_false', () => {
  const intentions = undefined;
  const strLength = 1;
  expect(areValidIntentions(strLength, intentions)).toBe(false);
});
