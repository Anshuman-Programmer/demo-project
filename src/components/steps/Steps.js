import React from 'react'
import styles from './_steps.module.scss'
import money from "../../assets/money.png"

const Steps = ({title, desc}) => {
  return (
    <div className={styles.steps}>
        <div className={styles.iconWrapper}>
          <img className={styles.icon} src={money} alt=""/>
        </div>
        <h5 className={styles.heading}>{title}</h5>
        <p className={styles.describe}>{desc}</p>
    </div>
  )
}

export default Steps