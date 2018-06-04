// MainPoints.js
import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import * as ItemsActions from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MyList from '../components/MyList';
import Platform from '../components/Platform';

class MainPoints extends Component {
  static propTypes = {
    classPrefix: PropTypes.string,
  };

  static defaultProps = {
    classPrefix: 'music-points',
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { classPrefix } = this.props;

    const cx = classnames({
      [`${classPrefix}`]: true,
    });

    let leftValue = -1 * window.screen.width * this.props.navIndex;
    let pointStyle = {
      left: leftValue,
    }

    return (
      <div className={cx}>
        <ul id="MainPoints" style={pointStyle}>
          <MyList
            songListOpen={this.props.songListOpen}
            collectListOpen={this.props.collectListOpen}
            songListChange={this.props.actions.songListChange}
            collectListChange={this.props.actions.collectListChange}
          />
          <Platform
            platformIndex={this.props.platformIndex}
            platformIndexChange={this.props.actions.platformIndexChange}
          />
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  navIndex: state.navIndex.navIndex,
  navPanel: state.navIndex.navPanel,
  songListOpen: state.myList.songListOpen,
  collectListOpen: state.myList.collectListOpen,
  platformIndex: state.platform.platformIndex,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ItemsActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPoints);


