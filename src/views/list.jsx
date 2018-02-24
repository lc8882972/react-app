import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const mapStateToProps = (state) => {

  return {
    items: state.toJS().user.list
  }
}

//将action的所有方法绑定到props上
// const mapDispatchToProps = (dispatch) => {
//   return {
//   }
// }

// Create an Input component that'll render an <input> tag with some styles
const Avatar = styled.img`
  display: block;
  height: 81px;
`;
const Title = styled.h2`
  margin-top: 10px;
  line-height: 1;
  font-size: 15px;
  color: #333;
`;
const Text = styled.p`
  height: 3em;
  margin-top: 10px;
  font-size: 13px;
  color: #666;
  line-height: 1.5;
  box-sizing: border-box;
  overflow: hidden;
`;

const Item = styled.div`
  display: flex;
  margin-left: 17px;
  border-bottom: 1px solid #dfdfdf;
  padding: 22px 0 23.5px 0;
  box-sizing: border-box;
  overflow: hidden;
`;

const Box = styled.div`
  padding-left: 19px;
  box-sizing: border-box;
`;

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

class ListView extends React.Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    items: PropTypes.array.isRequired
  }

  render() {
    const { items } = this.props;
    return (
      <List className={"list"} items={items}>{
        (props) =>
          (<Item>
            <Avatar src={props.imgurl}></Avatar>
            <Box>
              <Title>{props.title}</Title>
              <Text>{props.desc}</Text>
            </Box>
          </Item>)
      }</List>
    )
  }
}
export default connect(mapStateToProps)(ListView) 