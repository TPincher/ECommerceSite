import { useContext } from 'react'
import styles from "./Modal.module.scss"
import { Favourited, addItemtoCart } from '../../../services/data'
import { DataContext } from '../../context/DataContextProvider'
import favIcon from "../../assets/star.png"
import notFavIcon from "../../assets/blackstar.png"
import * as images from "../../assets/imports"


const Modal = ({ showModal, setShowModal, localID }) => {

const {data} = useContext(DataContext)

const handleAddToCart = () => {
    addItemtoCart(data[localID].SKU)
    setShowModal(false)
    }

const alternateFavourite = () => {
    Favourited(data[localID].SKU, !data[localID].favourited)
}

console.log(images)

const starColour = data[localID].favourited
    ? favIcon
    : notFavIcon

const imageString = "/src/assets/" + data[localID].image + ".jpg"

return (
    showModal && 
    <dialog className={styles.modalBox} open={showModal}>
        <div className={styles.modal}>
            <button><img src={starColour} alt="favbutton" onClick={alternateFavourite} height="50" width="50" /></button>
            <img src={imageString} alt="productImage" height="300" width="400"/>
            <div>
                <h1> {data[localID].name}</h1>
                <p>Item number: {data[localID].SKU}</p>
            </div>
            <div>
                <p>{data[localID].quantityAvailable} left in stock</p>
                <p>${data[localID].price}.00 per unit</p>
            </div>
            {data[localID].inCart
              ? <p>Item already in cart</p>
              : <button onClick={handleAddToCart} className={styles.cartButton}>Add to cart</button>
            }

            <button onClick={() => {setShowModal(false)
                }}>Close
            </button>
        </div>
    </dialog>
  )


}

export default Modal


