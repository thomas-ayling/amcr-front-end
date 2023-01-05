import Image1 from '../assets/images/homepage-carousel/Image1.png'
import Image2 from '../assets/images/homepage-carousel/Image2.png'
import Image3 from '../assets/images/homepage-carousel/Image3.png'
import Image4 from '../assets/images/homepage-carousel/Image4.png'

const getCaseStudyData = (id) => {
  switch (id) {
    case 1:
      return {
        headline: 'Case study about machine learning algorithms',
        explanation: [
          Image1,
          'text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1',
          Image2,
          'text2 text2 text2 text2 text2 text2 text2 text2 text2 text2 text2 text2 text2 text2',
          Image3,
          'text3 text3 text3 text3 text3 text3 text3 text3 text3 text3 text3 text3 text3 text3',
          Image4,
          'text4 text4 text4 text4 text4 text4 text4 text4 text4 text4 text4 text4 text4 text4',
        ],
      };
    default:
      return { headline: 'Default', explanation: ['default', 'default'] };
  }
};

export { getCaseStudyData };
