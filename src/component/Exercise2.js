import React from 'react';
import Article from './Article';
import {data2} from '../service/MockData';

export default function Exercise2() {
  return (
    <div className='exercise'>
      <Article article={data2} />
    </div>
  );
}
