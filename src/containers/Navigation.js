// Navigation.js
import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import * as ItemsActions from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import list from '../image/list.png';
import disc from '../image/disc.png';
import music from '../image/music.png';
import video from '../image/video.png';
import search from '../image/search.png';

import list_selected from '../image/list_selected.png';
import disc_selected from '../image/disc_selected.png';
import music_selected from '../image/music_selected.png';
import video_selected from '../image/video_selected.png';
import search_selected from '../image/search_selected.png';

class Navigation extends Component {
  static propTypes = {
    classPrefix: PropTypes.string,
  };

  static defaultProps = {
    classPrefix: 'music',
    navIndex: 1,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { classPrefix } = this.props;

    const cx = classnames({
      [`${classPrefix}-navigation`]: true,
    });

    const cxIcon = classnames({
      [`${classPrefix}-navigation-icon`]: true,
    });

    let iconArr = [music, disc, video];
    let iconSelected = [music_selected, disc_selected, video_selected];
    iconArr[this.props.navIndex] = iconSelected[this.props.navIndex];

    console.log(this.props);

    return (
      <div className={cx}>
      <img className={cxIcon} src={list} onClick={() => this.props.actions.panelChange("list")} />
        <div>
          <img className={cxIcon} src={iconArr[0]} onClick={() => this.props.actions.navChange(0)} />
          <img className={cxIcon} src={iconArr[1]} onClick={() => this.props.actions.navChange(1)} />
          <img className={cxIcon} src={iconArr[2]} onClick={() => this.props.actions.navChange(2)} />
        </div>
      <img className={cxIcon} src={search} onClick={() => this.props.actions.panelChange("search")} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  navIndex: state.navIndex.navIndex,
  navPanel: state.navIndex.navPanel,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ItemsActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);




