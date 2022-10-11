import React from 'react'
import Steps from '../steps/Steps'
import styles from './_applications.module.scss'
import Arrow from "../../assets/arrow.svg"

const Applications = () => {
  return (
    <section className={styles.applications} id="applications">
        <h3 className={styles.heading}>Follow these Steps To Use Our Application</h3>
        <div className={styles.stepsWrapper}>
            <Steps title="Sign Up" desc={`Click on the "Watch Video" button below to see how sign up on Hashgreed`}/>
            <img src={Arrow} alt="arrow" className={styles.arrow}/>
            <Steps title="Sign Up" desc={`Click on the "Watch Video" button below to see how sign up on Hashgreed`}/>
            <img src={Arrow} alt="arrow" className={`${styles.arrow} ${styles.invert}`}/>
            <Steps title="Sign Up" desc={`Click on the "Watch Video" button below to see how sign up on Hashgreed`}/>
        </div>
        <button className={styles.button}>Watch Video</button>
    </section>
  )
}

export default Applications