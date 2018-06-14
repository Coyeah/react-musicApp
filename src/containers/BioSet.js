// BioSet.js
import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import * as ItemsActions from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

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

    return (
      <div className={cx}>

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
   
    console.log(this.props);

    return (
      <div className={cx} onClick={() => this.props.actions.panelChange("")}>
        <div className={cxMain} onClick={(event) => this.stopEvent(event)}>
          {this.getOwnCard()}
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

