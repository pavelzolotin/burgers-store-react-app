import { useState } from 'react';

import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import { darkTheme, lightTheme } from './utils/Theme';
import Header from './components/Header';
import DummyPage from './pages/DummyPage';

const GlobalStyle = createGlobalStyle`
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
    background-color: ${({theme}) => theme.backgroundColor};
    transition: background-color .3s ease;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

function App() {
    const [theme, setTheme] = useState<string>(localStorage.getItem('theme') || 'dark');

    return (
        <ThemeProvider
            theme={theme === 'dark' ? darkTheme : lightTheme}
        >
            <GlobalStyle />
            <Container>
                <Header
                    theme={theme}
                    setTheme={setTheme}
                />
                <DummyPage
                    theme={theme}
                />
            </Container>
        </ThemeProvider>
    );
}

export default App;
