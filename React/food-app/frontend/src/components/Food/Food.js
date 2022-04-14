import React from 'react'
import styles from './Food.module.css'

const Food = (props) => {
  return (
      <li className={styles.foodbox}>
        <div className={styles.foodItem}>
          <p className={styles.name}>{props.name}</p>
          <p className={styles.desc}>{props.desc}</p>
          <p>$ { props.price }</p>
        </div>
      </li>
  )
}

export default Food