import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../../context/DataContextProvider'
import ProductCard from '../../components/ProductCard/ProductCard'
import styles from "../GlobalBackground.module.scss"
import pageStyles from "../DynamicPage/DynamicPage.module.scss"

const FavouritesPage = () => {

    const {data} = useContext(DataContext)
    const favArray = []

    return <div className={styles.Background}>
                <Link to="/catalogue">Back to catalogue</Link>
                <div className={pageStyles.box}>
                {data && data.map((item, id) => {
                if (item.favourited === true) {
                    favArray.push(id)
                    return <ProductCard localID={id} name={item.name} quantityAvailable={item.quantityAvailable} />
                    }    
                })
                }
                {favArray.length === 0  && <p>No favourites to display</p>}
                </div>
            </div>


}

export default FavouritesPage