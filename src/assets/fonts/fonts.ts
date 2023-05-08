import { css } from 'styled-components'
import DanceFont from './dance_partner.woff2';
import Helvetica from './HelveticaNeueCyr-Medium.woff2';

const Fonts = css`

@font-face {
  font-family: 'DanceFont';
  src: url(${DanceFont}) format('woff2');
}

@font-face {
  font-family: 'Helvetica Neue';
  src: local('Helvetica Neue') url(${Helvetica}) format('woff2');
}
`;

export default Fonts;