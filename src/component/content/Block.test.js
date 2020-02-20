import React from 'react';
import Block from './Block';
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

jest.mock('./Text', () => {return function() {return <div className='text'/>}});
jest.mock('./Quote', () => {return function() {return <div className='quote'/>}});
jest.mock('./Image', () => {return function() {return <div className='image'/>}});

test('Render no block if block kind not recognised', () => {
  const unrecognisedblock = {kind: 'blah'};
  render(<Block block={unrecognisedblock}/>, container);
  expect(container.querySelector('.block')).toBeNull();
})

test('Render text if block kind is text', () => {
  const block = {kind: 'text'};
  render(<Block block={block}/>, container);
  expect(container.querySelector('.block > .text')).not.toBeNull();
})

test('Render quote if block kind is quote', () => {
  const block = {kind: 'pull-quote'};
  render(<Block block={block}/>, container);
  expect(container.querySelector('.block > .quote')).not.toBeNull();
})

test('Render image if block kind is image', () => {
  const block = {kind: 'image'};
  render(<Block block={block}/>, container);
  expect(container.querySelector('.block > .image')).not.toBeNull();
})
