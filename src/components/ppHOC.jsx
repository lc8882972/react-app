import React from 'react'

export const hoc = WrappedComponent => class PP extends React.Component {
  render() {
    return <WrappedComponent {...this.props} />
  }
}
