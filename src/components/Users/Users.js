import React from 'react'
import {
  connect
} from 'dva'
import {
  Table,
  Pagination,
  Popconfirm,
  Button
} from 'antd'
import {routerRedux} from 'dva/router'
import styles from './Users.css'
import {
  PAGE_SIZE
} from '../../constants'
import UserModal from './UserModal'

function Users({
  dispatch,
  list: dataSource,
  loading,
  total,
  page: current
}) {
  // 删除
  function deleteHandler(id) {
    dispatch({
      type:'users/remove',
      payload:id
    })
  }

  // 改变页码
  function pageChangeHandler(page){
    dispatch(routerRedux.push({
      pathname:'/users',
      query:{page}
    }))
  }

  // 编辑
  function editHandler(id,values){
    dispatch({
      type:'users/patch',
      payload:{id,values}
    })
  }

  // 新增
  function createHandler(values){
    dispatch({
      type:'users/create',
      payload:values
    })
  }

  const columns = [{
    title: 'Name',
    dataIndex: 'name',
    render: text => <a href="">{text}</a>
  },{
    title:'Email',
    dataIndex:'email'
  },{
    title:'Website',
    dataIndex:'website'
  },{
    title:'Operation',
    dataIndex:'operation',
    render:(text,record)=>(
      <span className={styles.operation}>
        <UserModal record={record} onOk={editHandler.bind(null,record.id)}>
          <a href="">Edit</a>
        </UserModal>
        <Popconfirm title="确定要删除吗？" onConfirm={deleteHandler.bind(null,record.id)}>
          <a href="">Delete</a>
        </Popconfirm>
      </span>
    )
  }]

  return(
    <div className={styles.normal}>
      <div>
        <div className={styles.create}>
          <UserModal record={{}} onOk={createHandler}>
            <Button type="primary">新增</Button>
          </UserModal>
        </div>
        <Table
          columns={columns}
          dataSource={dataSource}
          loading={loading}
          rowKey={record=>record.id}
          pagination={false}
        />
        <Pagination
          className="ant-table-pagination"
          total={total}
          current={current}
          pageSize={PAGE_SIZE}
          onChange={pageChangeHandler}
        />
      </div>
    </div>
  )
}

function mapStateToProps(state){
  const {list,total,page}=state.users
  return{
    loading:state.loading.models.users,
    list,
    total,
    page
  }
}

export default connect(mapStateToProps)(Users)
