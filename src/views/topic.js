import React from 'react'
import { Route, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
// import CSSTransition from 'react-transition-group/CSSTransition'
import Transition from 'react-transition-group/Transition'
const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entered: { opacity: 1 },
}

const Fade = ({ in: inProp, children }) => (
  <Transition in={inProp} timeout={duration}>
    {(state) => (
      <div style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}>
        {children}
      </div>
    )}
  </Transition>
)
Fade.propTypes = {
  in: PropTypes.bool,
  children: PropTypes.string
}
// const FadeCSSTransition = ({ children, ...props }) => (
//   <CSSTransition
//     {...props}
//     timeout={5000}
//     classNames="slide"
//   >
//     {children}
//   </CSSTransition>
// )

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

Topic.propTypes = {
  match: PropTypes.object.isRequired
}
class Topics extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired
  }
  constructor(props) {
    super(props)
    this.state = { show: false }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({ show: !this.state.show })
  }
  render() {
    var match = this.props.match
    return (
      <div>
        <h2>Topics</h2>
        <Fade in={this.state.show}>I'm A fade Transition!</Fade>
        <button onClick={this.handleClick}>按钮</button>
        <ul>
          <li>
            <Link to={`${match.url}/rendering`}>
              Rendering with Reacts
        </Link>
          </li>
          <li>
            <Link to={`${match.url}/components`}>
              Components
        </Link>
          </li>
          <li>
            <Link to={`${match.url}/props-v-state`}>
              Props v. State
        </Link>
          </li>
        </ul>
        <Route path="/topics/:topicId" component={Topic} />
        <Route exact path={match.url} render={() => (
          <h3>Please select a topic.{match.url}</h3>
        )} />
      </div>
    )
  }
}

export default Topics