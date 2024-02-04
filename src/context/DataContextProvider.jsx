import { createContext, useEffect, useState } from 'react'
// import { getAllData } from '../../services/data'
import { QuerySnapshot, collection, onSnapshot } from 'firebase/firestore'
import { subscribeToSportsgear } from '../../services/data'
import { db } from '../../config/firebase'

export const DataContext = createContext(null)


const DataContextProvider = ({ children }) => {

    const [data, setData] = useState(null)
    
    useEffect(() => {
      const unsubscribe = onSnapshot(
        collection(db, "sportsgear"),
        (querySnapshot) => {
          const dataFromDatabase = querySnapshot.docs.map((doc) => {
            return {id: doc.id, ...doc.data()};
          });

          const copiedData = [...dataFromDatabase]
          const sortedData = copiedData.sort(function(a, b) {
          var keyA = a.SKU,
            keyB = b.SKU;
          if (keyA < keyB) return -1;
          if (keyA > keyB) return 1;
          return 0;
        });

          setData(sortedData);
        }
      );

      return () => {
        unsubscribe();
      }
    }, [])

  return (
    <DataContext.Provider value={{data}}>{children}</DataContext.Provider>
  )
}

export default DataContextProvider