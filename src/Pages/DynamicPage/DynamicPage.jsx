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
                <h1>{category}</h1>
                <Link to="/catalogue">Back to catalogue</Link>
                <div className={pageStyles.box}>
                {data && data.map((item, id) => {
                if (item.category == category) {
                    return <ProductCard localID={id} name={item.name} quantityAvailable={item.quantityAvailable} />
                }
                })}
                </div>
            </div>


}

export default DynamicPage


