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

  getListHeader(type, amount) {
    const { classPrefix } = this.props;
    const cx = `${classPrefix}-header`;
    const cxIcon = `${cx}-icon`;
    const cxText = `${cx}-text`;

    let keyWord = "";
    let onClickEvent = null;
    let style = {};

    switch (type) {
      case "SONGLIST": {
        keyWord = "创建的歌单";
        onClickEvent = this.props.songListChange;
        if (!this.props.songListOpen) {
          style = {
            transform: "rotate(-90deg)",
          }
        }
        break;
      }
      case "COLLECTLIST": {
        keyWord = "收藏的歌单";
        onClickEvent = this.props.collectListChange;
        if (!this.props.collectListOpen) {
          style = {
            transform: "rotate(-90deg)",
          }
        }
        break;
      }
    }

    return (
      <div className={cx}>
        <img className={cxIcon} style={style} onClick={onClickEvent} src={down} />
        <div className={cxText} onClick={onClickEvent} >{keyWord} ({amount})</div>
        <img className={cxIcon} src={set} />
      </div>
    );
  }

  render() {
    const { classPrefix } = this.props;

    return (
      <li className={classPrefix} >
        {this.getLocalListItem()}
        {this.getListHeader("SONGLIST", songList.length)}
        {this.props.songListOpen && this.getSongListItem()}
        {this.getListHeader("COLLECTLIST", collectList.length)}
        {this.props.collectListOpen && this.getCollectListItem()}
      </li>
    );
  }
}

export default MyList;