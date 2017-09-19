import React from 'react';
import { connect } from 'dva';
import styles from './Mainlayout.css';

function Mainlayout() {
  return (
    <div className={styles.normal}>
      Route Component: Mainlayout
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Mainlayout);
