import { updateQuantity, removeFromCart } from '../../../services/data'
import { DataContext } from '../../context/DataContextProvider'
import { useContext} from 'react'
import styles from "./CheckoutItem.module.scss"

const CheckoutItem = ( {localID} ) => {

    const {data} = useContext(DataContext)
    const localData = data[localID]
    const imageString = "/src/assets/" + data[localID].image + ".jpg"

    const decrementButton = (event) => {
      event.preventDefault()
      if (localData.quantityInCart > 1) {
         updateQuantity(localData.SKU, localData.quantityInCart - 1)
         localData.quantityInCart -= 1
      }
    }

    const incrementButton = (event) => {
      event.preventDefault()
      if (localData.quantityInCart < localData.quantityAvailable) {
        updateQuantity(localData.SKU, localData.quantityInCart + 1)
      }
    }

    const removeButton = (event) => {
        event.preventDefault()
        removeFromCart(localData.SKU)
    }


    return (
        <div className={styles.cartItem}>
          <div>
            <h3>{localData.name}</h3>
            <p>Total cost ${(localData.quantityInCart * localData.price).toFixed(2)}</p>
            <button onClick={decrementButton} disabled={localData.quantityInCart === 1}>-</button>
                {localData.quantityInCart}
            <button onClick={incrementButton} disabled={localData.quantityInCart === localData.quantityAvailable}>+</button>
            <button onClick={removeButton}>Remove from cart</button>
            <p>{localData.quantityAvailable} units available</p>
          </div>
          <div>
            <img src={imageString} alt="productImage" height="150px" width="200px" />
          </div>
        </div>
)
}

export default CheckoutItem
