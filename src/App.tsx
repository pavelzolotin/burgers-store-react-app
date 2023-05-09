import { useState, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import Fonts from './assets/fonts/fonts';
import { darkTheme, lightTheme } from './utils/Theme';
import Header from './components/Header';
import Home from './pages/Home';
import Loading from './UI/Loading';
import SingleProductPage from './pages/SingleProductPage';

const GlobalStyle = createGlobalStyle`
  ${Fonts}
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
    font-family: 'Helvetica Neue Medium';
    transition: background-color .3s ease;
  }

  ::-webkit-scrollbar {
    width: 1rem;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: .5rem .5rem .5rem -.5rem rgba(34, 60, 80, 0.2) inset;
    background-color: #16222a;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({theme}) => theme.scrollbarThumb};
  }

  a {
    text-decoration: none;
  }

  button {
    display: inline-block;
    background-color: ${({theme}) => theme.button};
    border-radius: 1rem;
    padding: 1rem 2.5rem;
    min-width: 10rem;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
    border: .2rem solid transparent;
    -webkit-user-select: none;
    user-select: none;
  }

  .sticky {
    position: fixed;
    top: 0;
    margin-top: 0;
    transition: all 1s ease;
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
    const [categories, setCategories] = useState<string>('Бургеры');

    return (
        <ThemeProvider
            theme={theme === 'dark' ? darkTheme : lightTheme}
        >
            <GlobalStyle />
            <Container>
                <Header
                    theme={theme}
                    setTheme={setTheme}
                    setCategories={setCategories}
                />
                <Routes>
                    <Route path="/" element={
                        <Home categories={categories} />
                    } />
                    <Route path="items/:id" element={
                        <Suspense fallback={<Loading />}>
                            <SingleProductPage />
                        </Suspense>
                    } />
                </Routes>
            </Container>
        </ThemeProvider>
    );
}

export default App;
