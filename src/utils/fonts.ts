import { createGlobalStyle } from 'styled-components';
import DanceFont from '../assets/fonts/dance_partner.woff2';

const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'DanceFont';
  src: url(${DanceFont}) format('woff2');
}
`;

export default FontStyles;