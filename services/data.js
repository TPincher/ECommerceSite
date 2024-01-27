// firestore docs at https://firebase.google.com/docs/firestore

import { collection, getDoc, getDocs, setDoc, doc, addDoc, writeBatch } from "firebase/firestore"
import { db } from "../config/firebase"

export const getAllData = async () => {
    const querySnapshot = await getDocs(collection(db, "sportsgear"));
    const dataToReturn = querySnapshot.docs.map((doc) => {
        return {
            id : doc.id,
            ...doc.data()
        }
    })
    return dataToReturn
}


export const getModalData = async (SKU) => {
    console.log(SKU)
    const singleDoc = doc(db, "sportsgear", `${SKU}`)
    const singleDocSnap = await getDoc(singleDoc);
    const modalReturn = singleDocSnap.data()
      return {
        id : modalReturn.id,
        category : modalReturn.category,
        colour : modalReturn.colour,
        size : modalReturn.size,
        image : modalReturn.image,
        favourited : modalReturn.favourited,
        inCart : modalReturn.inCart,
        quantity : modalReturn.quantity,
        price : modalReturn.price,
      }
}



// This function exists only to initially set and then reset the database so I don't have to mess around creating and deleting 
// nearly 100 entries in the FireStore backend or pay for a premium service.
export const resetDatabase = () => {
    const categories = ["gloves", "helmets", "shoulderpads", "mouthguards", "shoes"]
    const colours = ["red", "white", "blue", "black"]
    const sizes = ["small", "medium", "large", "extra large"]
    let id = 1
    const array = []
    
    categories.forEach((category) => {
        colours.forEach((colour) => {
            sizes.forEach((size) => {
                setDoc(doc(db, "sportsgear", String(id)), {
                    SKU : id,
                    name : `${size} ${colour} ${category}`,
                    category : category,
                    colour : colour,
                    size : size,
                    image : "notYetSet",
                    favourited : false,
                    inCart : false,
                    quantity : 5,
                    price : 49.95,
                })
                id++ 
            })
        })
    })
    console.log(array)
}