// PostItem.js
import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class PostItem extends Component {
  static propTypes = {
    classPrefix: PropTypes.string,
  };

  static defaultProps = {
    classPrefix: 'music-points-platform-friendship-postitem',
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

export default PostItem;
