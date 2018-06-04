// Recommend.js
import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import SlideShow from './SlideShow';

import { recommendPoster } from '../constants/posterList';

class Recommend extends Component {
  static propTypes = {
    classPrefix: PropTypes.string,
  };

  static defaultProps = {
    classPrefix: 'music-points-platform-recommend',
  };

  constructor(props) {
    super(props);
  }

  getImageList() {
    return (
      recommendPoster.map((value, index) => {
        return ( value.image );
      })
    );
  }

  render() {
    const { classPrefix } = this.props;

    return (
      <li className={classPrefix} >
        <SlideShow>
          {this.getImageList()}
        </SlideShow>
      </li>
    );
  }
}

export default Recommend;