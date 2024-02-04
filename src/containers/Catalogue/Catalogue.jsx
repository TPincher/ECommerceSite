import { Link } from "react-router-dom";
import styles from "./Catalogue.module.scss"
import { DataContext } from '../../context/DataContextProvider'
import { useContext } from 'react';

const Catalogue = () => {

    const {data} = useContext(DataContext)
    const categories = ["favourites"]

    data.map((entry) => {
        if (!categories.includes(entry.category)) {
            categories.push(entry.category)
        }
    })

    return (
        <div className={styles.outerBox}>
            <section>
                {categories.map((category, index) => {
                    const classes = [styles.categoryCard];
                    // extract this logic into it's own function at some point.
                    const number = index + 1;
                    if (number % 2 === 1) classes.push(styles.left);
                    else classes.push(styles.right);
                    // change this link to be the whole button, not just the text
                     return <Link to={`./${category}`} key={index}>
                                <div className={classes.join(" ")}>
                                    <h2>{category.toUpperCase()}</h2>
                                </div>
                            </Link>
                   })}
             </section>
        </div>
  )
}

export default Catalogue
