import { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import Fonts from './assets/fonts/fonts';
import { darkTheme, lightTheme } from './utils/Theme';
import { productSelector } from './redux/product/selectors';
import { themeSelector } from './redux/themeMode/selectors';
import Loading from './UI/Loading';
import Header from './components/Header';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import SingleProductPage from './pages/SingleProductPage';

const Cart = lazy(() => import('./pages/Cart'));

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
    font-weight: 300;
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
    background-color: ${({theme}) => theme.scrollbarThumb};
  }

  a {
    text-decoration: none;
  }

  button {
    display: inline-block;
    background-color: ${({theme}) => theme.button};
    border-radius: 1rem;
    padding: 1.2rem 2.5rem;
    min-width: 10rem;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
    border: .2rem solid transparent;
    -webkit-user-select: none;
    user-select: none;

    &:hover {
      background-color: darken(#333333, 8%);
    }

    &:active {
      background-color: darken(#333333, 12%);
    }
  }

  .small {
    width: 9rem;
    transition: all .7s;
  }

  .large {
    width: 14rem;
    transition: all .7s;
  }

  .with-margin {
    margin-top: 14rem;
  }

  .without-margin {
    margin-top: 6rem;
  }

  .hidden {
    opacity: 0;
    height: 0;
    overflow: hidden;
    transition: all .7s;
  }

  .show {
    opacity: 1;
    height: 100%;
    transition: all .7s;
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
    const {theme} = useSelector(themeSelector);
    const {page} = useSelector(productSelector);

    return (
        <ThemeProvider
            theme={theme === 'dark' ? darkTheme : lightTheme}
        >
            <GlobalStyle />
            <Container>
                <Header />
                <Routes>
                    <Route path="/" element={
                        <Home />
                    } />
                    <Route path={page} element={
                        <Home />
                    } />
                    <Route path="items/:id" element={
                        <Suspense fallback={<Loading />}>
                            <SingleProductPage />
                        </Suspense>
                    } />
                    <Route path="/cart" element={
                        <Suspense fallback={<Loading />}>
                            <Cart />
                        </Suspense>
                    } />
                    <Route path="*" element={
                        <PageNotFound />
                    } />
                </Routes>
            </Container>
        </ThemeProvider>
    );
}

export default App;
