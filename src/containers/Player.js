// Player.js
import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import * as ItemsActions from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { playerMain } from '../constants/playerInfo';

import play from '../image/play.png';
import stop from '../image/stop.png';
import playList from '../image/playList.png';

class Player extends Component {
  static propTypes = {
    classPrefix: PropTypes.string,
  };

  static defaultProps = {
    classPrefix: 'music-player',
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { classPrefix } = this.props;
    const cxImage = `${classPrefix}-image`;
    const cxInfo = `${classPrefix}-info`;
    const cxPlay = `${classPrefix}-play`;
    const cxIcon = `${classPrefix}-icon`;

    const playIcon = this.props.isPlay ? stop : play;

    return (
      <div className={classPrefix}>
        <div>
          <img className={cxImage} src={playerMain.image} />
          <div className={cxInfo} >{playerMain.name}<p>{playerMain.author}</p></div>
        </div>
        <div>
          <img className={cxPlay} src={playIcon} onClick={() => this.props.actions.playerChange()} />
          <img className={cxIcon} src={playList} />
        </div>
      </div>
    );
  }

}

const mapStateToProps = state => ({
  isPlay: state.player.isPlay,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ItemsActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);