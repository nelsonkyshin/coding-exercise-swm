import React from 'react';
import Headline from './headline/Headline';
import Content from './content/Content';
import {test2} from '../service/MockData';

export default class Article extends React.Component {
  render() {
    return (
      <div className='article'>
        <Headline title={test2.headline} source={test2.source} publicationDate={test2.publicationDate} />
        <Content blocks={test2.blocks} />
      </div>
    );
  }
}
