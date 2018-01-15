import React from 'react'
import PropTypes from 'prop-types'
import { Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import logo from '../assets/logo.svg'
import actions from '../actions/count'
import fetchUserActions from '../actions/user'
import SayHello from '../components/SayHello'
import { Tabs } from '../components/tabs'
import List from './list'
import '../App.css'

const mapStateToProps = (state) => {
  return {
    counter: state.toJS().app.number
  }
}

//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch) => {
  return {
    increase: (...args) => dispatch(actions.increase(...args)),
    decrease: (...args) => dispatch(actions.decrease(...args)),
    fechUser: (...args) => dispatch(fetchUserActions.pending(...args))
  }
}

class Home extends React.Component {
  constructor(props) {
    super(props)
  }
  static propTypes = {
    increase: PropTypes.func.isRequired,
    decrease: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired,
    fechUser: PropTypes.func
  }
  increase = () => {
    const { increase } = this.props
    increase(1)
  }

  decrease = () => {
    const { decrease } = this.props;
    decrease(1)
  }

  componentDidMount() {
    this.props.fechUser(1);
  }

  render() {
    const { counter } = this.props
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          <li><Link to="/list">List</Link></li>
          <li><Link to="/topics">Topics</Link></li>
          <li><Link to="/todo">TodoList</Link></li>
          <li><Link to="/anim">Animated</Link></li>
          <li><Link to="/tabel">Tabel</Link></li>
        </ul>
        <div>
          <button onClick={this.increase}>increase</button>
          <button onClick={this.decrease}>decrease</button>
        </div>
        <p>{counter}</p>
        <SayHello name='Tom'></SayHello>

        <Route path="/home/list" component={List} />

        <Tabs>
          <Tabs.Panel name={1}>
            11111QWERD
          </Tabs.Panel>
          <Tabs.Panel name={2}>
            <div>22222</div>
          </Tabs.Panel>
          <Tabs.Panel name={3}>
            <div>3333</div>
          </Tabs.Panel>
        </Tabs>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
