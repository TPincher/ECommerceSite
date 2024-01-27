import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <main>
            <h1>404: Page not found!</h1>
            <Link to="/">Back to Homepage</Link>
        </main>
      )
    }

export default ErrorPage