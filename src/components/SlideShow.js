// SlideShow.js
import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class SlideShow extends Component {
  static propTypes = {
    classPrefix: PropTypes.string
  };

  static defaultProps = {
    classPrefix: "music-points-slideshow",
  };

  constructor(props) {
    super(props);

    this.slideTouchStart = this.slideTouchStart.bind(this);
    this.slideTouchMove = this.slideTouchMove.bind(this);
    this.slideTouchEnd = this.slideTouchEnd.bind(this);

    this.state = {
      imageIndex: 0,
      mouseX: 0,
      mouseLeft: 0,
      isTouch: false,
    };
  }

  getImageList() {
    return (
      this.props.children.map((value, index) => {
        return (
          <li><img src={value} /></li>
        );
      })
    );
  }

  getPointList() {
    return (
      this.props.children.map((value, index) => {
        if (index == this.state.imageIndex) {
          let style = {
            "background-color": "#c20c0c",
          }

          return (
            <li style={style}></li>
          );
        }

        return (
          <li></li>
        );
      })
    );
  }

  slideTouchStart(e) {
    this.setState({
      mouseX: e.touches[0].clientX,
      isTouch: true,
    });
  }

  slideTouchMove(e) {
    this.setState({
      mouseLeft: e.touches[0].clientX - this.state.mouseX,
    });
  }

  slideTouchEnd() {
    console.log(this.state.mouseLeft);
    let imageIndex = this.state.imageIndex;
    if (this.state.mouseLeft < (-1 * window.screen.width * 0.5)) {
      imageIndex++
    } else if (this.state.mouseLeft > (window.screen.width * 0.5)) {
      imageIndex--;
    }
    this.setState({
      imageIndex,
      mouseX: 0,
      mouseLeft: 0,
      isTouch: false,
    });
  }

  render() {
    const { classPrefix } = this.props;
    const cxImage = `${classPrefix}-image`;
    const cxPoint = `${classPrefix}-point`;

    const styleDiv = {
      height: window.screen.width * 336 / 730,  
    };

    let styleUl = null;
    if (this.state.isTouch) {
      styleUl = {
        left: this.state.mouseLeft,
      };
    } else {
      styleUl = {
        left: this.state.imageIndex * window.screen.width * -1,
      };
    }

    return (
      <div className={classPrefix} style={styleDiv}>
        <ul className={cxImage} style={styleUl} onTouchStart={this.slideTouchStart} onTouchMove={this.slideTouchMove} onTouchEnd={this.slideTouchEnd}>
          {this.getImageList()}
        </ul>
        <ul className={cxPoint}>
          {this.getPointList()}
        </ul>      
      </div>
    );
  }
}

export default SlideShow;