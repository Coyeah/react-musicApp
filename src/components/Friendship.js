// Friendship.js
import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import PostItem from './PostItem';

import { postList } from '../constants/postList';

class Friendship extends Component {
  static propTypes = {
    classPrefix: PropTypes.string,
  };

  static defaultProps = {
    classPrefix: 'music-points-platform-friendship',
  };

  constructor(props) {
    super(props);

    this.getPostList = this.getPostList.bind(this);
  }

  getPostList() {
    return (
      postList.map((value, index) => {
        return ( 
          <PostItem
            info={value}
          />
        );
      })
    );
  }

  render() {
    const { classPrefix } = this.props;

    return (
      <li className={classPrefix}>
        {this.getPostList()}
      </li>
    );
  }

}

export default Friendship;