import React from 'react';
import Text from './article/content/Text';
import {test1} from './communication/MockData';

export default class Test1 extends React.Component {
  render() {
    return (
      <Text text={test1.text} intentions={test1.intentions}/>
    );
  }
}
