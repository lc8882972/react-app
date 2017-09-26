import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

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

function ListItem(props) {
  const item = props.data
  return (
    <li>
      <Item>
        <Avatar src={item.imgurl}></Avatar>
        <Box>
          <Title>{item.title}</Title>
          <Text>{item.desc}</Text>
        </Box>
      </Item>
    </li>)
}

ListItem.propTypes = {
  data: PropTypes.object.isRequired
};


function NumberList(props) {
  const array = props.items
  const listItems = array.map((data) =>
    <ListItem key={data.id.toString()} data={data} />
  )
  return (
    <ul>
      {listItems}
    </ul>
  )
}

NumberList.propTypes = {
  items: PropTypes.array.isRequired
};

const items = [
  {
    id: 1,
    imgurl: 'http://liaowa.oss-cn-shanghai.aliyuncs.com/images/web/20170906153619117.jpg',
    title: '孕期胎儿十月发育过程图',
    desc: '发射点发顺丰吗你们能能不能NBA范德萨发射点发顺丰吗你们能能不能NBA范德萨似的发射点搜索'
  },
  {
    id: 2,
    imgurl: 'http://liaowa.oss-cn-shanghai.aliyuncs.com/images/web/20170906153619117.jpg',
    title: '孕期胎儿十月发育过程图',
    desc: '发射点发顺丰吗你们能能不能NBA范德萨发射点发顺丰吗你们能能不能NBA范德萨'
  },
  {
    id: 3,
    imgurl: 'http://liaowa.oss-cn-shanghai.aliyuncs.com/images/web/20170906153619117.jpg',
    title: '孕期胎儿十月发育过程图',
    desc: '发射点发顺丰吗你们能能不能NBA范德萨发射点发顺丰吗你们能能不能NBA范德萨'
  }
]

class List extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <NumberList items={items} />
    )
  }
}
export default List