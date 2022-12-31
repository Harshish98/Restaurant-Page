import React, { useState } from 'react';
import styles from './Restaurant.module.css';
import Items from './Items';
import Handler from './Handler';

function Restaurant() {
  
  const[items,setItems] = useState(Items);
  
  const filterList =(category)=>{
    const finalData = Items.filter((curr)=>{
     return curr.category === category;
    });
    setItems(finalData);
  };
  return (
    <>
     <h1>Suncity Restaurant</h1>
     <h3>Our Menu</h3>
    <nav className={styles.navbar}>
        <div className={styles.list}>
            <button className={styles.btn} onClick={()=> filterList("breakfast")}>Breakfast</button>
            <button className={styles.btn} onClick={()=> filterList("lunch")}>Lunch</button>
            <button className={styles.btn} onClick={()=> filterList("evening")}>Evening</button>
            <button className={styles.btn} onClick={()=> filterList("dinner")}>Dinner</button>
            <button className={styles.btn} onClick={()=> setItems(Items)}>All</button>
        </div>
    </nav>
    <div className={styles.card}>
     <Handler items={items}/>
     </div>
    </>
  )
}

export default Restaurant;