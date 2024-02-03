import { DataContext } from '../../context/DataContextProvider'
import { useContext } from 'react'
import CheckoutItem from '../CheckoutItem/CheckoutItem'
import { removeFromCart, updateStockQuantity } from '../../../services/data'
import styles from "./CheckoutCart.module.scss"

const CheckoutCart = () => {

  const {data} = useContext(DataContext)
  const checkoutArray = []
  const checkoutQtyArray = []
  let cartTotal = []

  const checkout = (event) => {
    event.preventDefault()
    checkoutArray.map((itemToRemove, id) => {
      updateStockQuantity(checkoutArray[id], checkoutQtyArray[id])
      removeFromCart(checkoutArray[id])
    })
  }

  return (
      <form className={styles.checkoutContainer}>
        <h1>Checkout Cart</h1>
          {data && data.map((itemInCart, id) => {
            if (itemInCart.inCart) {
              checkoutArray.push(itemInCart.SKU)
              checkoutQtyArray.push(itemInCart.quantityAvailable - itemInCart.quantityInCart)
              cartTotal.push(Number(itemInCart.quantityInCart * itemInCart.price))
              return(
                <CheckoutItem itemInCart={itemInCart.name} localID={id} />
                )
            }
            })
          }
          <p>Cart total ${cartTotal.reduce((acc, cur) => acc + cur, 0).toFixed(2)}</p>
          <button onClick={checkout}> Complete order! </button>
      </form>
  )

}

export default CheckoutCart



