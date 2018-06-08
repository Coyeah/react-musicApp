// Player.js
import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

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
    navIndex: 1,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { classPrefix } = this.props;
    const cxImage = `${classPrefix}-image`
    const cxInfo = `${classPrefix}-info`
    const cxPlay = `${classPrefix}-play`
    const cxIcon = `${classPrefix}-icon`

    return (
      <div className={classPrefix}>
        <img className={cxImage} src={playerMain.image} />
        <div className={cxInfo}>{playerMain.name}<p>{playerMain.author}</p></div>
        <img className={cxPlay} src={play} />
        <img className={cxIcon} src={playList} />
      </div>
    );
  }

}

export default Player;