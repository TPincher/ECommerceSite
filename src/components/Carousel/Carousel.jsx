import { useState, useEffect } from 'react';
import styles from "./Carousel.module.scss";
import { useNavigate } from 'react-router-dom';


const Carousel = ({ images, interval = 3000 }) => {

    useEffect(() => {
      const autoPlayInterval = setInterval(nextSlide, interval);
      return () => {
        clearInterval(autoPlayInterval);
      };
    }, [interval]);

  const [activeIndex, setActiveIndex] = useState(0);
  const nextSlide = () => {

    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const navigate = useNavigate()
  const handleClick = () => {
      let path = "/catalogue/shoes";
      navigate(path);
  }


  return (
    <>
      <div className={styles.carouselBox}>
        <img src={images[(activeIndex === 0 ? activeIndex+3 : activeIndex-1)]} alt={`Slide ${activeIndex}`} onClick={handleClick} className={styles.minorCarousel} />
        <img src={images[activeIndex]} alt={`Slide ${activeIndex}`} onClick={handleClick} className={styles.carousel} />
        <img src={images[((activeIndex+1) === 4 ? activeIndex-3 : activeIndex+1)]} alt={`Slide ${activeIndex}`} onClick={handleClick} className={styles.minorCarousel} />
        <h4 className={styles.salesCopy}>Sports shoes clearance on now!</h4>
      </div>
    </>
  );
};
export default Carousel;