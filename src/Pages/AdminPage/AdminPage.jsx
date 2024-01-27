import React from 'react'
import { resetDatabase} from '../../../services/data'

const AdminPage = () => {

const handleClick = () => {
    resetDatabase()

}

const addTest = () => {
    console.log(test)
}

  return (
    <div>
        AdminPage
        <p>This button is a hard reset on the database - all items will have a quantity value of 5. Please do not click it for fun. </p>
        <button onClick={handleClick}>Reset Database</button>
    </div>


  )
}

export default AdminPage