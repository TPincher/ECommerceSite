import { useState, useContext } from 'react'
import Modal from "../Modal/Modal"
import styles from "./ProductCard.module.scss"
import { DataContext } from '../../context/DataContextProvider'

const ProductCard = ( {localID, name, quantityAvailable} ) => {

  const [showModal, setShowModal] = useState(false)
  const {data} = useContext(DataContext)
    
  const imageString = "/src/assets/" + data[localID].image + ".jpg"

  return (
    <div className={styles.ProductCard}>
      <p>{name}</p>
      <img src={imageString} alt="productImage" height="100" width="200"/>
      {quantityAvailable > 0 && <p>{quantityAvailable} left in stock</p>} 
      {!quantityAvailable && <p className={styles.outOfStock}>This item is currently out of stock</p>} 
      {quantityAvailable > 0 && <button onClick={() => {
          setShowModal(true)
        }}>More Info</button>}
      <Modal showModal = {showModal} setShowModal = {setShowModal} localID={localID} />
    </div>
  )

}

export default ProductCard


