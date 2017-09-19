import React from 'react';
import { connect } from 'dva';
import styles from './MainLayout/Header.css';

function MainLayout/Header() {
  return (
    <div className={styles.normal}>
      Route Component: MainLayout/Header
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(MainLayout/Header);
