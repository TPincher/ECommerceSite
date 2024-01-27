import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { DataContext } from '../../context/DataContextProvider'
import ProductCard from '../../components/ProductCard/ProductCard'

const DynamicPage = () => {

    const pathVariables = useParams()
    const category = pathVariables.category
    // console.log(pathVariables)


    const {data} = useContext(DataContext)
    // console.log(data)



  return (
    <div>
        DynamicPage
        <p>This is a page about {category}</p>
        <label htmlFor="type">Search type:</label>
        <input type="text"></input>
        {data && data.map((item) => {
          if (category == item.category) {
            return <ProductCard SKU={item.SKU} name={item.name}/>
          }
        })}
    </div>
    
  )
}

export default DynamicPage