import { createGlobalStyle } from 'styled-components';

import DummyPage from './pages/DummyPage';
import DanceFont from './assets/fonts/dance_partner.woff2';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'DanceFont';
    src: local('DanceFont'),
    url(${DanceFont}) format('woff2');
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: #333333;
  }
`;

function App() {
    return (
        <>
            <GlobalStyle />
            <div className="App">
                <DummyPage />
            </div>
        </>
    );
}

export default App;
