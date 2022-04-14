import React from 'react';
import Food from '../Food/Food';
import styles from './Foodlist.module.css'

const FoodList = (props) => {
  return (
      <ul className={styles.box}>
          {
              props.foods.map((food) => {
                  return <Food
                      key={food._id}
                      name={food.name}
                      price={food.price}
                      desc={food.desc}
                  />
              })
          }
    </ul>
  )
}

export default FoodList;