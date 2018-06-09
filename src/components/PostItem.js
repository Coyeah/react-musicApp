// PostItem.js
import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import postList from '../constants/postList';

import like from '../image/platform/friendship/icon/like.png';
import comment from '../image/platform/friendship/icon/comment.png';
import share from '../image/platform/friendship/icon/share.png';
import more from '../image/platform/friendship/icon/more.png';

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
    const { classPrefix, info } = this.props;
    const cxAvatar = `${classPrefix}-avatar`;
    const cxContent = `${classPrefix}-content`;

    const cxInfo = `${cxContent}-info`;
    const cxFocus = `${cxContent}-focus`;
    const cxText = `${cxContent}-text`;
    const cxImage = `${cxContent}-image`;

    const cxSocial = `${cxContent}-social`;

    return (
      <div className={classPrefix}>
        <img className={cxAvatar} src={info.avatar} />
        <div className={cxContent}>
          <div className={cxInfo}>
            <div className={cxText}>{info.name}<p>{info.time}</p></div>
            <div className={cxFocus}>关注</div>
          </div>
          <div className={cxText}>{info.content}</div>
          <img className={cxImage} src={info.image} />
          <div className={cxSocial}>
             <div><img src={like} /><span>{info.like}</span></div>
             <div><img src={comment} /><span>{info.comment}</span></div>
             <div><img src={share} /><span>{info.share}</span></div>
             <div><img src={more} /></div>
          </div>
        </div>
      </div>
    );
  }

}

export default PostItem;
