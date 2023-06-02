import React from 'react'
import Styles from  '../../styles/Main.module.css'


const Main = () => {
  return (
    <div>
      <div className={Styles.mainC}>
        <div className={Styles.title}>
            <h2>Staking Dapp</h2>
        </div>

        <div className={Styles.stakeContainer}>
        <div className={Styles.staket}>
                <h3>Token</h3>
                <h3>Liquidity</h3>
                <h3>APR</h3>
                <h3>Reward</h3>
                <h3>Earned</h3>
                         
           </div>
            <div className={Styles.first}>
                <h3>GMEE-ETH</h3>
                <h3>$56M</h3>
                <h3>159.6%</h3>
                <h3>$400</h3>
                <span className={Styles.am}><h3>2.6789</h3></span>
                         
           </div>
           <hr className={Styles.line} />
           <div className={Styles.second}>
            <div className={Styles.deposit}>
              <h4>Your deposit</h4>
              <div className={Styles.amount}>
              <h3>24,567.7</h3>
              <h4>$204.67</h4>
              </div>
            </div>

            <div className={Styles.share}>
              <h4>Share</h4>
              <div className={Styles.percent}>
              <h3>0.0007%</h3>
              </div>
            </div>

            <div className={Styles.earnings}>
              <h4>Earnings</h4>
              <div className={Styles.earn}>
              <h3>2.6789</h3>
              <h4>$20.56</h4>
              </div>
            </div>
           </div>

           <div className={Styles.third}>
            <input type="number"  className={Styles.liquid} placeholder='Enter amount'/>
            <button className={Styles.add}>Add</button>
           </div>
          </div>
      </div>
    </div>
  )
}

export default Main
