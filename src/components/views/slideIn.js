import React from 'react'
import Animated from 'animated/src/targets/react-dom'

class SlideInView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: new Animated.Value(0), // init opacity 0
    };
  }
  componentDidMount() {
    Animated.timing(
      this.state.val,   
      { toValue: 1 },           
    ).start();                
  }
  render() {
    return (
      <Animated.div style={{ opacity: this.state.val }}>
        {this.props.children}
      </Animated.div>
    );
  }
}

export default SlideInView