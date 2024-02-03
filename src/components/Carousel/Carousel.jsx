import { useState, useEffect } from 'react';
import styles from "./Carousel.module.scss";


const Carousel = ({ images, interval = 4000 }) => {

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


  return (
    <div className={styles.carouselBox}>
      <img src={images[(activeIndex === 0 ? activeIndex+5 : activeIndex-1)]} alt={`Slide ${activeIndex}`} className={styles.minorCarousel} />
      <img src={images[activeIndex]} alt={`Slide ${activeIndex}`} className={styles.carousel} />
      <img src={images[((activeIndex+1) === 6 ? activeIndex-5 : activeIndex+1)]} alt={`Slide ${activeIndex}`} className={styles.minorCarousel} />
    </div>
  );
};
export default Carousel;