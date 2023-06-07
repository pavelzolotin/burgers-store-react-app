import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import styled from 'styled-components';

import { useAppDispatch } from '../redux/store';
import { fetchProducts } from '../redux/product/asyncActions';
import { productSelector } from '../redux/product/selectors';
import { categoriesSelector } from '../redux/categories/selectors';
import Footer from '../components/Footer';
import Skeleton from '../UI/Skeleton';
import ProductBlock from '../components/ProductBlock';

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 14rem auto 0 auto;
  padding: 0 3rem;
  max-width: 140rem;

  @media (min-width: 1500px) {
    max-width: 150rem;
    padding: 3rem 0 0 0;
  }

  @media (max-width: 767px) {
    padding: 3rem 1rem;
    margin: 2rem auto;
  }
`;

const Categories = styled.div``;

const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const H1 = styled.h1`
  font-family: 'Helvetica Neue Light';
  font-size: 6.2rem;
  letter-spacing: 1.4px;
  color: ${({theme}) => theme.links};
  margin-bottom: 5rem;

  @media (max-width: 767px) {
    font-size: 4.2rem;
    margin-bottom: 2rem;
  }
`;

const Error = styled.div`
  width: 65rem;
  text-align: center;

  @media (max-width: 767px) {
    width: 100%;
  }

  h2 {
    font-size: 3.6rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 2rem;
    line-height: 145.4%;
    letter-spacing: 0.01em;
    color: #777777;
  }
`;

const Home = () => {
    const dispatch = useAppDispatch();

    const {products, status} = useSelector(productSelector);
    const {categories} = useSelector(categoriesSelector);

    useEffect(() => {
        const getProducts = () => {
            dispatch(fetchProducts());
        };

        getProducts();
        window.scrollTo(0, 0);
    }, [dispatch]);

    const items = products.map(item => (
        <ProductBlock
            key={item.id}
            {...item}
        />
    ));

    const skeletons = [...Array(8)].map((_, i) => (
        <Skeleton key={i} />
    ));

    return (
        <>
            <Content>
                {
                    status === 'error'
                        ? (
                            <Error>
                                <h2>Произошла ошибка.</h2>
                                <p>К сожалению, не удалось получить товары.</p>
                            </Error>
                        ) : (
                            <>
                                {
                                    status === 'loading'
                                        ? skeletons
                                        : (
                                            <>
                                                <Categories>
                                                    <H1>{categories}</H1>
                                                </Categories>
                                                <Items>
                                                    {items}
                                                </Items>
                                            </>

                                        )
                                }
                            </>
                        )
                }
            </Content>
            <Footer />
        </>
    );
};

export default Home;