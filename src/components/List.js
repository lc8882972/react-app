import React from 'react';


const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((numbers) =>
  <li>{numbers}</li>
);

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state= {items: [1, 2, 3, 4, 5] };
  }

  render() {
    const numbers = [1, 2, 3, 4, 5];
    console.log(numbers)
    return (
        <ul> 
        {listItems}
        </ul>
    );
  }
}

export default List;