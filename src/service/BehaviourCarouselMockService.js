
import Integrity from '../assets/images/behaviour-carousel/Integrity.avif';
import Innovation from '../assets/images/behaviour-carousel/Innovation.avif';
import Openness from '../assets/images/behaviour-carousel/Openness.jpg';
import Teamwork from '../assets/images/behaviour-carousel/Teamwork.jpg';

const IntegrityDescription = [
  <br />,
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
  <br />,
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
  <br />,
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
  <br />,
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

const behaviourSlides = [
  {
    image: Integrity,
    title: 'Integrity',
    description: IntegrityDescription,
  },
  {
    image: Innovation,
    title: 'Innovation',
    description: InnovationDescription,
  },
  {
    image: Openness,
    title: 'Openness',
    description: OpennessDescription,
  },
  {
    image: Teamwork,
    title: 'Teamwork',
    description: TeamworkDescription,
  },
  // {
  //   image: InnovationImage,
  //   title: 'Innovation',
  //   overview: 'We will collectively review and discuss the behaviours each year and update them if we feel that we need to.',
  //   description: InnovationDescription,
  //   url: 'another-entry',
  // },
];

export default behaviourSlides;
