// MyList.js
import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import local from '../image/mylist/local.png';

class MyList extends Component {
  static propTypes = {
    classPrefix: PropTypes.string,
  };

  static defaultProps = {
    classPrefix: 'music-points-mylist',
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { classPrefix } = this.props;

    const cxItem = `${classPrefix}-item`;
    
    const cxItemIcon = `${cxItem}-icon`;

    const cxItemText = `${cxItem}-text`;
    return (
      <li className={classPrefix} >
        <div className={cxItem}>
          <img className={cxItemIcon} src={local} />
          <div className={cxItemText}>本地音乐 <span>(0)</span></div>
        </div>
      </li>
    );
  }
}

export default MyList;