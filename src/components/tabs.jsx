import React from 'react';
import PropTypes from 'prop-types';

class TabPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ])
  }

  render() {
    return this.props.children;
  }
}

class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = { index: 0 };
    this.handleClick = this.handleClick.bind(this);
    this.show = this.show.bind(this);
  }

  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.element)
  }

  handleClick(index) {
    this.setState({ index });
  }

  show(index) {
    return this.state.index === index ? 'panel' : 'panel hide'
  }

  render() {
    return (
      <div className="tabs">
        <ul className="tab-header">
          {
            React.Children.map(this.props.children, (element, index) => {
              return (
                <li className="tab-header-item" onClick={() => { this.handleClick(index) }}>{element.props.name}</li>
              );
            })
          }
        </ul>
        <div className="content">
          {
            React.Children.map(this.props.children, (element, index) => {
              return (
                <div className={this.show(index)} >
                  {
                    element
                  }
                </div>);
            })
          }
        </div>
      </div>);
  }
}

Tabs.Panel = TabPanel
export { Tabs };