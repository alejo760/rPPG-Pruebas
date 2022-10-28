import React from 'react';
import styles from './header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <a href="" target="_blank">
      <img
        src="/images/UWlogo3.png"
        alt="UW Logo"
        width="200"
        height="60"
        className="UW-logo"
      />
            <img
        src="/images/UWlogo2.png"
        alt="UW Logo"
        width="200"
        height="60"
        className="UW-logo"
      />
    </a>
    <a 
      className={styles.github}
      href="https://github.com/alejo760/rppg-web" target="_blank">
        GITHUB
    </a>
  </header>
);

export default Header;
