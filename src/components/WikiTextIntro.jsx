import React from 'react';
import TextIntro from '../components/shared-components/text-intro/TextIntro';
import WikiTextIntroService from '../service/WikiTextIntroService';
const WikiTextIntro = () => {
  return <TextIntro content={WikiTextIntroService} />;
};

export default WikiTextIntro;
