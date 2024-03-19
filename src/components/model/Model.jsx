import React from 'react'
import styles from "./Model.module.css"

function Model({ onMouseEnter }) {
    return (
        <div className={styles.model} onMouseEnter={onMouseEnter}>
        </div>
    )
}

export default Model
