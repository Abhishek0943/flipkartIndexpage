import React from 'react'
import styles from "./Footer.module.css"

function Footer() {
  return (
    <>
      <div className={styles.container} style={{ width: "100%", minHeight: "100px", backgroundColor: "#313131", }}>
        <div className={styles.ul}>
          <h6>About</h6>
          <p>contact us</p>
          <p>About us</p>
          <p>Careers</p>
          <p>Flipkart Stories</p>
          <p>Press</p>
        </div>
        <div className={styles.ul}>
          <h6>Group Companies</h6>
          <p>Myntra</p>
          <p>Flipkart Wholesale</p>
          <p>Cleartrip</p>
          <p>Shopsy</p>
        </div><div className={styles.ul}>
          <h6>Help</h6>
          <p>payment</p>
          <p>Shipping</p>
          <p>Cancellation & Return
          </p>
          <p>FAQ</p>
          <p>Report Infringment</p>
        </div><div className={styles.ul}>
          <h6>Consumer Policy</h6>
          <p>Cancellation & Return</p>
          <p>Term of use</p>
          <p>Security</p>
          <p>Privacy</p>
          <p>Sitemap</p>
          <p>EPR Compliance</p>
        </div><div className={styles.ul}>
          <h6>Mail us</h6>
          <p>Flipkart Internet Private Limited, </p>
          <p>Buildings Alyssa, Begonia & </p>
          <p>Clove Embassy Tech Village, </p>
          <p>Outer Ring Road, Devarabeesanahalli Village, </p>
          <p>Bengaluru, 560103, </p>
          <p>Karnataka, India</p>
        </div>
        <div className={styles.ul}>
          <h6>Registered Office Address:</h6>
          <p>Flipkart Internet Private Limited, </p>
          <p>Buildings Alyssa, Begonia & </p>
          <p>Clove Embassy Tech Village, </p>
          <p>Outer Ring Road, Devarabeesanahalli Village, </p>
          <p>Bengaluru, 560103, </p>
          <p>Karnataka, India</p>
          <p>CIN : U51109KA2012PTC066107 </p>
        </div>
      </div>
      <div style={{ background: "black", padding: "20px" }}>
        <p style={{ textAlign: "center", color: "white", fontSize: ".8rem", fontWeight: "500" }}>Developed by <span style={{ color: "red" }}>Abhishek </span></p>
      </div>
    </>
  )
}

export default Footer
