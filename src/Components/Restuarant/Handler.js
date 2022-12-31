import React from 'react'
import styles from './Handler.module.css'

function Handler({ items }) {
  return (
    <>
    {items.map((curr)=>{
      const{id, name, image, description, price} = curr;
      return(
        <>
        <div className={styles.wrapper} key={id}>
        <div className={styles.photo}>
          <img src={image}/>
        </div>
        <p className={styles.name}>{id} {name}</p>
        <div className={styles.border}></div>
        <div className={styles.info}>{description}</div>
        <div className={styles.bottom}>
        <button className={styles.button}>Order Now {price}</button>
        </div>
      </div>
      </>
      )
    })}  
    </>
  )
}

export default Handler