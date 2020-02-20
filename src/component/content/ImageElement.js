import React from 'react';
import PropTypes from 'prop-types';

export default class ImageElement extends React.Component {
  constructor(props) {
    super(props);

    this.state = {loaded: false};
  }

  render() {
    return (
        <div className='image-container' loaded={this.state.loaded.toString()}>
          <img src={this.props.src} alt={this.props.alt} onLoad={this.imageLoaded.bind(this)}></img>
        </div>
      );
  }

  imageLoaded() {
    this.setState({loaded: true});
  }
}

Image.propTypes = {
  url: PropTypes.string,
  captionText: PropTypes.string
}
