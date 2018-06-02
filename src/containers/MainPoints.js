// MainPoints.js
import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import * as ItemsAcitons from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

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

    return (
      <div className={cx}>
      
      </div>
    );
  }
}

export default MainPoints;