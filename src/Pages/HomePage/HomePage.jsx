import styles from "./HomePage.module.scss"
import Carousel from '../../components/Carousel/Carousel'


const HomePage = () => {

  const images = [
    '/src/assets/redshoes.jpg',
    '/src/assets/blueshoes.jpg',
    '/src/assets/blackshoes.jpg',
    '/src/assets/whiteshoes.jpg'
  ];

  return (
    <div className={styles.HomePage}>
      <Carousel images={images} />  
    </div>

  )
}

export default HomePage