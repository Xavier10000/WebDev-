import React, { Fragment } from 'react';
import MainNavigation from '../MainNavigation/MainNavigation';
import styles from './Layout.module.css';

const Layout = (props) => {
  return (
      <Fragment>
          <header className={styles.nav}>
            <MainNavigation/>
          </header>
          <main>
            {props.children}
          </main>
    </Fragment>
  )
}

export default Layout