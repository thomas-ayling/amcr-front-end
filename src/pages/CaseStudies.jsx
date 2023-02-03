import { React } from 'react';
import { useState, useEffect } from 'react';

import CaseStudyCarousel from './../components/carousels/case-studies-carousel/CaseStudyCarousel';
import ContactComponent from '../components/contact-component/ContactComponent';
import MainCarousel from '../components/carousels/main-carousel/MainCarousel';
import LoaderGif from '../components/shared-components/LoaderGif';

import { get } from '../service/CaseStudiesService';
import { runToastNotification } from '../components/toast-notification/ToastNotification';

const CaseStudies = () => {
  const [carouselLoaded, setCarouselLoaded] = useState(false);
  const [headerCarouselLoaded, setHeaderCarouselLoaded] = useState(false);
  const [carouselData, setCarouselData] = useState();
  const [headerCarouselData, setHeaderCarouselData] = useState();
  const [requestStatus, setRequestStatus] = useState();

  useEffect(() => {
    get(setCarouselData, setCarouselLoaded, setHeaderCarouselData, setHeaderCarouselLoaded, setRequestStatus);
  }, []);

  useEffect(() => {
    if (requestStatus === 'error-404') runToastNotification('Case study could not be found', 'error');
  }, [requestStatus]);

  if (headerCarouselLoaded && carouselLoaded) {
    return (
      <>
        <MainCarousel type='header-multi' slides={headerCarouselData} isLink={true} classNames='case-study-header-carousel' />
        <CaseStudyCarousel pageData={carouselData} />
        <ContactComponent feedbackType='case-study' />
      </>
    );
  }
  if (!headerCarouselLoaded || !carouselLoaded) {
    return <LoaderGif />;
  }
};

export default CaseStudies;
