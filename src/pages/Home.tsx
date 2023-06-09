import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import styled from 'styled-components';
import axios from 'axios';

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

type Product = {
    id: string;
    title: string;
    price: number;
    imageUrl: string[];
    descriptionShort: string;
};

const Home = (page) => {
    const {categories} = useSelector(categoriesSelector);
    const [products, setItems] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    console.log(categories)
    console.log(page)
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(`https://645b40dda8f9e4d6e7636f96.mockapi.io/burgers`)
                setItems(res.data);
                setIsLoading(false);
            } catch (err) {
                console.warn('Error', err);
            }
        };

        getProducts();
        window.scrollTo(0, 0);
    }, [setItems]);

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
                    isLoading ?
                        skeletons
                        : <>
                            <Categories>
                                <H1>{categories}</H1>
                            </Categories>
                            <Items>
                                {items}
                            </Items>
                        </>
                }
            </Content>
            <Footer />
        </>
    );
};

export default Home;