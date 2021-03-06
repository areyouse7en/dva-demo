import React from 'react'
import {Menu,Icon} from 'antd'
import {Link} from 'dva/router'
import styles from './Header.css'

function Header({location}) {
  return (
    <Menu
      selectedKeys={[location.pathname]}
      mode="horizontal"
      theme="dark"
    >
      <Menu.Item key="/">
        <Link to="/"><Icon type="home"/>Home</Link>
      </Menu.Item>
      <Menu.Item key="/users">
        <Link to="/users"><Icon type="bars"/>Users</Link>
      </Menu.Item>
    </Menu>
  )
}

export default Header
