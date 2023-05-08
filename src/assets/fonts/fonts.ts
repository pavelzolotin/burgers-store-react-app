import { css } from 'styled-components';
import DanceFont from './dance_partner.woff2';
import HelveticaLight from './HelveticaNeueCyr-Light.woff2';
import HelveticaMedium from './HelveticaNeueCyr-Medium.woff2';

const Fonts = css`
  @font-face {
    font-family: 'DanceFont';
    src: url(${DanceFont}) format('woff2');
  }

  @font-face {
    font-family: 'Helvetica Neue Light';
    src: local('Helvetica Neue Light'),
    url(${HelveticaLight}) format('woff2');
  }

  @font-face {
    font-family: 'Helvetica Neue Medium';
    src: local('Helvetica Neue Medium'),
    url(${HelveticaMedium}) format('woff2');
  }
`;

export default Fonts;