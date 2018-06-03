// MyList.js
import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import { localList } from '../constants/myList';
import { songList } from '../constants/myList';
import { collectList } from '../constants/myList';

import ListItem from './ListItem';

import down from '../image/myList/icon/down.png';
import set from '../image/myList/icon/set.png';
import more from '../image/myList/icon/more.png';

class MyList extends Component {
  static propTypes = {
    classPrefix: PropTypes.string,
  };

  static defaultProps = {
    classPrefix: 'music-points-mylist',
  };

  constructor(props) {
    super(props);
  }

  getLocalListItem() {
    const { classPrefix } = this.props;
    const cxItem = `${classPrefix}-item`;

    return (
      localList.map((value, index) => {
        return (
          <ListItem
            listType="LOCALLIST"
            classPrefix={cxItem}
            info={value}
          />
        );
      })
    );
  }

  getSongListItem() {
    const { classPrefix } = this.props;
    const cxItem = `${classPrefix}-item`;

    if (songList.length != 0) {

      return (
        songList.map((value, index) => {
          return (
            <ListItem
              listType="SONGLIST"
              classPrefix={cxItem}
              info={value}
            />
          );
        })
      ); 

    }
  }

  getCollectListItem() {
    const { classPrefix } = this.props;
    const cxItem = `${classPrefix}-item`;

    if (collectList.length != 0) {

      return (
        collectList.map((value, index) => {
          return (
            <ListItem
              listType="COLLECTLIST"
              classPrefix={cxItem}
              info={value}
            />
          );
        })
      );

    }
  }

  getListHeader(keyWord, amount) {
    const { classPrefix } = this.props;
    const cx = `${classPrefix}-header`;
    const cxIcon = `${cx}-icon`;
    const cxText = `${cx}-text`;

    return (
      <div className={cx}>
        <img className={cxIcon} src={down} />
        <div className={cxText}>{keyWord} ({amount})</div>
        <img className={cxIcon} src={set} />
      </div>
    );
  }

  render() {
    const { classPrefix } = this.props;

    return (
      <li className={classPrefix} >
        {this.getLocalListItem()}
        {this.getListHeader("创建的歌单", songList.length)}
        {this.getSongListItem()}
        {this.getListHeader("收藏的歌单", collectList.length)}
        {this.getCollectListItem()}
      </li>
    );
  }
}

export default MyList;