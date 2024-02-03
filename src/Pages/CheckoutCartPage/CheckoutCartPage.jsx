import React from 'react'
import CheckoutCart from '../../components/CheckoutCart/CheckoutCart'
import styles from "../GlobalBackground.module.scss"

const CheckoutCartPage = () => {
  return (
    <div className={styles.Background}>
      <CheckoutCart />
    </div>
  )
}

export default CheckoutCartPage