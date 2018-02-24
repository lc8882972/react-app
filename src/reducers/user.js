import Immutable from 'immutable'

const initialState = Immutable.fromJS({
  user: {
    id: -1,
    name: ''
  },
  list: [
    {
      id: 1,
      imgurl: 'http://liaowa.oss-cn-shanghai.aliyuncs.com/images/web/20170906153619117.jpg',
      title: 'NBA范德萨',
      desc: '发射点发顺丰吗你们能能不能NBA范德萨发射点发顺丰吗你们能能不能NBA范德萨似的发射点搜索'
    },
    {
      id: 2,
      imgurl: 'http://liaowa.oss-cn-shanghai.aliyuncs.com/images/web/20170906153619117.jpg',
      title: 'NBA范德萨',
      desc: '发射点发顺丰吗你们能能不能NBA范德萨发射点发顺丰吗你们能能不能NBA范德萨'
    },
    {
      id: 3,
      imgurl: 'http://liaowa.oss-cn-shanghai.aliyuncs.com/images/web/20170906153619117.jpg',
      title: 'NBA范德萨',
      desc: '发射点发顺丰吗你们能能不能NBA范德萨发射点发顺丰吗你们能能不能NBA范德萨'
    },
    {
      id: 4,
      imgurl: 'http://liaowa.oss-cn-shanghai.aliyuncs.com/images/web/20170906153619117.jpg',
      title: 'NBA范德萨',
      desc: '发射点发顺丰吗你们能能不能NBA范德萨发射点发顺丰吗你们能能不能NBA范德萨'
    },
    {
      id: 5,
      imgurl: 'http://liaowa.oss-cn-shanghai.aliyuncs.com/images/web/20170906153619117.jpg',
      title: 'NBA范德萨',
      desc: '发射点发顺丰吗你们能能不能NBA范德萨发射点发顺丰吗你们能能不能NBA范德萨'
    },
    {
      id: 6,
      imgurl: 'http://liaowa.oss-cn-shanghai.aliyuncs.com/images/web/20170906153619117.jpg',
      title: 'NBA范德萨',
      desc: '发射点发顺丰吗你们能能不能NBA范德萨发射点发顺丰吗你们能能不能NBA范德萨'
    }
  ]
})

const update = function (state = initialState, action) {
  if (action.type === 'FETCH_USER_SUCCESS') {
    return state.update('user', () => action.payload)
  }

  return state
}

export default update