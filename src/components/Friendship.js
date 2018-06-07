// Friendship.js
import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class Friendship extends Component {
  static propTypes = {
    classPrefix: PropTypes.string,
  };

  static defaultProps = {
    classPrefix: 'music-points-platform-friendship',
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { classPrefix } = this.props;

    return (
      <li className={classPrefix}>
        
      </li>
    );
  }

}

export default Friendship;