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
        <h1>CHECKOUT</h1>
        <div className={styles.box}>
          {data && data.map((itemInCart, id) => {
            if (itemInCart.inCart) {
              // Shoehorned in to get the total cost working. This can be extracted down the road.
              checkoutArray.push(itemInCart.SKU)
              checkoutQtyArray.push(itemInCart.quantityAvailable - itemInCart.quantityInCart)
              cartTotal.push(Number(itemInCart.quantityInCart * itemInCart.price))
              return(
                <CheckoutItem key={id} itemInCart={itemInCart.name} localID={id} />
                )
            }
            })
          }
            {checkoutQtyArray.length > 0
                        ?<div className={styles.totals}>
                          <h2>Cart total ${cartTotal.reduce((acc, cur) => acc + cur, 0).toFixed(2)}</h2>
                          <button onClick={checkout} className={styles.button}> Complete order! </button>
                        </div>
                        :<h2 className={styles.emptyCart}>No items in cart</h2>
            }
          </div>
      </form>
  )

}

export default CheckoutCart



