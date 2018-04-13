import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Align from 'rc-align';
import Animate from 'rc-animate';
import PopupInner from './PopupInner';
import LazyRenderBox from './LazyRenderBox';
import { saveRef } from './utils';

class Popup extends Component {
  static propTypes = {
    visible: PropTypes.bool,
    style: PropTypes.object,
    getClassNameFromAlign: PropTypes.func,
    onAlign: PropTypes.func,
    getRootDomNode: PropTypes.func,
    onMouseEnter: PropTypes.func,
    align: PropTypes.any,
    destroyPopupOnHide: PropTypes.bool,
    className: PropTypes.string,
    prefixCls: PropTypes.string,
    onMouseLeave: PropTypes.func,
    stretch: PropTypes.string,
    children: PropTypes.node,
  };

  constructor(props) {
    super(props);

    this.state = {
      // Used for stretch
      stretchChecked: false,
      targetWidth: undefined,
      targetHeight: undefined,
    };

    this.savePopupRef = saveRef.bind(this, 'popupInstance');
    this.saveAlignRef = saveRef.bind(this, 'alignInstance');
  }

  componentDidMount() {
    this.rootNode = this.getPopupDomNode();
    this.setStretchSize();
  }

  componentDidUpdate() {
    this.setStretchSize();
  }

  onAlign = (popupDomNode, align) => {
    const props = this.props;
    const currentAlignClassName = props.getClassNameFromAlign(align);
    // FIX: https://github.com/react-component/trigger/issues/56
    // FIX: https://github.com/react-component/tooltip/issues/79
    if (this.currentAlignClassName !== currentAlignClassName) {
      this.currentAlignClassName = currentAlignClassName;
      popupDomNode.className = this.getClassName(currentAlignClassName);
    }
    props.onAlign(popupDomNode, align);
  }

  // Record size if stretch needed
  setStretchSize = () => {
    const { stretch, getRootDomNode, visible } = this.props;
    const { stretchChecked, targetHeight, targetWidth } = this.state;

    if (!stretch || !visible) {
      if (stretchChecked) {
        this.setState({ stretchChecked: false });
      }
      return;
    }

    const $ele = getRootDomNode();
    if (!$ele) return;

    const height = $ele.offsetHeight;
    const width = $ele.offsetWidth;

    if (targetHeight !== height || targetWidth !== width || !stretchChecked) {
      this.setState({
        stretchChecked: true,
        targetHeight: height,
        targetWidth: width,
      });
    }
  };

  getPopupDomNode() {
    return ReactDOM.findDOMNode(this.popupInstance);
  }

  getTarget = () => {
    return this.props.getRootDomNode();
  }

  getTransitionName() {
    const props = this.props;
    let transitionName = props.transitionName;
    if (!transitionName && props.animation) {
      transitionName = `${props.prefixCls}-${props.animation}`;
    }
    return transitionName;
  }

  getClassName(currentAlignClassName) {
    return `${this.props.prefixCls} ${this.props.className} ${currentAlignClassName}`;
  }

  getPopupElement() {
    const { savePopupRef } = this;
    const { stretchChecked, targetHeight, targetWidth } = this.state;
    const {
      align, visible,
      prefixCls, style, getClassNameFromAlign,
      destroyPopupOnHide, stretch, children,
      onMouseEnter, onMouseLeave,
    } = this.props;
    const className = this.getClassName(this.currentAlignClassName ||
      getClassNameFromAlign(align));
    const hiddenClassName = `${prefixCls}-hidden`;

    if (!visible) {
      this.currentAlignClassName = null;
    }

    const sizeStyle = {};
    if (stretch) {
      if (stretchChecked) {
        // Stretch with target
        if (stretch.indexOf('height') !== -1) {
          sizeStyle.height = targetHeight;
        } else if (stretch.indexOf('minHeight') !== -1) {
          sizeStyle.minHeight = targetHeight;
        }
        if (stretch.indexOf('width') !== -1) {
          sizeStyle.width = targetWidth;
        } else if (stretch.indexOf('minWidth') !== -1) {
          sizeStyle.minWidth = targetWidth;
        }
      } else {
        // Do nothing when stretch not ready
        return null;
      }
    }

    const newStyle = {
      ...sizeStyle,
      ...style,
      ...this.getZIndexStyle(),
    };

    const popupInnerProps = {
      className,
      prefixCls,
      ref: savePopupRef,
      onMouseEnter,
      onMouseLeave,
      style: newStyle,
    };
    if (destroyPopupOnHide) {
      return (
        <Animate
          component=""
          exclusive
          transitionAppear
          transitionName={this.getTransitionName()}
        >
          {visible ? (
            <Align
              target={this.getTarget}
              key="popup"
              ref={this.saveAlignRef}
              monitorWindowResize
              align={align}
              onAlign={this.onAlign}
            >
              <PopupInner
                visible
                {...popupInnerProps}
              >
                {children}
              </PopupInner>
            </Align>
          ) : null}
        </Animate>
      );
    }
    return (
      <Animate
        component=""
        exclusive
        transitionAppear
        transitionName={this.getTransitionName()}
        showProp="xVisible"
      >
        <Align
          target={this.getTarget}
          key="popup"
          ref={this.saveAlignRef}
          monitorWindowResize
          xVisible={visible}
          childrenProps={{ visible: 'xVisible' }}
          disabled={!visible}
          align={align}
          onAlign={this.onAlign}
        >
          <PopupInner
            hiddenClassName={hiddenClassName}
            {...popupInnerProps}
          >
            {children}
          </PopupInner>
        </Align>
      </Animate>
    );
  }

  getZIndexStyle() {
    const style = {};
    const props = this.props;
    if (props.zIndex !== undefined) {
      style.zIndex = props.zIndex;
    }
    return style;
  }

  render() {
    return (
      <div>
        {this.getPopupElement()}
      </div>
    );
  }
}

export default Popup;