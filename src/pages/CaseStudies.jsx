import { React } from 'react';
import { useState, useEffect } from 'react';

import CaseStudyCarousel from '../components/case-studies-carousel/CaseStudyCarousel';
import ContactComponent from '../components/contact-component/ContactComponent';
import MainCarousel from '../components/main-carousel/MainCarousel';

import { get } from '../service/CaseStudiesService';

const CaseStudies = () => {
  const [carouselLoaded, setCarouselLoaded] = useState(false);
  const [headerCarouselLoaded, setHeaderCarouselLoaded] = useState(false);
  const [carouselData, setCarouselData] = useState();
  const [headerCarouselData, setHeaderCarouselData] = useState();
  const [requestStatus, setRequestStatus] = useState();

  const [overviews, setOverviews] = useState([]);
  const [titles, setTitles] = useState([]);
  const [length, setLength] = useState();

  useEffect(() => {
    get(setCarouselData, setCarouselLoaded, setHeaderCarouselData, setHeaderCarouselLoaded, setRequestStatus, requestStatus);
    if (requestStatus === 'error-404') console.error('Case study with id ${id} could not be found');
  }, []);

  useEffect(() => {
    if (carouselLoaded) {
      setOverviews(carouselData.map((item) => item.overview));
      setTitles(carouselData.map((item) => item.title));
      setLength(carouselData.length);
    }
  }, [carouselLoaded]);

  return (
    <>
      {headerCarouselLoaded && <MainCarousel type='header' slides={headerCarouselData} isLink={true} classNames='case-study-header-carousel' />}
      {carouselLoaded && <CaseStudyCarousel overviews={overviews} titles={titles} length={length} pageData={carouselData} />}
      <ContactComponent feedbackType='case-study' />
    </>
  );
};

export default CaseStudies;
