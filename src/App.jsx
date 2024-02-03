import Navbar from "./components/Navbar/Navbar"
import styles from './App.module.scss'
import ErrorPage from "./Pages/ErrorPage/Errorpage"
import HomePage from "./Pages/HomePage/HomePage"
import ContactPage from "./Pages/CataloguePage/CataloguePage"
import CheckoutCartPage from "./Pages/CheckoutCartPage/CheckoutCartPage"
import AdminPage from "./Pages/AdminPage/AdminPage"
import FavouritesPage from "./Pages/FavouritesPage/FavouritesPage"
import DynamicPage from "./Pages/DynamicPage/DynamicPage"
import { Route, Routes, BrowserRouter} from "react-router-dom"
import DataContextProvider from "./context/DataContextProvider"

function App() {

  return (
    <>
      <DataContextProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="*" element={<ErrorPage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/catalogue" element={<ContactPage />} />
              <Route path="/checkout" element={<CheckoutCartPage />} />
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/catalogue/:category" element={<DynamicPage />} />
              <Route path="/catalogue/favourites" element={<FavouritesPage />} />
            </Routes>
            <footer className={styles.footer}>
              <p className={styles.footer}>Sportsball Supplies - Australia's best bulk sportsgear supplier</p>
            </footer>
          </BrowserRouter>
      </DataContextProvider>
    </>
  )
}

export default App
