import React from 'react';
import Article from './Article';
import {test2} from '../service/MockData';

export default class Test1 extends React.Component {
  render() {
    return (
      <Article class='article' article={test2} />
    );
  }
}
