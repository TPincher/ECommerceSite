import { DataContext } from '../../context/DataContextProvider'
import { receiveDelivery, resetDatabase} from '../../../services/data'
import { useContext } from 'react'
import styles from "../GlobalBackground.module.scss"
import pageStyles from "./AdminPage.module.scss"

const AdminPage = () => {

  const {data} = useContext(DataContext)

const handleReset = () => {
    resetDatabase()
}

const handleReceive = () => {
  data.map((item) => {
    receiveDelivery(item.id, item.quantityAvailable, Math.floor(Math.random()*3+1))
  })
}


  return (
    <div className={styles.Background}>
      <div className={pageStyles.pageText}>
          <h1>Admin commands - not for customer use</h1>
          <p>This button is a hard reset on the database - all items will have a quantity value of 5. Please do not click it for fun. </p>
          <button onClick={handleReset}>Reset Database</button>

          <p>This button will receive a delivery of stock - between 1 and 3 items will be added to every database SKU</p>
          <button onClick={handleReceive}>Receive stock delivery</button>
        </div>
    </div>


  )
}

export default AdminPage