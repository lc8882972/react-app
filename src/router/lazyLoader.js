import React from 'react'

export default function lazyLoader (importComponent) {
  class AsyncComponent extends React.Component {
    state = { Component: null }

    async componentDidMount () {
      const { default: Component } = await importComponent();

      this.setState({
        Component: Component
      });
    }

    render () {
      const Component = this.state.Component;

      return Component
        ? <Component {...this.props} />
        : null;
    }
  }

  return AsyncComponent;
};