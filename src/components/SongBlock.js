// SongBlock.js
import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import earphone from '../image/platform/remmcond/icon/earphone.png';

class SongBlock extends Component {
  static propTypes = {
    classPrefix: PropTypes.string
  };

  static defaultProps = {
    classPrefix: "music-points-platform-recommend-songlist-songblock",
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { classPrefix, image, listen, title } = this.props;
    const cxImage = `${classPrefix}-image`;
    const cxFloat = `${classPrefix}-float`;
    const cxIcon = `${classPrefix}-icon`;
    const cxText = `${classPrefix}-text`;
    const cxContent = `${classPrefix}-content`;
    const style = {
      width: window.screen.width / 3 - 7,
    }
    const styleImg = {
      width: window.screen.width / 3 - 7,
      height: window.screen.width / 3 - 7
    }

    const listenSure = listen > 10000 ? (listen / 10000).toFixed(1) + "万" : listen;

    return (
      <div style={style} className={classPrefix}>
        <div style={{position: "relative"}} >        
          <img className={cxImage} style={styleImg} src={image} />
          <div className={cxFloat}><img className={cxIcon} src={earphone} /><span className={cxText}>{listenSure}</span></div>
        </div>
        <div className={cxContent}>{title}</div>
      </div>
    );
  }
}

export default SongBlock;