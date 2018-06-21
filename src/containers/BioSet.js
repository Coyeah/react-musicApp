// BioSet.js
import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import * as ItemsActions from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import avatar from '../image/user/avatar.png';
import background from '../image/user/background.jpg';

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
        <div>夜间模式</div>
        <div>设置</div>
        <div>退出</div>
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
   
    return (
      <div className={cx} onClick={() => this.props.actions.panelChange("")}>
        <div className={cxMain} onClick={(event) => this.stopEvent(event)}>
          {this.getOwnCard()}
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

