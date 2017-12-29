import React from 'react'
import PropTypes from 'prop-types'

function List(props) {
  const array = props.items
  const listItems = array.map((data, index) =>
    <li key={index}>{props.children(data)}</li>
  )
  return (
    <ul>
      {listItems}
    </ul>
  )
}

List.propTypes = {
  items: PropTypes.array.isRequired,
  children: PropTypes.func.isRequired,
};

export default List