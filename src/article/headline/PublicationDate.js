import React from 'react';

export default class PublicationDate extends React.Component {
  render() {
    return (
      <span className='publicationDate'>published {new Date(this.props.publicationDate).toLocaleDateString()}</span>
    );
  }
}
