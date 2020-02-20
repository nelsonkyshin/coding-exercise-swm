import React from 'react';
import Text from './content/Text';
import {data1} from '../service/MockData';

export default function Exercise1() {
  return (
    <div className='exercise'>
      <Text text={data1.text} intentions={data1.intentions}/>
    </div>
  );
}
