import React, {
  Component,
  PropTypes,
} from 'react';

import {
  requireNativeComponent,
} from 'react-native';

export default class Shimmer extends Component {
  static propTypes = {
    animating: PropTypes.bool,
    direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
    pauseDuration: PropTypes.number,
    animationOpacity: PropTypes.number,
    opacity: PropTypes.number,
    speed: PropTypes.number,
    highlightLength: PropTypes.number,
    beginFadeDuration: PropTypes.number,
    endFadeDuration: PropTypes.number,
  };

  static defaultProps = {
    animating: true,
  };

  render() {
    const { direction, ...props } = this.props;
    return (<RNShimmeringView shimmeringDirection={direction} {...props} />);
  }
}

const RNShimmeringView = requireNativeComponent('RNShimmeringView', Shimmer, {
  nativeOnly: {
    shimmeringDirection: true,
  },
});
