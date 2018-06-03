// MainPoints.js
import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import * as ItemsAcitons from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MyList from '../components/MyList';

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

    console.log(this.props.navIndex);
    let leftValue = -1 * window.screen.width * this.props.navIndex;
    let pointStyle = {
      left: leftValue,
    }

    return (
      <div className={cx}>
        <ul id="MainPoints" style={pointStyle}>
          <MyList />
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  navIndex: state.navIndex.navIndex,
  navPanel: state.navIndex.navPanel,
});

const mapDispatchToProps = dispatch => ({
  // actions: bindActionCreators(ItemsActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPoints);


