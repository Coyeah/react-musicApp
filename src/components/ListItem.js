// ListItem.js
import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import more from '../image/myList/icon/more.png';

class ListItem extends Component {
  static propTypes = {
    classPrefix: PropTypes.string
  };

  static defaultProps = {
    classPrefix: "music-points-mylist-item",
  }

  render() {
    const { classPrefix, info, listType } = this.props;

    const cxItemIcon = `${classPrefix}-icon`;

    switch (listType) {
      case "LOCALLIST": {
        const cxItemText = `${classPrefix}-text`;

        return (
          <div className={classPrefix}>
            <img className={cxItemIcon} src={info.image} />
            <div className={cxItemText}>{info.title} <span>({info.children.length})</span></div>
          </div>
        );
      }
      case "SONGLIST": {
        const cxItemPict = `${classPrefix}-pict`;

        const cxItemGroup = `${classPrefix}-group`;

        const cxItemGroupText = `${cxItemGroup}-text`;

        return (
          <div>
            <div className={classPrefix}>
              <img className={cxItemPict} src={info.image} />
              <div className={cxItemGroup}>
                <div className={cxItemGroupText}>
                  {info.title}
                  <p>{info.children.length}首</p>
                </div>
                <img className={cxItemIcon} src={more} />
              </div>
            </div>
          </div>
        );
      }
    }
  }
}

export default ListItem;