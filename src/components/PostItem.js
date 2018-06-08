// PostItem.js
import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import user from '../image/user/user_1.jpg';
import image from '../image/user/image_1.jpg';

class PostItem extends Component {
  static propTypes = {
    classPrefix: PropTypes.string,
  };

  static defaultProps = {
    classPrefix: 'music-points-platform-friendship-postitem',
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { classPrefix } = this.props;
    const cxAvatar = `${classPrefix}-avatar`;
    const cxContent = `${classPrefix}-content`;
    const cxInfo = `${cxContent}-info`;
    const cxFocus = `${cxContent}-focus`;
    const cxText = `${cxContent}-text`;
    const cxImage = `${cxContent}-image`;

    return (
      <div className={classPrefix}>
        <img className={cxAvatar} src={user} />
        <div className={cxContent}>
          <div className={cxInfo}>
            <div className={cxText}>惊奇队长<p>6月5日</p></div>
            <div className={cxFocus}>关注</div>
          </div>
          <div className={cxText}>123123123123123123123123123123123123123123123123123123123123</div>
          <img className={cxImage} src={image} />
        </div>
      </div>
    );
  }

}

export default PostItem;
