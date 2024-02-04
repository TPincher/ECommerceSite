import { Link } from 'react-router-dom'
import styles from "../GlobalBackground.module.scss"

const ErrorPage = () => {
    return (
        <main className={styles.Background}>
            <h1>404: Page not found!</h1>
            <Link to="/">Back to Homepage</Link>
        </main>
      )
    }

export default ErrorPage