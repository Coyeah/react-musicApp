// SlideShow.js
import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class SlideShow extends Component {
  static propTypes = {
    classPrefix: PropTypes.string
  };

  static defaultProps = {
    classPrefix: "music-points-slideshow",
  };

  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  getImageList() {
    return (
      this.props.children.map((value, index) => {
        return (
          <li><img src={value} /></li>
        );
      })
    );
  }

  render() {
    const { classPrefix } = this.props;

    return (
      <div className={classPrefix}>
        <ul>
          {this.getImageList()}
        </ul>      
      </div>
    );
  }
}

export default SlideShow;