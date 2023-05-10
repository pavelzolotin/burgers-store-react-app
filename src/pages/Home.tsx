import { useState, useEffect } from 'react';

import styled from 'styled-components';
import axios from 'axios';

import Skeleton from '../UI/Skeleton';
import ProductBlock from '../components/ProductBlock';

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 7rem auto;
  padding: 10rem 3rem;
  max-width: 140rem;

  @media (min-width: 1500px) {
    max-width: 150rem;
    padding: 10rem 0 0 0;
  }

  @media (max-width: 767px) {
    padding: 3rem 1rem;
    margin: 5rem auto;
  }
`;

const Categories = styled.div``;

const Items = styled.div`
  display: flex;
  flex-wrap: wrap;

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
    descriptionShort: string;
    price: number;
    imageUrl: string[];
};

type CategoriesProps = {
    categories: string;
};

const Home = ({categories}: CategoriesProps) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState<Boolean>(true);

    useEffect(() => {
        const fetchProducts = () => {
            setIsLoading(true);

            axios.get('https://645b40dda8f9e4d6e7636f96.mockapi.io/burgers')
                .then(res => {
                    setProducts(res.data);
                    setIsLoading(false);
                })
                .catch(err => console.warn(err));
        };

        fetchProducts();
        window.scrollTo(0, 0);
    }, []);

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
        <Content>
            {
                isLoading
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
        </Content>
    );
};

export default Home;