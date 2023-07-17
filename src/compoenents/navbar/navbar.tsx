import React from 'react';
import styles from './navbar.module.css';
import Link from 'next/link';

const Navbar = ({setAuthenticated}) => {

const logout = () => {
    setAuthenticated(false);
}

  return (
    <nav>
        <ul className={styles.navbar}>
            <li>
                <Link href="/">Blogs</Link>
            </li>
            <li>
                <Link href="/dashboard">Dashboard</Link>     
            </li>
            <li>
                <Link href="/">Log Out</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar;