import React from 'react'
import Animated from 'animated/src/targets/react-dom'

class Anim extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anim: new Animated.Value(0),
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    Animated.spring(this.state.anim, { toValue: 200 }).start()
  }

  render() {
    const anim = this.state.anim
    return (
      <Animated.div
        style={{ left: anim }}
        className="circle"
        onClick={this.handleClick}>
        Click
      </Animated.div>
    );
  }
}

export default Anim