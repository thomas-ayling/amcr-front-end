import Integrity from '../../resources/behaviour-carousel-images/Integrity.avif';
import Innovation from '../../resources/behaviour-carousel-images/Innovation.avif';
import Openness from '../../resources/behaviour-carousel-images/Openness.jpg';
import Teamwork from '../../resources/behaviour-carousel-images/Teamwork.jpg';

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

const behaviourImages = [
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
    url: 'another-entry',
  },
];

export default behaviourImages;
