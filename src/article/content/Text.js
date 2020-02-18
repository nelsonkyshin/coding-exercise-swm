import React from 'react';
import {getTextClasses} from '../../logic/ComposeText';

export default class Text extends React.Component {
  render() {
    return (
      <div className='text'>
        {composeText(this.props.text, getTextClasses(this.props.text.length, this.props.intentions))}
      </div>
    );
  }
}

function composeText(text, formattingData) {
  return formattingData.map( (data, index) => <span className={data.classes} key={index}>{text.substring(data.start, data.end)}</span>);
}
