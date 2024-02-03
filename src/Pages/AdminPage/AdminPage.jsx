import { DataContext } from '../../context/DataContextProvider'
import { receiveDelivery, resetDatabase} from '../../../services/data'
import { useContext } from 'react'
import styles from "../GlobalBackground.module.scss"

const AdminPage = () => {

  const {data} = useContext(DataContext)
  console.log(data)

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
        AdminPage
        <p>This button is a hard reset on the database - all items will have a quantity value of 5. Please do not click it for fun. </p>
        <button onClick={handleReset}>Reset Database</button>

        <p>This button will receive a delivery of stock - between 1 and 3 items will be added to every SKU</p>
        <button onClick={handleReceive}>Receive stock delivery</button>
    </div>


  )
}

export default AdminPage