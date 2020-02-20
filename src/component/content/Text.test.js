import React from 'react';
import Text from './Text';
import {render, unmountComponentAtNode} from 'react-dom';

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('Invalid intentions renders normal formatting', () => {
  const text = 'hello world';
  const intentions = [{kind: 'blah', index: -1, length: 200}];
  render(<Text text={text} intentions={intentions}/>, container);
  expect(container.querySelector('.normal').textContent).toEqual(text);
})

test('No intentions renders normal formatting', () => {
  const text = 'hello world';
  const intentions = [];
  render(<Text text={text} intentions={intentions}/>, container);
  expect(container.querySelector('.normal').textContent).toEqual(text);
})

test('Intentions renders formatting', () => {
  const text = 'hello world';
  const intentions = [{kind: 'emphasized', index: 0, length: 5}, {kind: 'important', index: 6, length: 5}];
  render(<Text text={text} intentions={intentions}/>, container);
  expect(container.querySelector('.emphasized').textContent).toEqual('hello');
  expect(container.querySelector('.important').textContent).toEqual('world');
})
