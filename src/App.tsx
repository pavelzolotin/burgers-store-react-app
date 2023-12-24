import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import styled, { createGlobalStyle } from 'styled-components';

import Fonts from './assets/fonts/fonts';
import Loading from './UI/Loading/';
import Header from './components/Header';
import Footer from './components/Footer';
import Burgers from './pages/Burgers';
import Snacks from './pages/Snacks';
import Salads from './pages/Salads';
import Sauses from './pages/Sauses';
import Drinks from './pages/Drinks';
import SingleProduct from './pages/SingleProduct';
import Payment from './pages/Payment';
import PageNotFound from './pages/PageNotFound';

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
    background-color: #212426;
    font-family: 'Helvetica Neue Medium', sans-serif;
    font-weight: 300;
    transition: background-color .3s ease;
  }

  ::-webkit-scrollbar {
    width: 1rem;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: .5rem .5rem .5rem -.5rem rgba(34, 60, 80, 0.2) inset;
    background-color: #16222a;

    @media (max-width: 767px) {
      border-radius: .5rem;
    }
  }

  ::-webkit-scrollbar-thumb {
    background-color: #3a3a3a;

    @media (max-width: 767px) {
      background-color: #fbb040;
      border-radius: .5rem;
    }
  }

  a {
    text-decoration: none;
  }

  h1 {
    font-family: 'Helvetica Neue Light', sans-serif;
    font-size: 6.2rem;
    letter-spacing: 1.4px;
    color: #f5f5f5;
    margin-bottom: 5rem;

    @media (max-width: 767px) {
      font-size: 4.2rem;
      margin-bottom: 2rem;
    }
  }
  
  button {
    display: inline-block;
    background-color: #81818133;
    border-radius: 1rem;
    padding: 1.2rem 2.5rem;
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

  .react-dadata__input {
    padding: 1rem;
    min-width: 30rem;
    border-radius: .5rem;
    font-family: 'Helvetica Neue Medium', sans-serif;
    font-weight: 300;
    font-size: 1.6rem;
    text-align: center;
    background-color: #81818133;
    color: #f5f5f5;
    outline: none;
    border: none;

    &:focus-visible {
      outline: .2rem solid #fbb040;
    }
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
    return (
        <>
            <GlobalStyle />
            <Container>
                <Header />
                <Routes>
                    <Route path="/" element={
                        <Navigate to="/burgers" replace />
                    } />
                    <Route path="/burgers" element={
                        <Burgers />
                    } />
                    <Route path="/salads" element={
                        <Salads />
                    } />
                    <Route path="/snacks" element={
                        <Snacks />
                    } />
                    <Route path="/sauses" element={
                        <Sauses />
                    } />
                    <Route path="/drinks" element={
                        <Drinks />
                    } />
                    <Route path="/:prod/:id" element={
                        <SingleProduct />
                    } />
                    <Route path="/cart" element={
                        <Suspense fallback={<Loading />}>
                            <Cart />
                        </Suspense>
                    } />
                    <Route path="/payment" element={
                        <Payment />
                    } />
                    <Route path="*" element={
                        <PageNotFound />
                    } />
                </Routes>
                <Footer />
            </Container>
        </>
    );
}

export default App;
