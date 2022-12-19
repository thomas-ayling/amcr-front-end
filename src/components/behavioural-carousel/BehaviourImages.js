import Integrity from '../../resources/behaviour-carousel-images/Integrity.avif';
import Openness from '../../resources/behaviour-carousel-images/Openness.jpg';
import Teamwork from '../../resources/behaviour-carousel-images/Teamwork.jpg';
import Innovation from '../../resources/behaviour-carousel-images/Innovation.avif';

const IntegrityDescription = [
  '\u2022 We do what we say we will do',
  <br />,
  <br />,
  '\u2022 We tell the truth',
  <br />,
  <br />,
  "\u2022 We don't make empty promises",
  <br />,
  <br />,
  '\u2022 We align to business value',
];

const OpennessDescription = [
  '\u2022 We can always explain our decisions',
  <br />,
  <br />,
  '\u2022 We accept when others do things better',
  <br />,
  <br />,
  '\u2022 We acknowledge failure',
  <br />,
  <br />,
  '\u2022 We share our knowledge',
];

const TeamworkDescription = [
  '\u2022 We work to build an inclusive environment',
  <br />,
  <br />,
  '\u2022 Collaboration is focussed',
  <br />,
  <br />,
  '\u2022 We emphasise the team over the individual',
  <br />,
  <br />,
  '\u2022 Colleague progression',
  <br />,
  <br />,
  '\u2022 We are courageous',
  <br />,
  <br />,
  '\u2022 A respectful environment',
];

const InnovationDescription = [
  '\u2022 Efficiency',
  <br />,
  <br />,
  '\u2022 Operational design',
  <br />,
  <br />,
  '\u2022 Build and develop talent',
  <br />,
  <br />,
  '\u2022 GlobalLogic knowledge',
  <br />,
  <br />,
  '\u2022 Research',
  <br />,
  <br />,
  '\u2022 Experimentation',
];

const behaviourImages = [
  {
    image: Integrity,
    title: 'Integrity',
    overview: 'We have values at GlobalLogic that we all uphold on our day-to-day routine.',
    description: IntegrityDescription,
  },
  {
    image: Openness,
    title: 'Openness',
    overview: 'In the UK&I Engineering Center, we need to define the behaviours that embody the GlobalLogic values.',
    description: OpennessDescription,
  },
  {
    image: Teamwork,
    title: 'Teamwork',
    overview: 'How we demonstrate these values in our day-to-day work and interactions, with customers and each other.',
    description: TeamworkDescription,
  },
  {
    image: Innovation,
    title: 'Innovation',
    overview: 'We will collectively review and discuss the behaviours each year and update them if we feel that we need to.',
    description: InnovationDescription,
  },
];

export default behaviourImages;
