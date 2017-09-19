import React from 'react';
import { connect } from 'dva';
import styles from './MainLayout/MainLayout.css';

function MainLayout/MainLayout() {
  return (
    <div className={styles.normal}>
      Route Component: MainLayout/MainLayout
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(MainLayout/MainLayout);
