// firestore docs at https://firebase.google.com/docs/firestore

import { setDoc, doc, onSnapshot, collection, } from "firebase/firestore"
import { db } from "../config/firebase"

export const addItemtoCart = async (SKU) => {
    const update = doc(db, "sportsgear", String(SKU))
    setDoc(update, {quantityInCart : 1, inCart : true}, {merge: true});
}

export const updateQuantity = async (SKU, newAmount) => {
    const update = doc(db, "sportsgear", String(SKU))
    setDoc(update, {quantityInCart : newAmount}, {merge: true});
}

export const updateStockQuantity = async (SKU, newAmount) => {
    const update = doc(db, "sportsgear", String(SKU))
    setDoc(update, {quantityAvailable : newAmount}, {merge: true});
}

export const removeFromCart = async (SKU) => {
    const update = doc(db, "sportsgear", String(SKU))
    setDoc(update, {quantityInCart : 0, inCart : false}, {merge: true});
}

export const Favourited = async (SKU, change) => {
    const update = doc(db, "sportsgear", String(SKU))
    setDoc(update, {favourited : change}, {merge: true});
}

export const receiveDelivery = async (SKU, currentAvailable, deliveredAmount) => {
    const update = doc(db, "sportsgear", String(SKU))
    setDoc(update, {quantityAvailable : (currentAvailable + deliveredAmount)}, {merge: true});
}

// Let's see if we can make this work with automatic updates
export const subscribeToSportsgear = (callback) => {
    const collectionRef = collection(db, "sportsgear");
    const unsubscribe = onSnapshot(collectionRef, (querySnapshot) => {
        const collectionData = querySnapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
        });
        callback(collectionData);
    });
    return unsubscribe;
};



// This function exists only to initially set and then reset the database so I don't have to mess around creating and deleting 
// nearly 100 entries in the FireStore backend or pay for a premium service.
export const resetDatabase = () => {
    const categories = ["gloves", "helmets", "shoulderpads", "mouthguards", "shoes"]
    const colours = ["red", "white", "blue", "black"]
    const sizes = ["small", "medium", "large", "extra large"]
    const categoryCost = {
        "gloves" : 20,
        "helmets" : 80,
        "shoulderpads" : 200,
        "mouthguards" : 15,
        "shoes" : 40
    }
    const colourCost = {
        "red" : 5,
        "white" : 8,
        "blue" : 10,
        "black" : 15
    }
    const sizeCost = {
        "small" : 0,
        "medium" : 10,
        "large" : 20,
        "extra large" : 30
    }
    let id = 1
    
    categories.forEach((category) => {
        colours.forEach((colour) => {
            sizes.forEach((size) => {
                setDoc(doc(db, "sportsgear", String(id)), {
                    SKU : id,
                    name : `${size} ${colour} ${category}`,
                    category : category,
                    colour : colour,
                    size : size,
                    image : String(colour) + String(category),
                    favourited : false,
                    quantityInCart : 0,
                    quantityAvailable : 5,
                    inCart : false,
                    price : (categoryCost[category] + colourCost[colour] + sizeCost[size])
                })
                id++ 
            })
        })
    })

}