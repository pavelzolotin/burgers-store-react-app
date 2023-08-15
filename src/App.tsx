import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import styled, { createGlobalStyle } from 'styled-components';

import Fonts from './assets/fonts/fonts';
import Loading from './UI/Loading/MobileLoading';
import SkeletonArr from './UI/SkeletonArr';
import Header from './components/Header';
import Footer from './components/Footer';
import PageNotFound from './pages/PageNotFound';
import SingleBurger from './pages/SingleBurger';
import SingleSalad from './pages/SingleSalad';
import SingleSnack from './pages/SingleSnack';
import SingleSause from './pages/SingleSause';
import SingleDrink from './pages/SingleDrink';
import QRPage from './pages/QR';
import Payment from './pages/Payment';

const Cart = lazy(() => import('./pages/Cart'));
const Burgers = lazy(() => import('./pages/Burgers'));
const Snacks = lazy(() => import('./pages/Snacks'));
const Salads = lazy(() => import('./pages/Salads'));
const Sauses = lazy(() => import('./pages/Sauses'));
const Drinks = lazy(() => import('./pages/Drinks'));

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
                        <Suspense fallback={<SkeletonArr />}>
                            <Burgers />
                        </Suspense>
                    } />
                    <Route path="/burgers" element={
                        <Suspense fallback={<SkeletonArr />}>
                            <Burgers />
                        </Suspense>
                    } />
                    <Route path="/salads" element={
                        <Suspense fallback={<SkeletonArr />}>
                            <Salads />
                        </Suspense>
                    } />
                    <Route path="/snacks" element={
                        <Suspense fallback={<SkeletonArr />}>
                            <Snacks />
                        </Suspense>
                    } />
                    <Route path="/sauses" element={
                        <Suspense fallback={<SkeletonArr />}>
                            <Sauses />
                        </Suspense>
                    } />
                    <Route path="/drinks" element={
                        <Suspense fallback={<SkeletonArr />}>
                            <Drinks />
                        </Suspense>
                    } />
                    <Route path="/burgers/:productId" element={
                        <SingleBurger />
                    } />
                    <Route path="/salads/:productId" element={
                        <SingleSalad />
                    } />
                    <Route path="/sauses/:productId" element={
                        <SingleSause />
                    } />
                    <Route path="/snacks/:productId" element={
                        <SingleSnack />
                    } />
                    <Route path="/drinks/:productId" element={
                        <SingleDrink />
                    } />
                    <Route path="/cart" element={
                        <Suspense fallback={<Loading />}>
                            <Cart />
                        </Suspense>
                    } />
                    <Route path="/payment" element={
                        <Payment />
                    } />
                    <Route path="/qr" element={
                        <QRPage />
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
