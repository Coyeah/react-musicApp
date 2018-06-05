// Recommend.js
import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import SlideShow from './SlideShow';
import SongBlock from './SongBlock';

import { recommendPoster } from '../constants/posterList';

import { recommendSong, newestSong, anchorRadio } from '../constants/songBlockList';

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

  getSongList(key) {
    const { classPrefix } = this.props;
    const cxSongList = `${classPrefix}-songlist`;
    const cxListTitle = `${cxSongList}-title`;
    const cxListBody = `${cxSongList}-body`;

    let list = null;
    let keyWord = null;
    switch (key) {
      case "recommendSong": {
        list = recommendSong;
        keyWord = "推荐歌单";
        break;
      }
      case "newestSong": {
        list = newestSong;
        keyWord = "最新音乐";
        break;
      }
      case "anchorRadio": {
        list = anchorRadio;
        keyWord = "主播电台";
        break;
      }
    }

    return (
      <div className={cxSongList}>
        <div className={cxListTitle}>{keyWord}&nbsp;&gt;</div>
        <div className={cxListBody}>
          {list.map((value, index) => {
            return (
              <SongBlock 
                image={value.image}
                listen={value.listen}
                title={value.title}
              />
            );
          })}
        </div>
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
        {this.getSongList("recommendSong")}
        {this.getSongList("newestSong")}
        {this.getSongList("anchorRadio")}
      </li>
    );
  }
}

export default Recommend;