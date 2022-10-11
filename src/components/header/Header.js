
import React, { useState } from 'react'
import styles from './_header.module.scss'

const Header = () => {

  const [activeNav, setactiveNav] = useState("home")

  const handleClick = (e) => {
    setactiveNav(e.target.id)
  }

  return (
    <nav className={styles.header}>
      <h3 className={styles.logo}>
        HashGreed
      </h3>
      <ul className={styles.links}>
        <li id="home" className={`${styles.link} ${activeNav === "home" && styles.active}`} onClick={handleClick}>Home</li>
        <li id="about" className={`${styles.link} ${activeNav === "about" && styles.active}`} onClick={handleClick}>About</li>
        <li id="faqs" className={`${styles.link} ${activeNav === "faqs" && styles.active}`} onClick={handleClick}>FAQs</li>
        <li id="usecases" className={`${styles.link} ${activeNav === "usecases" && styles.active}`} onClick={handleClick}>Use Cases</li>
      </ul>
      <button className={styles.button}>
        Account
      </button>
    </nav>
  )
}

export default Header