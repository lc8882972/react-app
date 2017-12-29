import React from 'react'
import PropTypes from 'prop-types'
import TransitionGroup from 'react-transition-group/TransitionGroup'
import Transition from 'react-transition-group/Transition'
// import CSSTransition from 'react-transition-group/CSSTransition'

// const FadeTransition = (props) => (
//   <CSSTransition
//     {...props}
//     classNames="fade"
//     timeout={{ enter: 500, exit: 300 }}
//   />
// );

const duration = 300;

const defaultStyle = {
  // transition: `opacity ${duration}ms ease-in-out`,
  // animation: `mymove ${duration}ms infinite`,
  // opacity: 0,
}

const transitionStyles = {
  entered: {
    animation: `fadeIn ${duration}ms linear forwards`,
  },
  exited: { 
    animation: `fadeOut ${duration}ms linear forwards`,
   },
};

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
);

Fade.propTypes = {
  in: PropTypes.bool,
  children: PropTypes.object
}
class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { items: ['hello', 'world', 'click', 'me'] }
  }
  handleAdd() {
    const newItems = this.state.items.concat([
      prompt('Enter some text')
    ]);
    this.setState({ items: newItems });
  }
  handleRemove(i) {
    let newItems = this.state.items.slice();
    newItems.splice(i, 1);
    console.log(newItems)
    this.setState({ items: newItems });
  }
  render() {
    return (
      <div>
        <button onClick={() => this.handleAdd()}>Add Item</button>
        <TransitionGroup>
          {this.state.items.map((item, i) => (
            <Fade key={i}>
              <div>
                {item}{' '}
                <button onClick={() => this.handleRemove(i)}>
                  remove
                </button>
              </div>
            </Fade>
          ))}
        </TransitionGroup>
      </div>
    );
  }
}

export default TodoList