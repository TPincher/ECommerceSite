import { useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { DataContext } from '../../context/DataContextProvider'
import ProductCard from '../../components/ProductCard/ProductCard'
import styles from "../GlobalBackground.module.scss"
import pageStyles from "./DynamicPage.module.scss"

const DynamicPage = () => {

    const pathVariables = useParams()
    const category = pathVariables.category

    const {data} = useContext(DataContext)

    return <div className={styles.Background}>
                <div className={pageStyles.titleBox}>
                    <h1>{category.toUpperCase()}</h1>
                    <Link to="/catalogue">Back to catalogue</Link>
                </div>
                <div className={pageStyles.box}>
                {data && data.map((item, id) => {
                if (item.category == category) {
                    return <ProductCard key={id} localID={id} name={item.name} quantityAvailable={item.quantityAvailable} inCart={item.inCart} />
                }
                })}
                </div>
            </div>


}

export default DynamicPage


