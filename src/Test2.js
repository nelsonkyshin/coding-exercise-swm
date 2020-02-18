import React from 'react';
import Article from './article/Article';
import {test2} from './communication/MockData';

export default class Test1 extends React.Component {
  render() {
    return (
      <Article class='article' article={test2} />
    );
  }
}
