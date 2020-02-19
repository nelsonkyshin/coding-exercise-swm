import React from 'react';
import Text from './content/Text';
import {test1} from '../service/MockData';

export default class Test1 extends React.Component {
  render() {
    return (
      <Text text={test1.text} intentions={test1.intentions}/>
    );
  }
}
