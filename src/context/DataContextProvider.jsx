import { createContext, useEffect, useState } from 'react'
import { getAllData } from '../../services/data'

export const DataContext = createContext(null)


const DataContextProvider = ({ children }) => {

    const [data, setData] = useState(null)
    
    useEffect(() => {
        getAllData()
        .then((dbData) => {
            setData(dbData)
          })
    }, [])

  return (
    <DataContext.Provider value={{data}}>{children}</DataContext.Provider>
  )
}

export default DataContextProvider