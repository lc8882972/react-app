import React from 'react'
import { Provider } from 'react-redux'
import RouterConfig from './router'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const store = this.props.store
    return (
      < Provider store= { store } >
        <RouterConfig />
      </Provider >
    );
  }
}

export default App;
