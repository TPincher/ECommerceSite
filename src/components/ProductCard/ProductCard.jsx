import React, { useState } from 'react'
import Modal from "../Modal/Modal"
import styles from "./ProductCard.module.scss"

const ProductCard = ( {SKU, name} ) => {

  const [modalSKU, setModalSKU] = useState(null)
  const [showModal, setShowModal] = useState(false)
    


  return (
    <div className={styles.SKUCard}>
      <p>{SKU}</p>
      <p>{name}</p>
      <button onClick={() => {
          setModalSKU(SKU)
          setShowModal(true)
        }}>More Info</button>
      <Modal showModal = {showModal} setShowModal = {setShowModal} SKU={SKU} modalSKU={modalSKU} setModalSKU={setModalSKU}/>
    </div>
  )
}

export default ProductCard