// BioSet.js
import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import * as ItemsActions from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import avatar from '../image/user/avatar.png';
import background from '../image/user/background.jpg';

import out from '../image/user/icon/out.png';
import set from '../image/user/icon/set.png';
import night from '../image/user/icon/night.png';
import item1 from '../image/user/icon/item-1.png';
import item2 from '../image/user/icon/item-2.png';
import item3 from '../image/user/icon/item-3.png';
import item4 from '../image/user/icon/item-4.png';
import item5 from '../image/user/icon/item-5.png';
import item6 from '../image/user/icon/item-6.png';
import item7 from '../image/user/icon/item-7.png';
import item8 from '../image/user/icon/item-8.png';
import item9 from '../image/user/icon/item-9.png';

class BioSet extends Component {
  static propTypes = {
    classPrefix: PropTypes.string,
  };

  static defaultProps = {
    classPrefix: 'music-setting'
  };

  constructor(props) {
    super(props);
  }

  stopEvent(event) {
    event.stopPropagation();
  }

  getOwnCard () {
    const { classPrefix } = this.props;
    const cx = `${classPrefix}-card`;
    const cxBackground = `${cx}-background`;
    const cxAvatar = `${cx}-avatar`;
    const cxName = `${cx}-name`;

    return (
      <div className={cx}>
        <img className={cxBackground} src={background} />
        <img className={cxAvatar} src={avatar} />
        <span className={cxName}>Coyeah</span>
      </div>
    );
  }

  getOperate () {
    const { classPrefix } = this.props;
    const cx = `${classPrefix}-operate`;

    return (
      <div className={cx}>
        <div><img src={night} /><span>夜间模式</span></div>
        <div><img src={set} /><span>设置</span></div>
        <div><img src={out} /><span>退出</span></div>
      </div>
    );
  }

  getFnList () {
    const { classPrefix } = this.props;
    const cxFnlist = `${classPrefix}-fnlist`;
    const cx = `${classPrefix}-fnlist-item`;

    const imgList = ["item1","item2","item3","item4","item5","item6","item7","item8","item9"];
    const textList = ["我的消息","会员中心","在线听歌免流量","我的好友","附近的人","听歌识曲","定时停止播放","扫一扫","音乐云盘"];

    return (
      <ul className={cxFnlist}>
        <li className={cx}><img src={item1} /><span>我的消息</span></li>
        <li className={cx}><img src={item2} /><span>会员中心</span></li>
        <li className={cx}><img src={item3} /><span>在线听歌免流量</span></li>
        <li className={cx}><img src={item4} /><span>我的好友</span></li>
        <li className={cx}><img src={item5} /><span>附近的人</span></li>
        <li className={cx}><img src={item6} /><span>听歌识曲</span></li>
        <li className={cx}><img src={item7} /><span>定时停止播放</span></li>
        <li className={cx}><img src={item8} /><span>扫一扫</span></li>
        <li className={cx}><img src={item9} /><span>音乐云盘</span></li>
      </ul>
    );
  }

  getAboutMe() {
    const { classPrefix } = this.props;
    const cx = `${classPrefix}-about`;

    return (
      <div className={cx}>
        <p>作者:Coyeah</p>
        <hr />
        <p>github.com/Coyeah</p>
      </div>
    );
  }

  render() {
    const { classPrefix } = this.props;
    const cx = classnames({
      [`${classPrefix}`]: true,
      [`${classPrefix}-hidden`]: (this.props.navPanel == "list") ? false : true,
    });

    const cxMain = `${classPrefix}-containers`;
    const cxChild = `${cxMain}-child`;
   
    return (
      <div className={cx} onClick={() => this.props.actions.panelChange("")}>
        <div className={cxMain} onClick={(event) => this.stopEvent(event)}>
          <div className={cxChild}>
            {this.getOwnCard()}
            {this.getFnList()}
            {this.getAboutMe()}
          </div>
          {this.getOperate()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  navPanel: state.navIndex.navPanel,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ItemsActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BioSet);

