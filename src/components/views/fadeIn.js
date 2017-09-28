import React from 'react'
import Animated from 'animated/src/targets/react-dom'

class FadeInView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0), // init opacity 0
    };
  }
  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim,   
      { toValue: 1 },           
    ).start();                
  }
  render() {
    return (
      <Animated.div style={{ opacity: this.state.fadeAnim }}>
        <p> I fadeAnim</p>
      </Animated.div>
    );
  }
}

export default FadeInView