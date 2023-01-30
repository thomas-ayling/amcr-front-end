import React from 'react';
import TextIntro from '../components/shared-components/text-intro/TextIntro';
import HomepageTextIntro from '../service/HomepageTextIntroService';

const HomepageIntro = () => {
  return <TextIntro content={HomepageTextIntro} />;
};

export default HomepageIntro;
