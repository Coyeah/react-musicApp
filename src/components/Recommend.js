// Recommend.js
import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import SlideShow from './SlideShow';

import { recommendPoster } from '../constants/posterList';

import insideNav_1 from '../image/platform/remmcond/icon/fm.png';
import insideNav_2 from '../image/platform/remmcond/icon/calendar.png';
import insideNav_3 from '../image/platform/remmcond/icon/list.png';
import insideNav_4 from '../image/platform/remmcond/icon/ranking.png';

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

  getInsideNav() {
    const { classPrefix } = this.props;
    const cxInside = `${classPrefix}-inside`;

    return (
      <div className={cxInside}>
        <div><div><img src={insideNav_1} /></div><p>私人FM</p></div>
        <div><div><img src={insideNav_2} /></div><p>每日推荐</p></div>
        <div><div><img src={insideNav_3} /></div><p>歌单</p></div>
        <div><div><img src={insideNav_4} /></div><p>排行榜</p></div>
      </div>
    );
  }

  getSongList(keyWord) {
    const { classPrefix } = this.props;
    const cxSongList = `${classPrefix}-songlist`;

    return (
      <div className={cxSongList}>
        <div>{keyWord}&nbsp;&gt;</div>
      </div>
    );
  }

  render() {
    const { classPrefix } = this.props;

    const upperLimit = recommendPoster.length;

    return (
      <li className={classPrefix} >
        <SlideShow upperLimit={upperLimit}>
          {this.getImageList()}
        </SlideShow>
        {this.getInsideNav()}
        {this.getSongList("推荐歌单")}
        {this.getSongList("最新音乐")}
        {this.getSongList("主播电台")}
      </li>
    );
  }
}

export default Recommend;