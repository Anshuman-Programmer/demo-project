
import React from 'react'
import styles from './_hero.module.scss'
import Nft from "../../assets/nft-card.png"

const Hero = () => {
  return (
    <section className={styles.hero} id='hero'>
      <div className={styles.left}>
        <h2 className={styles.heading}>Buy and Sell with Peace of Mind</h2>
        <p className={styles.paragraph}>For creators, shoppers, crypto defi natives, one platform for all, At Africa's First NFT Marketplace</p>
        <div style={{ display: "flex", marginBottom: "3rem" }}>
          <button className={styles.leftButton}>Start Now</button>
          <button className={styles.rightButton}>Explore HashGreed</button>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className={styles.imageWrapper}>
            <img className={styles.image} src='https://images-platform.99static.com//Fzoxy21wSAK-bbodwmoC-4B5cJ0=/0x0:2000x2000/fit-in/500x500/99designs-contests-attachments/118/118191/attachment_118191467' alt='profile'/>
            <img className={styles.image} src='https://images-platform.99static.com//Fzoxy21wSAK-bbodwmoC-4B5cJ0=/0x0:2000x2000/fit-in/500x500/99designs-contests-attachments/118/118191/attachment_118191467' alt='profile'/>
            <img className={styles.image} src='https://images-platform.99static.com//Fzoxy21wSAK-bbodwmoC-4B5cJ0=/0x0:2000x2000/fit-in/500x500/99designs-contests-attachments/118/118191/attachment_118191467' alt='profile'/>
            <img className={styles.image} src='https://images-platform.99static.com//Fzoxy21wSAK-bbodwmoC-4B5cJ0=/0x0:2000x2000/fit-in/500x500/99designs-contests-attachments/118/118191/attachment_118191467' alt='profile'/>
          </div>
          <p className={styles.follower}>250k+ people use Hashgreed</p>
        </div>
      </div>
      <img className={styles.heroImage} src={Nft} alt="hero"/>
    </section>
  )
}

export default Hero