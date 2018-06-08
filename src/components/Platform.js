// Platform.js
import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import Recommend from './Recommend'
import Friendship from './Friendship'

class Platform extends Component {
  static propTypes = {
    classPrefix: PropTypes.string,
    platformIndex: PropTypes.number,
  };

  static defaultProps = {
    classPrefix: 'music-points-platform',
    platformIndex: 0,
  };

  constructor(props) {
    super(props);
  }

  getPlatformHeader() {
    const { classPrefix } = this.props;
    const cxHeader = `${classPrefix}-header`;

    let style = [null, null, null];
    style[this.props.platformIndex] = {
      "color": "#c20c0c",
      "font-weight": "bold",
      "height": "20px",
      "border-bottom": "2px solid #c20c0c"
    };

    return (
      <div className={cxHeader}>
        <div style={style[0]} onClick={() => this.props.platformIndexChange(0)}>推荐</div>
        <div style={style[1]} onClick={() => this.props.platformIndexChange(1)}>朋友</div>
        <div style={style[2]} onClick={() => this.props.platformIndexChange(2)}>电台</div>
      </div>
    );
  }

  render() {
    const { classPrefix } = this.props;
    const cxMain = `${classPrefix}-containers`;

    const leftValue = -1 * window.screen.width * this.props.platformIndex;
    const style = {
      left: leftValue,
    }

    return (
      <li className={classPrefix} >
        {this.getPlatformHeader()}
        <div className={cxMain}>
          <ul style={style}>
            <Recommend />
            <Friendship />
          </ul>
        </div>
      </li>
    );
  }
}

export default Platform;