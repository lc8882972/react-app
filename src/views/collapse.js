import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Item = styled.div`
  
`
const HD = styled.div`
  line-height: 45px;
  padding-left: 12px;
  font-size: 14px;
  color: #333;
  box-sizing: border-box;
`
const BD = styled.div`

`
const Wapper = styled.div`
  padding: 10px 12px;  
  background-color: #ececec;
`

const WapperItem = styled.div`
  margin-top: 10px;
  padding: 12px 0 12px 13px;
  background-color: #fff;

  &:first-child {
    margin-top: 0;
  }
`

const Time = styled.p`
  font-size: 12px;
  color: #999;
  line-height: 1;
`
const Text = styled.p`
  margin-top: 11px;
  font-size: 14px;
  color: #333;
  line-height: 1;
`

class ListItem extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = { show: true }
  }

  handleClick() {
    this.setState({show: !this.state.show})
    console.log(this)
  }
  render() {
    const item = this.props.data
    const isShow = this.state.show
    if (isShow) {
      return (<li>
        <Item>
          <HD onClick={this.handleClick}>2016-09-18</HD>
          <BD>
            <Wapper>
              <WapperItem>
                <Time>04:00</Time>
                <Text>阿萨大大那边能不能</Text>
              </WapperItem>
              <WapperItem>
                <Time>04:00</Time>
                <Text>阿萨大大那边能不能</Text>
              </WapperItem>
              <WapperItem>
                <Time>04:00</Time>
                <Text>阿萨大大那边能不能</Text>
              </WapperItem>
            </Wapper>
          </BD>
        </Item>
      </li>)
    }
    return (<li>
      <Item>
        <HD onClick={this.handleClick}>2016-09-18</HD>
        <BD>
        </BD>
      </Item>
    </li>)

  }
}

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
    desc: '发射点发顺丰吗你们能能不能NBA范德萨发射点发顺丰吗你们能能不能NBA范德萨'
  }
]

class Collapse extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <NumberList items={items}></NumberList>
    )
  }
}
export default Collapse
