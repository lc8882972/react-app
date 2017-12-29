import React from 'react'
import PropTypes from 'prop-types'

class SayHello extends React.Component {
  static propTypes = {
    name: PropTypes.string
  }
  constructor(props) {
    super(props);
    this.state = { message: 'Hello!' }
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
  // WARNING: this syntax is experimental!
  // Using an arrow here binds the method:
  handleClick = () => {
    alert(this.state.message)
  }

  render() {
    return (
      <button onClick={this.handleClick} >hello {this.props.name} </button>
    );
  }
}

export default SayHello