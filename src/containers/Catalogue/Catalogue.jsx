import React from 'react'
import { Link } from "react-router-dom";

const Catalogue = () => {

    const categories = ["favourites", "gloves", "helmets", "shoulderpads", "mouthguards", "shoes"]

  return (
    <>
        <div>
            Catalogue
        </div>
        <section>
            {categories.map((category, id) => {
                return <button><Link to={`./${category}`}>{category}</Link></button>
            })}
        </section>
    </>
  )
}

export default Catalogue