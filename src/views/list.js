import React, { Component } from 'react';

function ListItem(props) {
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <ListItem key={number.toString()} value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NumberList numbers={numbers} />
    )
  }
}
export default List