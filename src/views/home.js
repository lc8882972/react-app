import React from 'react'
import { Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'
import logo from '../assets/logo.svg'
import actions from '../actions/count'
import SayHello from '../components/SayHello'
import List from './list'
import '../App.css'

const mapStateToProps = (state) => {
  return {
    counter: state.default.number
  }
}

//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increase: (...args) => {
      dispatch(actions.increase(...args))
    },
    decrease: (...args) => dispatch(actions.decrease(...args))
  }
}

// Create an Input component that'll render an <input> tag with some styles
// const Input = styled.input`
// 	padding: 0.5em;
// 	margin: 0.5em;
// 	color: palevioletred;
// 	background: papayawhip;
// 	border: none;
//   border-radius: 3px;
// `;

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  increase = () => {
    const { increase } = this.props
    increase(1)
  }

  decrease = () => {
    const { decrease } = this.props;

    console.log(this)
    decrease(1)
  }

  render() {
    const { counter, increase } = this.props
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to="/list">List Component</Link>
        <Link to="/topics">Topics Component</Link>
        <Link to="/todo">TodoList Component</Link>
        <p>{counter}</p>
        <SayHello name='Tom'></SayHello>

        <Route path="/home/list" component={List} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
