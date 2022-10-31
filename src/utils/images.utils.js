import Intro1Bg from '../assets/images/intro1bg.png';
import Intro2Bg from '../assets/images/intro2bg.png';
import Intro3Bg from '../assets/images/intro3bg.png';
import Presentation from '../assets/images/Presentation.png';
import GradHat from '../assets/images/GradHat.png';
import Bag from '../assets/images/Bag.png';
import arrowRight from '../assets/images/arrow-right.png';
import arrowLeft from '../assets/images/arrow-left.png';

const images = {
  Intro1Bg,
  Intro2Bg,
  Intro3Bg,
  Presentation,
  GradHat,
  Bag,
  arrowRight,
  arrowLeft,
};

export default function getImageByName(key) {
  return images[key];
}
