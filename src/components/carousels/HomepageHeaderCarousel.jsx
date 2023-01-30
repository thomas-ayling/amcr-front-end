import HomepageCarouselSlides from '../../service/HomepageCarouselMockService';
import MainCarousel from './main-carousel/MainCarousel';
const HomepageHeaderCarousel = () => {
  <MainCarousel type='header-multi' slides={HomepageCarouselSlides} />;
};

export default HomepageHeaderCarousel;
