// ListItem.js
import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

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

    const cxItemText = `${classPrefix}-text`;

    switch (listType) {
      case "SIMPLE": {
        return (
          <div className={classPrefix}>
            <img className={cxItemIcon} src={info.image} />
            <div className={cxItemText}>{info.title} <span>({info.amount})</span></div>
          </div>
        );
      }
      case "COMPLEX": {
        return (
          <div>
            <div className={classPrefix}>
              <img className={cxItemIcon} src={info.image} />
              <div className={cxItemText}>{info.title} <span>({info.amount})</span></div>
            </div>
          </div>
        );
      }
    }
  }
}

export default ListItem;