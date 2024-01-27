import React, { useEffect, useState } from 'react'
import styles from "./Modal.module.scss"
import { getModalData } from '../../../services/data'

const Modal = ({showModal, setShowModal, SKU, modalSKU, setModalSKU}) => {

    const [modalData, setModalData] = useState(null)

    useEffect(() => {
        getModalData(SKU).then((dataPoint) => {
            setModalData(dataPoint)
        })
    }, [modalSKU])
    
    return (
        showModal && 
        <dialog open={showModal}>
            <div className={styles.modal}>
                <img src="../../../assets/icons8-star-96.png" alt="favourite-button" height="100" width="100" />
                <p>{modalData.size}</p>
                <p>{modalData.category}</p>
                <p>{modalData.colour}</p>
                <p>{modalData.image}</p>
                <p>{modalData.favourited}</p>
                <p>{modalData.inCart}</p>
                <p>{modalData.quantity}</p>
                <p>{modalData.price}</p>
                <button onClick={() => {
                    setModalSKU("")
                    setShowModal(false)
                }}>Close
                </button>
            </div>
        </dialog>
      )
}

export default Modal