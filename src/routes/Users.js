import React from 'react'
import { connect } from 'dva'
import styles from './Users.css'
import UsersComponets from '../components/Users/Users'
import MainLayout from '../components/MainLayout/MainLayout'

function Users({location}) {
  return (
    <MainLayout location={location}>
      <div className={styles.normal}>
        <UsersComponets/>
      </div>
    </MainLayout>
  )
}

function mapStateToProps() {
  return {}
}

export default connect(mapStateToProps)(Users)
