import Intro1Bg from '../assets/images/intro1bg.png';
import Intro2Bg from '../assets/images/intro2bg.png';
import Intro3Bg from '../assets/images/intro3bg.png';
import Presentation from '../assets/images/Presentation.png';
import GradHat from '../assets/images/GradHat.png';
import Bag from '../assets/images/Bag.png';
import LoginBg from '../assets/images/loginbg.png';
import LoginArt from '../assets/images/loginArt.png';

const images = {
  Intro1Bg,
  Intro2Bg,
  Intro3Bg,
  Presentation,
  GradHat,
  Bag,
  LoginBg,
  LoginArt,
};

export default function getImageByName(key) {
  return images[key];
}
