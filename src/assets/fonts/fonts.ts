import { css } from 'styled-components';
import HelveticaLight from './HelveticaNeueCyr-Light.woff2';
import HelveticaMedium from './HelveticaNeueCyr-Medium.woff2';

const Fonts = css`
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