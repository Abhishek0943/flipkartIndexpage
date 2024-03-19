import React from 'react'
import styles from "./Footer.module.css"

function Footer() {
  return (
    <>
      <div className={styles.container} style={{ width: "100%", minHeight: "100px", backgroundColor: "#313131" }}>
        <div className={styles.ul}>
          <h6>About</h6>
          <p>contact us</p>
          <p>Careers</p>
          <p>Careers</p>
          <p>Careers</p>
          <p>Careers</p>
        </div>
        <div className={styles.ul}>
          <h6>About</h6>
          <p>contact us</p>
          <p>Careers</p>
          <p>Careers</p>
          <p>Careers</p>
          <p>Careers</p>
        </div><div className={styles.ul}>
          <h6>About</h6>
          <p>contact us</p>
          <p>Careers</p>
          <p>Careers</p>
          <p>Careers</p>
          <p>Careers</p>
        </div><div className={styles.ul}>
          <h6>About</h6>
          <p>contact us</p>
          <p>Careers</p>
          <p>Careers</p>
          <p>Careers</p>
          <p>Careers</p>
        </div><div className={styles.ul}>
          <h6>About</h6>
          <p>contact us</p>
          <p>Careers</p>
          <p>Careers</p>
          <p>Careers</p>
          <p>Careers</p>
        </div>
      </div>
      <div style={{ background: "black", padding: "20px" }}>
        <p style={{ textAlign: "center", color: "white", fontSize: ".8rem", fontWeight: "500" }}>Developed by <span style={{ color: "red" }}>Abhishek </span></p>
      </div>
    </>
  )
}

export default Footer
